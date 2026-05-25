import { motion } from 'framer-motion';

function ServiceCard({ icon: Icon, title, description }) {
  return (
    <motion.article
      className="group rounded-lg border border-cyan-400/20 bg-slate-950/75 p-6 shadow-[0_0_30px_rgba(34,211,238,0.06)] backdrop-blur transition hover:-translate-y-1 hover:scale-[1.02] hover:border-brand-primary hover:shadow-[0_0_34px_rgba(34,211,238,0.22)]"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45 }}
    >
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg border border-cyan-400/30 bg-cyan-400/10 text-brand-primary shadow-[0_0_24px_rgba(34,211,238,0.16)] transition group-hover:border-fuchsia-400/50 group-hover:text-fuchsia-300">
        <Icon size={24} />
      </div>
      <h3 className="text-xl font-black text-brand-ink">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-300">{description}</p>
    </motion.article>
  );
}

export default ServiceCard;
