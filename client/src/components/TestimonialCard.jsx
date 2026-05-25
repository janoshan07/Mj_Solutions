import { Quote, Star } from 'lucide-react';
import { motion } from 'framer-motion';

function TestimonialCard({ name, role, company, quote }) {
  return (
    <motion.article
      className="group flex h-full flex-col rounded-lg border border-violet-300/20 bg-slate-950/75 p-6 shadow-[0_0_30px_rgba(217,70,239,0.06)] backdrop-blur transition hover:-translate-y-1 hover:scale-[1.02] hover:border-brand-accent hover:shadow-[0_0_34px_rgba(217,70,239,0.20)]"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45 }}
    >
      <Quote className="text-brand-primary drop-shadow-[0_0_14px_rgba(34,211,238,0.55)] transition group-hover:text-fuchsia-300" size={30} />
      <div className="mt-5 flex gap-1 text-brand-accent">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star key={index} size={16} fill="currentColor" />
        ))}
      </div>
      <p className="mt-5 flex-1 leading-7 text-slate-300">{quote}</p>
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
