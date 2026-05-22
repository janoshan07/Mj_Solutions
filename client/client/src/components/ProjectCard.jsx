import { motion } from 'framer-motion';

function ProjectCard({ image, title, category, description }) {
  return (
    <motion.article
      className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-glow"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45 }}
    >
      <img src={image} alt={title} className="aspect-[16/10] w-full object-cover" />
      <div className="p-6">
        <span className="text-sm font-bold uppercase text-brand-blue">{category}</span>
        <h3 className="mt-2 text-xl font-black text-brand-navy">{title}</h3>
        <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
      </div>
    </motion.article>
  );
}

export default ProjectCard;
