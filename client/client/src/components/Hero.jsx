import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-brand-mist to-cyan-50">
      <div className="container-shell grid min-h-[calc(100vh-74px)] items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_0.85fr] lg:px-8">
        <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }}>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-white px-4 py-2 text-sm font-semibold text-brand-blue shadow-sm">
            <Sparkles size={16} />
            Digital solutions built for growth
          </div>
          <h1 className="max-w-4xl text-4xl font-black tracking-tight text-brand-navy sm:text-5xl lg:text-7xl">
            MJ Solution
          </h1>
          <p className="mt-5 max-w-2xl text-xl font-semibold text-brand-blue sm:text-2xl">
            Smart Digital Solutions for Your Business
          </p>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            We help ambitious teams design, develop, and launch reliable digital products, modern websites,
            scalable software, and measurable online growth campaigns.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/services"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand-blue px-6 py-3 font-bold text-white shadow-glow transition hover:bg-blue-700"
            >
              Our Services
              <ArrowRight size={18} />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-6 py-3 font-bold text-slate-900 transition hover:border-brand-cyan hover:text-brand-blue"
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
          <div className="rounded-2xl border border-white bg-white/80 p-4 shadow-2xl shadow-cyan-900/10 backdrop-blur">
            <img
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80"
              alt="Digital team working on software solutions"
              className="aspect-[4/3] w-full rounded-xl object-cover"
            />
            <div className="grid gap-3 pt-4 sm:grid-cols-3">
              {['Strategy', 'Design', 'Build'].map((item) => (
                <div key={item} className="rounded-lg bg-slate-50 px-4 py-3 text-center text-sm font-bold text-slate-700">
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
