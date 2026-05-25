import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, BarChart3, Code2, ShieldCheck } from 'lucide-react';
import Hero from '../components/Hero.jsx';

const highlights = [
  {
    icon: Code2,
    title: 'Custom Technology',
    text: 'Purpose-built websites, apps, and software that match your workflow.'
  },
  {
    icon: BarChart3,
    title: 'Growth Focused',
    text: 'Digital marketing and product decisions shaped by practical business goals.'
  },
  {
    icon: ShieldCheck,
    title: 'Reliable Delivery',
    text: 'Clear communication, clean implementation, and maintainable systems.'
  }
];

function Home() {
  return (
    <>
      <Hero />
      <section className="section-padding bg-brand-surface">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-sm font-black uppercase text-brand-primary">About MJ Solution</p>
              <h2 className="mt-3 text-3xl font-black text-brand-ink sm:text-4xl">
                A digital solutions partner for modern businesses.
              </h2>
              <p className="mt-5 leading-8 text-slate-300">
                MJ Solution builds practical digital products that help companies improve operations, reach customers,
                and scale with confidence. From idea to launch, we combine strategy, design, engineering, and support.
              </p>
              <Link
                to="/about"
                className="mt-7 inline-flex items-center gap-2 font-bold text-brand-primary transition hover:text-brand-ink"
              >
                Learn more
                <ArrowRight size={18} />
              </Link>
            </motion.div>

            <div className="grid gap-5 sm:grid-cols-3">
              {highlights.map(({ icon: Icon, title, text }) => (
                <article key={title} className="rounded-lg border border-cyan-400/15 bg-slate-950/70 p-5">
                  <Icon className="text-brand-primary" size={28} />
                  <h3 className="mt-4 font-black text-brand-ink">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-300">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
