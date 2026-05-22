function SectionHeading({ eyebrow, title, description, align = 'center' }) {
  const alignment = align === 'left' ? 'text-left' : 'mx-auto text-center';

  return (
    <div className={`max-w-3xl ${alignment}`}>
      {eyebrow && <p className="text-sm font-black uppercase text-brand-blue">{eyebrow}</p>}
      <h1 className="mt-3 text-4xl font-black tracking-tight text-brand-navy sm:text-5xl">{title}</h1>
      {description && <p className="mt-5 leading-8 text-slate-600">{description}</p>}
    </div>
  );
}

export default SectionHeading;
