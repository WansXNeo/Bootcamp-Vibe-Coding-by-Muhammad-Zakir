type SectionTitleProps = {
  eyebrow: string;
  title: string;
  description?: string;
  centered?: boolean;
};

export default function SectionTitle({
  eyebrow,
  title,
  description,
  centered = false,
}: SectionTitleProps) {
  return (
    <div
      className={`max-w-3xl ${
        centered ? "mx-auto text-center" : ""
      }`}
    >
      <div
        className={`mb-4 flex items-center gap-3 ${
          centered ? "justify-center" : ""
        }`}
      >
        <span className="h-px w-8 bg-accent-dark" />

        <p className="font-mono text-xs font-semibold uppercase tracking-[0.25em] text-muted">
          {eyebrow}
        </p>

        <span className="h-px w-8 bg-accent-dark" />
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        {title}
      </h2>

      {description && (
        <p className="mt-5 text-base leading-8 text-muted sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}