import { Link } from 'react-router-dom';
import {
  ArrowRight,
  CheckCircle2,
  Megaphone,
  Monitor,
  Palette,
  Smartphone,
  TerminalSquare,
  UsersRound
} from 'lucide-react';
import PageHero from '../components/PageHero.jsx';
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

const processSteps = [
  'Understand your business goals',
  'Plan the right digital solution',
  'Design, build, test, and launch',
  'Support improvements after delivery'
];

function Services() {
  return (
    <>
      <PageHero
        eyebrow="Welcome to MJ Solution"
        title="Our Digital"
        highlight="Services"
        description="We provide modern web, mobile, software, design, consulting, and marketing services to help your business grow."
      />

      <section className="section-padding bg-[radial-gradient(circle_at_15%_20%,rgba(34,211,238,0.10),transparent_28rem),radial-gradient(circle_at_90%_50%,rgba(217,70,239,0.10),transparent_26rem),#030712]">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-sm font-black uppercase text-brand-primary">What we do</p>
              <h1 className="mt-3 max-w-4xl text-4xl font-black tracking-tight text-brand-ink sm:text-5xl">
                Digital services built around <span className="bg-gradient-to-r from-brand-primary to-fuchsia-400 bg-clip-text text-transparent">your goals.</span>
              </h1>
              <p className="mt-5 max-w-2xl leading-8 text-slate-300">
                MJ Solution helps businesses plan, design, develop, and improve the digital tools they need to work
                better and reach more customers.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  to="/contact"
                  className="relative z-10 inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-cyan-200 bg-white px-7 py-3 text-base font-black text-slate-950 shadow-[0_0_36px_rgba(34,211,238,0.45)] transition hover:-translate-y-0.5 hover:bg-brand-primary hover:shadow-[0_0_42px_rgba(217,70,239,0.30)] focus:outline-none focus:ring-4 focus:ring-cyan-300/40"
                >
                  Start a project
                  <ArrowRight size={18} />
                </Link>
                <Link
                  to="/portfolio"
                  className="inline-flex min-h-12 items-center justify-center rounded-lg border border-violet-300/40 bg-white/5 px-6 py-3 font-bold text-slate-100 transition hover:border-brand-accent hover:text-brand-accent"
                >
                  View Portfolio
                </Link>
              </div>
            </div>

            <div className="rounded-lg border border-cyan-400/20 bg-slate-950/75 p-6 shadow-[0_0_34px_rgba(34,211,238,0.10)] backdrop-blur">
              <h2 className="text-2xl font-black text-brand-ink">How we work</h2>
              <div className="mt-6 space-y-4">
                {processSteps.map((step) => (
                  <div key={step} className="flex gap-3 rounded-lg border border-white/10 bg-white/5 p-4 transition hover:border-cyan-400/40 hover:bg-cyan-400/10">
                    <CheckCircle2 className="mt-0.5 shrink-0 text-brand-primary" size={20} />
                    <p className="font-semibold text-slate-200">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-brand-surface">
        <div className="container-shell">
          <div className="grid gap-8 rounded-lg border border-fuchsia-400/25 bg-slate-950/75 p-6 shadow-[0_0_36px_rgba(217,70,239,0.12)] backdrop-blur sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-black uppercase text-brand-primary">Need a custom solution?</p>
              <h2 className="mt-3 text-3xl font-black text-brand-ink">Tell us what you want to build.</h2>
              <p className="mt-4 max-w-3xl leading-7 text-slate-300">
                Whether you need a new website, mobile app, business system, or marketing support, we can recommend a
                practical plan for your next step.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 font-black text-slate-950 transition hover:-translate-y-0.5 hover:bg-brand-primary"
            >
              Contact Us
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
