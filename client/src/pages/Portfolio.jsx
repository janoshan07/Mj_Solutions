import ProjectCard from '../components/ProjectCard.jsx';
import SectionHeading from '../components/SectionHeading.jsx';

const projects = [
  {
    title: 'Nexa Commerce Platform',
    category: 'Web Development',
    description: 'A modern ecommerce storefront with product filtering, order flows, and analytics-ready structure.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80'
  },
  {
    title: 'CareLink Mobile App',
    category: 'Mobile App',
    description: 'A service booking app concept with clean onboarding, appointment management, and user profiles.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1000&q=80'
  },
  {
    title: 'FinTrack Dashboard',
    category: 'Software Development',
    description: 'A dashboard experience for tracking KPIs, reports, notifications, and operational performance.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80'
  },
  {
    title: 'BrightReach Campaign',
    category: 'Digital Marketing',
    description: 'A sample digital growth campaign with creative assets, landing pages, and performance reporting.',
    image: 'https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&w=1000&q=80'
  },
  {
    title: 'Atlas UI System',
    category: 'UI/UX Design',
    description: 'A scalable design system with reusable components, brand guidelines, and product screens.',
    image: 'https://images.unsplash.com/photo-1545235617-9465d2a55698?auto=format&fit=crop&w=1000&q=80'
  },
  {
    title: 'CloudOps Advisory',
    category: 'IT Consulting',
    description: 'A technology planning engagement covering system architecture, vendor selection, and rollout strategy.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1000&q=80'
  }
];

function Portfolio() {
  return (
    <section className="section-padding bg-brand-surface">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Portfolio"
          title="Sample work and portfolio concepts."
          description="Explore examples of the digital products, campaigns, and systems MJ Solution can create for clients."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
