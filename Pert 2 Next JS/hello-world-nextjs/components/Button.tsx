import Link from "next/link";

type ButtonProps = {
  children: React.ReactNode;
  href: string;
  variant?: "primary" | "secondary";
};

export default function Button({
  children,
  href,
  variant = "primary",
}: ButtonProps) {
  const baseStyle =
    "inline-flex items-center justify-center px-6 py-3 font-mono text-xs font-bold tracking-wider transition duration-300";

  const variantStyle =
    variant === "primary"
      ? "bg-accent text-background hover:bg-accent-light"
      : "border border-border bg-transparent text-accent hover:border-border-light hover:bg-surface";

  return (
    <Link
      href={href}
      className={`${baseStyle} ${variantStyle}`}
    >
      {children}
    </Link>
  );
}