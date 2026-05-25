import { Megaphone, Monitor, Palette, Smartphone, TerminalSquare, UsersRound } from 'lucide-react';
import ServiceCard from '../components/ServiceCard.jsx';

const services = [
  {
    icon: Monitor,
    title: 'Web Development',
    description: 'Responsive websites and web applications built for speed, clarity, SEO, and easy maintenance.'
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'User-friendly mobile app experiences for startups, service businesses, and growing teams.'
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Clean interfaces, user journeys, wireframes, and visual systems that make products easier to use.'
  },
  {
    icon: Megaphone,
    title: 'Digital Marketing',
    description: 'Campaign planning, content direction, social growth, and digital strategies focused on measurable results.'
  },
  {
    icon: TerminalSquare,
    title: 'Software Development',
    description: 'Custom business systems, dashboards, automations, and integrations tailored to your operations.'
  },
  {
    icon: UsersRound,
    title: 'IT Consulting',
    description: 'Practical guidance on technology choices, system planning, product strategy, and digital transformation.'
  }
];

function Services() {
  return (
    <section className="section-padding bg-brand-mist">
      <div className="container-shell">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-black uppercase text-brand-primary">Our Services</p>
          <h1 className="mt-3 text-4xl font-black tracking-tight text-brand-ink sm:text-5xl">
            Digital services for every stage of growth.
          </h1>
          <p className="mt-5 leading-8 text-slate-300">
            From first launch to advanced systems, MJ Solution provides the technical and creative support businesses need.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
