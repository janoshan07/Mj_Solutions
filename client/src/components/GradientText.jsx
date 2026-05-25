function GradientText({ children, className = '' }) {
  return (
    <span className={`bg-gradient-to-r from-brand-primary via-fuchsia-400 to-brand-accent bg-clip-text text-transparent ${className}`}>
      {children}
    </span>
  );
}

export default GradientText;
