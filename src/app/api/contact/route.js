import { Resend } from 'resend';

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request) {
  try {
    const { name, email, service, message, website } = await request.json();

    if (website) {
      return Response.json({ ok: true });
    }

    if (
      typeof name !== 'string' || name.trim().length < 2 || name.length > 100 ||
      typeof email !== 'string' || !emailPattern.test(email) || email.length > 254 ||
      typeof service !== 'string' || service.trim().length === 0 || service.length > 100 ||
      typeof message !== 'string' || message.trim().length < 10 || message.length > 5000
    ) {
      return Response.json({ error: 'Please check the form fields and try again.' }, { status: 400 });
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
