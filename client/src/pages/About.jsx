import { motion } from 'framer-motion';
import { CheckCircle2, Eye, Target } from 'lucide-react';

const reasons = ['Client-focused process', 'Modern technology stack', 'Responsive support', 'Scalable and secure solutions'];

function About() {
  return (
    <section className="section-padding bg-brand-surface">
      <div className="container-shell">
        <div className="max-w-3xl">
          <p className="text-sm font-black uppercase text-brand-primary">About MJ Solution</p>
          <h1 className="mt-3 text-4xl font-black tracking-tight text-brand-ink sm:text-5xl">
            We turn business needs into polished digital products.
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            MJ Solution is a digital solutions and IT services company helping businesses launch websites, apps,
            software systems, and online growth strategies that are clear, useful, and built to last.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <InfoPanel
            icon={Target}
            title="Mission"
            text="To deliver smart, affordable, and reliable technology services that help businesses work better, connect with customers, and grow sustainably."
          />
          <InfoPanel
            icon={Eye}
            title="Vision"
            text="To become a trusted digital transformation partner known for thoughtful strategy, strong execution, and long-term client success."
          />
        </div>

        <div className="mt-14 rounded-lg border border-violet-300/20 bg-slate-950/70 p-6 shadow-sm sm:p-8">
          <h2 className="text-2xl font-black text-brand-ink">Why choose us</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {reasons.map((reason) => (
              <div key={reason} className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 p-4 font-bold text-slate-200">
                <CheckCircle2 className="shrink-0 text-brand-primary" size={20} />
                {reason}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoPanel({ icon: Icon, title, text }) {
  return (
    <motion.article
      className="rounded-lg border border-cyan-400/15 bg-slate-950/70 p-7 shadow-sm"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45 }}
    >
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg border border-cyan-400/20 bg-cyan-400/10 text-brand-primary">
        <Icon size={24} />
      </div>
      <h2 className="text-2xl font-black text-brand-ink">{title}</h2>
      <p className="mt-4 leading-7 text-slate-300">{text}</p>
    </motion.article>
  );
}

export default About;
