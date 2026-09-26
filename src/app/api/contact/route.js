import { Resend } from 'resend';

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const requestWindowMs = 15 * 60 * 1000;
const requestLimit = 5;
const requestLog = new Map();

function getClientKey(request) {
  return request.headers.get('x-forwarded-for')?.split(',')[0].trim()
    || request.headers.get('x-real-ip')
    || 'unknown';
}

function isRateLimited(key) {
  const now = Date.now();
  const recentRequests = (requestLog.get(key) || []).filter((timestamp) => now - timestamp < requestWindowMs);

  if (recentRequests.length >= requestLimit) {
    requestLog.set(key, recentRequests);
    return true;
  }

  recentRequests.push(now);
  requestLog.set(key, recentRequests);

  if (requestLog.size > 1000) {
    for (const [storedKey, timestamps] of requestLog) {
      if (!timestamps.length || now - timestamps[timestamps.length - 1] >= requestWindowMs) {
        requestLog.delete(storedKey);
      }
    }
  }

  return false;
}

export async function POST(request) {
  try {
    if (isRateLimited(getClientKey(request))) {
      return Response.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429, headers: { 'Retry-After': '900' } }
      );
    }

    const { name, email, service, message, website } = await request.json();

    if (website) {
      return Response.json({ ok: true });
    }

    const errors = [];
    if (typeof name !== 'string' || name.trim().length < 2 || name.length > 100) {
      errors.push('enter your name');
    }
    if (typeof email !== 'string' || !emailPattern.test(email.trim()) || email.length > 254) {
      errors.push('enter a valid email address');
    }
    if (typeof service !== 'string' || service.trim().length === 0 || service.length > 100) {
      errors.push('select a service');
    }
    if (typeof message !== 'string' || message.trim().length < 10 || message.length > 5000) {
      errors.push('write a message with at least 10 characters');
    }

    if (errors.length) {
      return Response.json({ error: `Please ${errors.join(', ')}.` }, { status: 400 });
    }

    if (!process.env.RESEND_API_KEY || !process.env.CONTACT_TO_EMAIL || !process.env.CONTACT_FROM_EMAIL) {
      return Response.json({ error: 'The contact service is not configured yet.' }, { status: 503 });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    const { error } = await resend.emails.send({
      from: process.env.CONTACT_FROM_EMAIL,
      to: [process.env.CONTACT_TO_EMAIL],
      replyTo: email.trim(),
      subject: `New Lovi Labs inquiry: ${service.trim()}`,
      text: `Name: ${name.trim()}\nEmail: ${email.trim()}\nService: ${service.trim()}\n\n${message.trim()}`,
    });

    if (error) {
      return Response.json({ error: 'We could not send your message. Please try again.' }, { status: 502 });
    }

    return Response.json({ ok: true });
  } catch {
    return Response.json({ error: 'We could not send your message. Please try again.' }, { status: 400 });
  }
}
