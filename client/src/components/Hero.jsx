import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

function Hero() {
  return (
    <section className="relative overflow-hidden bg-[radial-gradient(circle_at_20%_10%,rgba(34,211,238,0.18),transparent_32rem),radial-gradient(circle_at_90%_20%,rgba(167,139,250,0.18),transparent_28rem),#030712]">
      <div className="container-shell grid min-h-[calc(100vh-74px)] items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_0.85fr] lg:px-8">
        <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }}>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-brand-primary shadow-glow">
            <Sparkles size={16} />
            Digital solutions built for growth
          </div>
          <h1 className="max-w-4xl text-4xl font-black tracking-tight text-brand-ink sm:text-5xl lg:text-7xl">
            MJ Solution
          </h1>
          <p className="mt-5 max-w-2xl text-xl font-semibold text-brand-primary sm:text-2xl">
            Smart Digital Solutions for Your Business
          </p>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            We help ambitious teams design, develop, and launch reliable digital products, modern websites,
            scalable software, and measurable online growth campaigns.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/services"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand-primary px-6 py-3 font-bold text-slate-950 shadow-glow transition hover:bg-white"
            >
              Our Services
              <ArrowRight size={18} />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-lg border border-violet-300/40 bg-white/5 px-6 py-3 font-bold text-slate-100 transition hover:border-brand-accent hover:text-brand-accent"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>

        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <div className="rounded-2xl border border-cyan-400/20 bg-slate-950/70 p-4 shadow-2xl shadow-cyan-950/30 backdrop-blur">
            <img
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80"
              alt="Digital team working on software solutions"
              className="aspect-[4/3] w-full rounded-xl object-cover"
            />
            <div className="grid gap-3 pt-4 sm:grid-cols-3">
              {['Strategy', 'Design', 'Build'].map((item) => (
                <div key={item} className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-center text-sm font-bold text-slate-200">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
