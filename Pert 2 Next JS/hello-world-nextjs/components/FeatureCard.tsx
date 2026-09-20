type FeatureCardProps = {
  title: string;
  description: string;
  icon: string;
  number?: string;
};

export default function FeatureCard({
  title,
  description,
  icon,
  number,
}: FeatureCardProps) {
  return (
    <div className="nier-card group relative overflow-hidden p-6 sm:p-7">
      {number && (
        <span className="absolute right-5 top-5 font-mono text-xs text-muted-dark">
          {number}
        </span>
      )}

      <div className="mb-6 flex h-12 w-12 items-center justify-center border border-border bg-surface-light text-xl transition group-hover:border-border-light">
        {icon}
      </div>

      <h3 className="text-xl font-semibold text-foreground">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-7 text-muted">
        {description}
      </p>

      <div className="mt-6 h-px w-8 bg-accent-dark transition-all duration-300 group-hover:w-16" />
    </div>
  );
}