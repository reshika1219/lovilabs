'use client';
import { useState } from 'react';
import './ContactForm.css';

const SERVICES = [
  'Web Development',
  'Web Applications',
  'UI/UX Design',
  'Social Media Marketing',
  'AI Solutions',
  'Digital Strategy',
  'POS Systems',
  'Other',
];

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: '',
  });
  const [status, setStatus] = useState('idle');
  const [focused, setFocused] = useState('');

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    // Simulate send (replace with actual API call later)
    setTimeout(() => {
      setStatus('sent');
      setFormData({ name: '', email: '', service: '', message: '' });
      setTimeout(() => setStatus('idle'), 4000);
    }, 1500);
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit} id="contact-form">
      <div className={`contact-form__group ${focused === 'name' ? 'contact-form__group--focused' : ''} ${formData.name ? 'contact-form__group--filled' : ''}`}>
        <label htmlFor="contact-name" className="contact-form__label">Your Name</label>
        <input
          type="text"
          id="contact-name"
          name="name"
          className="contact-form__input"
          value={formData.name}
          onChange={handleChange}
          onFocus={() => setFocused('name')}
          onBlur={() => setFocused('')}
          required
        />
        <span className="contact-form__line" />
      </div>

      <div className={`contact-form__group ${focused === 'email' ? 'contact-form__group--focused' : ''} ${formData.email ? 'contact-form__group--filled' : ''}`}>
        <label htmlFor="contact-email" className="contact-form__label">Email Address</label>
        <input
          type="email"
          id="contact-email"
          name="email"
          className="contact-form__input"
          value={formData.email}
          onChange={handleChange}
          onFocus={() => setFocused('email')}
          onBlur={() => setFocused('')}
          required
        />
        <span className="contact-form__line" />
      </div>

      <div className={`contact-form__group ${focused === 'service' ? 'contact-form__group--focused' : ''} ${formData.service ? 'contact-form__group--filled' : ''}`}>
        <label htmlFor="contact-service" className="contact-form__label">Service Needed</label>
        <select
          id="contact-service"
          name="service"
          className="contact-form__input contact-form__select"
          value={formData.service}
          onChange={handleChange}
          onFocus={() => setFocused('service')}
          onBlur={() => setFocused('')}
          required
        >
          <option value="" disabled></option>
          {SERVICES.map((service) => (
            <option key={service} value={service}>{service}</option>
          ))}
        </select>
        <span className="contact-form__line" />
      </div>

      <div className={`contact-form__group ${focused === 'message' ? 'contact-form__group--focused' : ''} ${formData.message ? 'contact-form__group--filled' : ''}`}>
        <label htmlFor="contact-message" className="contact-form__label">Your Message</label>
        <textarea
          id="contact-message"
          name="message"
          className="contact-form__input contact-form__textarea"
          value={formData.message}
          onChange={handleChange}
          onFocus={() => setFocused('message')}
          onBlur={() => setFocused('')}
          rows={4}
          required
        />
        <span className="contact-form__line" />
      </div>

      <button
        type="submit"
        className={`contact-form__submit ${status === 'sending' ? 'contact-form__submit--sending' : ''} ${status === 'sent' ? 'contact-form__submit--sent' : ''}`}
        disabled={status === 'sending'}
       
      >
        <span className="contact-form__submit-text">
          {status === 'idle' && 'Send Message'}
          {status === 'sending' && 'Sending...'}
          {status === 'sent' && 'Message Sent ✓'}
        </span>
      </button>
    </form>
  );
}
