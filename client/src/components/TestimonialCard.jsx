import { Quote, Star } from 'lucide-react';
import { motion } from 'framer-motion';

function TestimonialCard({ name, role, company, quote }) {
  return (
    <motion.article
      className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45 }}
    >
      <Quote className="text-brand-blue" size={30} />
      <div className="mt-5 flex gap-1 text-cyan-500">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star key={index} size={16} fill="currentColor" />
        ))}
      </div>
      <p className="mt-5 leading-7 text-slate-600">{quote}</p>
      <div className="mt-6 border-t border-slate-100 pt-5">
        <h3 className="font-black text-brand-navy">{name}</h3>
        <p className="mt-1 text-sm text-slate-500">
          {role}, {company}
        </p>
      </div>
    </motion.article>
  );
}

export default TestimonialCard;
