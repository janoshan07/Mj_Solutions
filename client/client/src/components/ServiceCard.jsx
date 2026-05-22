import { motion } from 'framer-motion';

function ServiceCard({ icon: Icon, title, description }) {
  return (
    <motion.article
      className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-cyan-200 hover:shadow-glow"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45 }}
    >
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 text-brand-blue">
        <Icon size={24} />
      </div>
      <h3 className="text-xl font-black text-brand-navy">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
    </motion.article>
  );
}

export default ServiceCard;
