import { motion } from 'framer-motion';
import GradientText from './GradientText.jsx';

function PageHero({ eyebrow, title, highlight, description }) {
  return (
    <section className="relative overflow-hidden border-b border-cyan-400/10 bg-[radial-gradient(circle_at_20%_10%,rgba(34,211,238,0.16),transparent_30rem),radial-gradient(circle_at_85%_20%,rgba(217,70,239,0.16),transparent_28rem),#030712] px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute right-[-8rem] top-16 h-52 w-52 rounded-full border border-fuchsia-400/25 shadow-[0_0_70px_rgba(217,70,239,0.22)]" />
        <div className="absolute bottom-8 left-[-7rem] h-48 w-48 rounded-full border border-cyan-400/20 shadow-[0_0_80px_rgba(34,211,238,0.18)]" />
      </div>

      <motion.div
        className="container-shell relative z-10 mx-auto max-w-4xl text-center"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
      >
        <p className="text-sm font-black uppercase text-brand-primary">{eyebrow}</p>
        <h1 className="mt-3 text-4xl font-black tracking-tight text-brand-ink sm:text-5xl lg:text-6xl">
          {title} {highlight && <GradientText>{highlight}</GradientText>}
        </h1>
        {description && <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-300">{description}</p>}
      </motion.div>
    </section>
  );
}

export default PageHero;
