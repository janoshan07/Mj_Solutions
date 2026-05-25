import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import { submitContactMessage } from '../api/contact.js';

const initialForm = {
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: ''
};

function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const nextErrors = {};

    if (!form.name.trim()) nextErrors.name = 'Name is required.';
    if (!form.email.trim()) {
      nextErrors.email = 'Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      nextErrors.email = 'Enter a valid email address.';
    }
    if (!form.subject.trim()) nextErrors.subject = 'Subject is required.';
    if (!form.message.trim()) nextErrors.message = 'Message is required.';

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: '' }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus({ type: '', message: '' });

    if (!validate()) return;

    setIsSubmitting(true);

    try {
      await submitContactMessage(form);
      setStatus({ type: 'success', message: 'Thanks! Your message has been sent.' });
      setForm(initialForm);
    } catch (error) {
      setStatus({
        type: 'error',
        message: error.response?.data?.message || error.message || 'Something went wrong. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="rounded-lg border border-cyan-400/20 bg-slate-950/75 p-6 shadow-glow backdrop-blur sm:p-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      noValidate
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Input label="Name" name="name" value={form.name} onChange={handleChange} error={errors.name} />
        <Input label="Email" name="email" type="email" value={form.email} onChange={handleChange} error={errors.email} />
        <Input label="Phone" name="phone" value={form.phone} onChange={handleChange} error={errors.phone} />
        <Input label="Subject" name="subject" value={form.subject} onChange={handleChange} error={errors.subject} />
      </div>

      <div className="mt-5">
        <label htmlFor="message" className="text-sm font-bold text-slate-200">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows="6"
          value={form.message}
          onChange={handleChange}
          className={`mt-2 w-full rounded-lg border bg-slate-900/80 px-4 py-3 text-slate-100 outline-none transition placeholder:text-slate-500 focus:border-brand-primary focus:ring-4 focus:ring-cyan-400/10 ${
            errors.message ? 'border-red-400' : 'border-white/10'
          }`}
        />
        {errors.message && <p className="mt-2 text-sm text-red-600">{errors.message}</p>}
      </div>

      {status.message && (
        <p className={`mt-5 rounded-lg px-4 py-3 text-sm ${status.type === 'success' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
          {status.message}
        </p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-brand-primary px-6 py-3 font-bold text-slate-950 shadow-glow transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
      >
        <Send size={18} />
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>
    </motion.form>
  );
}

function Input({ label, name, value, onChange, error, type = 'text' }) {
  return (
    <div>
      <label htmlFor={name} className="text-sm font-bold text-slate-200">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        className={`mt-2 w-full rounded-lg border bg-slate-900/80 px-4 py-3 text-slate-100 outline-none transition placeholder:text-slate-500 focus:border-brand-primary focus:ring-4 focus:ring-cyan-400/10 ${
          error ? 'border-red-400' : 'border-white/10'
        }`}
      />
      {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
    </div>
  );
}

export default ContactForm;
