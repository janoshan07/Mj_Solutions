import { Mail, MapPin, Phone } from 'lucide-react';
import ContactForm from '../components/ContactForm.jsx';

function Contact() {
  return (
    <section className="section-padding bg-brand-mist">
      <div className="container-shell">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="text-sm font-black uppercase text-brand-primary">Contact Us</p>
            <h1 className="mt-3 text-4xl font-black tracking-tight text-brand-ink sm:text-5xl">
              Let us build something useful.
            </h1>
            <p className="mt-5 leading-8 text-slate-300">
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
    <div className="flex gap-4 rounded-lg border border-cyan-400/15 bg-slate-950/70 p-5 shadow-sm">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-cyan-400/20 bg-cyan-400/10 text-brand-primary">
        <Icon size={22} />
      </div>
      <div>
        <h2 className="font-black text-brand-ink">{title}</h2>
        <p className="mt-1 text-slate-300">{text}</p>
      </div>
    </div>
  );
}

export default Contact;
