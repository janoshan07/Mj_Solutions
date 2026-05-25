import { motion } from 'framer-motion';

function ServiceCard({ icon: Icon, title, description }) {
  return (
    <motion.article
      className="rounded-lg border border-cyan-400/15 bg-slate-950/70 p-6 shadow-sm transition hover:-translate-y-1 hover:border-brand-primary hover:shadow-glow"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45 }}
    >
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg border border-cyan-400/20 bg-cyan-400/10 text-brand-primary">
        <Icon size={24} />
      </div>
      <h3 className="text-xl font-black text-brand-ink">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-300">{description}</p>
    </motion.article>
  );
}

export default ServiceCard;
