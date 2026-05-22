import { Mail, MapPin, Phone } from 'lucide-react';
import ContactForm from '../components/ContactForm.jsx';

function Contact() {
  return (
    <section className="section-padding bg-slate-50">
      <div className="container-shell">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="text-sm font-black uppercase text-brand-blue">Contact Us</p>
            <h1 className="mt-3 text-4xl font-black tracking-tight text-brand-navy sm:text-5xl">
              Let us build something useful.
            </h1>
            <p className="mt-5 leading-8 text-slate-600">
              Tell us about your website, app, software, or digital growth needs. We will review your message and get
              back to you soon.
            </p>

            <div className="mt-8 space-y-4">
              <ContactItem icon={MapPin} title="Address" text="Colombo, Sri Lanka" />
              <ContactItem icon={Phone} title="Phone" text="+94 77 123 4567" />
              <ContactItem icon={Mail} title="Email" text="hello@mjsolution.com" />
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}

function ContactItem({ icon: Icon, title, text }) {
  return (
    <div className="flex gap-4 rounded-lg border border-slate-200 bg-white p-5">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-brand-blue">
        <Icon size={22} />
      </div>
      <div>
        <h2 className="font-black text-brand-navy">{title}</h2>
        <p className="mt-1 text-slate-600">{text}</p>
      </div>
    </div>
  );
}

export default Contact;
