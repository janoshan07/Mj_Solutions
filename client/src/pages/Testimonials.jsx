import SectionHeading from '../components/SectionHeading.jsx';
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
    <section className="section-padding bg-slate-50">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Testimonials"
          title="Trusted by growing teams."
          description="Client feedback from sample projects across websites, software systems, and digital marketing campaigns."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
