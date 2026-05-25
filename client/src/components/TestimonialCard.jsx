import { Quote, Star } from 'lucide-react';
import { motion } from 'framer-motion';

function TestimonialCard({ name, role, company, quote }) {
  return (
    <motion.article
      className="rounded-lg border border-violet-300/20 bg-slate-950/70 p-6 shadow-sm transition hover:border-brand-accent hover:shadow-glow"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45 }}
    >
      <Quote className="text-brand-primary" size={30} />
      <div className="mt-5 flex gap-1 text-brand-accent">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star key={index} size={16} fill="currentColor" />
        ))}
      </div>
      <p className="mt-5 leading-7 text-slate-300">{quote}</p>
      <div className="mt-6 border-t border-white/10 pt-5">
        <h3 className="font-black text-brand-ink">{name}</h3>
        <p className="mt-1 text-sm text-slate-400">
          {role}, {company}
        </p>
      </div>
    </motion.article>
  );
}

export default TestimonialCard;
