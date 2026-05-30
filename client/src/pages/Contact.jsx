import { Mail, MapPin, Phone } from 'lucide-react';
import ContactForm from '../components/ContactForm.jsx';
import PageHero from '../components/PageHero.jsx';

const contactEmail = 'hello@mjsolution.com';
const contactPhone = '+94 76 681 7734';
const contactLocation = 'Colombo, Sri Lanka';

function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Contact MJ Solution"
        title="Let's Build Something"
        highlight="Together"
        description="Tell us about your website, app, software, or digital growth needs. We will review your message and get back to you soon."
      />

      <section className="section-padding bg-[radial-gradient(circle_at_16%_20%,rgba(34,211,238,0.10),transparent_28rem),radial-gradient(circle_at_84%_42%,rgba(217,70,239,0.10),transparent_26rem),#030712]">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="text-sm font-black uppercase text-brand-primary">Get in touch</p>
              <h1 className="mt-3 text-4xl font-black tracking-tight text-brand-ink sm:text-5xl">
                Start your next digital project.
              </h1>
              <p className="mt-5 leading-8 text-slate-300">
                Share a few details and we will help you choose a practical plan for launch, improvement, or support.
              </p>

              <div className="mt-8 space-y-4">
                <ContactItem icon={Mail} title="Email" text={contactEmail} href={`mailto:${contactEmail}`} />
                <ContactItem icon={Phone} title="Phone" text={contactPhone} href="tel:+94766817734" />
                <ContactItem
                  icon={MapPin}
                  title="Location"
                  text={contactLocation}
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contactLocation)}`}
                  external
                />
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}

function ContactItem({ icon: Icon, title, text, href, external = false }) {
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer' : undefined}
      className="group flex gap-4 rounded-lg border border-cyan-400/20 bg-slate-950/75 p-5 shadow-[0_0_28px_rgba(34,211,238,0.07)] backdrop-blur transition hover:-translate-y-1 hover:border-brand-primary hover:shadow-[0_0_30px_rgba(34,211,238,0.18)]"
    >
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-cyan-400/30 bg-cyan-400/10 text-brand-primary shadow-[0_0_20px_rgba(34,211,238,0.14)] transition group-hover:text-fuchsia-300">
        <Icon size={22} />
      </div>
      <div>
        <h2 className="font-black text-brand-ink">{title}</h2>
        <p className="mt-1 text-slate-300">{text}</p>
      </div>
    </a>
  );
}

export default Contact;
