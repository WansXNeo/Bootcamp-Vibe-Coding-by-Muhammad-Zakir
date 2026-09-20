type TimelineItem = {
  period: string;
  title: string;
  company: string;
  description: string;
  technologies?: string[];
};

type TimelineProps = {
  items: TimelineItem[];
};

export default function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative ml-3 border-l border-border sm:ml-5">
      {items.map((item, index) => (
        <div
          key={`${item.company}-${item.title}`}
          className="relative pb-12 pl-8 last:pb-0 sm:pl-10"
        >
          {/* Timeline Dot */}
          <div className="absolute -left-[7px] top-1 h-3 w-3 border border-accent bg-background" />

          {/* Number */}
          <div className="mb-3 font-mono text-xs tracking-[0.2em] text-muted-dark">
            {String(index + 1).padStart(2, "0")}
          </div>

          {/* Period */}
          <p className="font-mono text-xs uppercase tracking-[0.15em] text-accent-dark">
            {item.period}
          </p>

          {/* Title */}
          <h3 className="mt-2 text-xl font-semibold text-foreground sm:text-2xl">
            {item.title}
          </h3>

          {/* Company */}
          <p className="mt-1 text-sm font-medium text-accent">
            {item.company}
          </p>

          {/* Description */}
          <p className="mt-4 max-w-2xl text-sm leading-7 text-muted">
            {item.description}
          </p>

          {/* Technologies */}
          {item.technologies && item.technologies.length > 0 && (
            <div className="mt-5 flex flex-wrap gap-2">
              {item.technologies.map((technology) => (
                <span
                  key={technology}
                  className="border border-border bg-surface-light px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-muted"
                >
                  {technology}
                </span>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}