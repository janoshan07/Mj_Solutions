import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

function ProjectCard({ image, title, category, description, link }) {
  return (
    <motion.article
      className="overflow-hidden rounded-lg border border-cyan-400/15 bg-slate-950/70 shadow-sm transition hover:-translate-y-1 hover:border-brand-primary hover:shadow-glow"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45 }}
    >
      <img src={image} alt={title} className="aspect-[16/10] w-full object-cover" />
      <div className="p-6">
        <span className="text-sm font-bold uppercase text-brand-primary">{category}</span>
        <h3 className="mt-2 text-xl font-black text-brand-ink">{title}</h3>
        <p className="mt-3 text-sm leading-6 text-slate-300">{description}</p>
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex items-center gap-2 rounded-lg border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-bold text-brand-primary transition hover:border-brand-primary hover:bg-brand-primary hover:text-slate-950"
          >
            View Live Project
            <ExternalLink size={16} />
          </a>
        )}
      </div>
    </motion.article>
  );
}

export default ProjectCard;
