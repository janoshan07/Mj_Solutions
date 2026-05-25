import { Link } from 'react-router-dom';
import { Facebook, Linkedin, Mail, MapPin, Phone, Twitter } from 'lucide-react';

const quickLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Portfolio', path: '/portfolio' },
  { label: 'Testimonials', path: '/testimonials' },
  { label: 'Contact', path: '/contact' }
];

const services = ['Web Development', 'Mobile App Development', 'UI/UX Design', 'Digital Marketing'];
const contactEmail = 'hello@mjsolution.com';
const contactPhone = '+94 76 681 7734';
const contactLocation = 'Colombo, Sri Lanka';

function Footer() {
  return (
    <footer className="border-t border-cyan-400/25 bg-slate-950 text-white shadow-[0_-18px_50px_rgba(167,139,250,0.10)]">
      <div className="container-shell grid gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <h2 className="text-2xl font-black text-brand-primary">MJ Solution</h2>
          <p className="mt-4 max-w-sm text-sm leading-6 text-slate-300">
            Smart Digital Solutions for Your Business through modern web, mobile, software, and digital growth
            services.
          </p>
          <div className="mt-5 flex gap-3">
            {[Facebook, Twitter, Linkedin].map((Icon, index) => (
              <a
                key={index}
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-200 transition hover:border-brand-primary hover:bg-brand-primary hover:text-slate-950"
                aria-label="Social media"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-brand-accent">Quick Links</h3>
          <ul className="mt-4 space-y-3 text-sm text-slate-300">
            {quickLinks.map((link) => (
              <li key={link.path}>
                <Link to={link.path} className="transition hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-brand-accent">Services</h3>
          <ul className="mt-4 space-y-3 text-sm text-slate-300">
            {services.map((service) => (
              <li key={service}>{service}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-brand-accent">Contact</h3>
          <ul className="mt-4 space-y-4 text-sm text-slate-300">
            <li>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contactLocation)}`}
                target="_blank"
                rel="noreferrer"
                className="flex gap-3 transition hover:text-white"
              >
                <MapPin className="mt-0.5 shrink-0 text-brand-accent" size={18} />
                {contactLocation}
              </a>
            </li>
            <li>
              <a href="tel:+94766817734" className="flex gap-3 transition hover:text-white">
                <Phone className="mt-0.5 shrink-0 text-brand-accent" size={18} />
                {contactPhone}
              </a>
            </li>
            <li>
              <a href={`mailto:${contactEmail}`} className="flex gap-3 transition hover:text-white">
                <Mail className="mt-0.5 shrink-0 text-brand-accent" size={18} />
                {contactEmail}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-cyan-400/15 py-5 text-center text-sm text-slate-500">
        &copy; {new Date().getFullYear()} MJ Solution. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
