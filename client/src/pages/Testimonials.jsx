import PageHero from '../components/PageHero.jsx';
import TestimonialCard from '../components/TestimonialCard.jsx';

const testimonials = [
  {
    name: 'Kasun Perera',
    role: 'Founder',
    company: 'Nexa Retail',
    quote:
      'MJ Solution helped us launch a clean ecommerce experience with the right balance of speed, design, and practical business features.'
  },
  {
    name: 'Amara Fernando',
    role: 'Operations Manager',
    company: 'CareLink Services',
    quote:
      'The team understood our workflow quickly and translated it into a system our staff could actually use every day.'
  },
  {
    name: 'Ravi Silva',
    role: 'Marketing Lead',
    company: 'BrightReach',
    quote:
      'Their digital strategy made our campaigns easier to track and gave us a clearer path for improving results each month.'
  }
];

function Testimonials() {
  return (
    <>
      <PageHero
        eyebrow="Client feedback"
        title="What Our Clients"
        highlight="Say"
        description="Professional feedback from teams who trust MJ Solution for websites, software systems, and digital growth."
      />

      <section className="section-padding bg-[radial-gradient(circle_at_12%_20%,rgba(34,211,238,0.10),transparent_28rem),radial-gradient(circle_at_88%_40%,rgba(217,70,239,0.11),transparent_26rem),#030712]">
        <div className="container-shell">
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.name} {...testimonial} />
            ))}
          </div>

          <div className="mt-12 grid gap-4 rounded-lg border border-cyan-400/20 bg-slate-950/75 p-6 text-center shadow-[0_0_34px_rgba(34,211,238,0.10)] backdrop-blur sm:grid-cols-3 sm:p-8">
            <Stat value="50+" label="Projects Completed" />
            <Stat value="30+" label="Happy Clients" />
            <Stat value="5+" label="Years Experience" />
          </div>
        </div>
      </section>
    </>
  );
}

function Stat({ value, label }) {
  return (
    <div className="rounded-lg border border-white/10 bg-white/5 p-5">
      <p className="text-3xl font-black text-brand-primary drop-shadow-[0_0_16px_rgba(34,211,238,0.35)]">{value}</p>
      <p className="mt-2 text-sm font-semibold text-slate-300">{label}</p>
    </div>
  );
}

export default Testimonials;
