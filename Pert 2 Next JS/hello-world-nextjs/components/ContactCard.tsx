type ContactCardProps = {
  icon: string;
  label: string;
  value: string;
  href?: string;
};

export default function ContactCard({
  icon,
  label,
  value,
  href,
}: ContactCardProps) {
  const content = (
    <div className="nier-card group p-6">
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-border bg-surface-light text-xl transition group-hover:border-border-light">
          {icon}
        </div>

        <div className="min-w-0">
          <p className="font-mono text-xs uppercase tracking-wider text-muted-dark">
            {label}
          </p>

          <p className="mt-1 truncate font-medium text-accent transition group-hover:text-accent-light">
            {value}
          </p>
        </div>
      </div>
    </div>
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        {content}
      </a>
    );
  }

  return content;
}