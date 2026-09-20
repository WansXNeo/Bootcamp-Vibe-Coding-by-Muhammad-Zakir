import ContactCard from "@/components/ContactCard";
import SectionTitle from "@/components/SectionTitle";

const contacts = [
  {
    icon: "✉",
    label: "Email",
    value: "test@email.com",
    href: "mailto:contoh@email.com",
  },
  {
    icon: "in",
    label: "LinkedIn",
    value: "LinkedIn Profile",
    href: "https://linkedin.com",
  },
  {
    icon: "GH",
    label: "GitHub",
    value: "GitHub Profile",
    href: "https://github.com",
  },
  {
    icon: "◎",
    label: "Location",
    value: "Indonesia",
  },
];

export default function KontakPage() {
  return (
    <main className="nier-grid min-h-screen">
      <section className="mx-auto max-w-6xl px-6 py-20 sm:py-28">

        <SectionTitle
          eyebrow="Communication // 03"
          title="Mari Terhubung"
          description="Jika kamu ingin berdiskusi mengenai project, teknologi, atau ingin mengenal saya lebih jauh, silakan hubungi saya."
          centered
        />

        <div className="mx-auto mt-14 grid max-w-4xl gap-5 sm:grid-cols-2">
          {contacts.map((contact) => (
            <ContactCard
              key={contact.label}
              icon={contact.icon}
              label={contact.label}
              value={contact.value}
              href={contact.href}
            />
          ))}
        </div>

        <div className="mx-auto mt-16 max-w-4xl border border-border bg-surface/60 p-6 sm:p-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-dark">
                System Message
              </p>

              <p className="mt-2 text-lg text-accent">
                Thank you for visiting my portfolio.
              </p>
            </div>

            <div className="font-mono text-xs text-muted-dark">
              STATUS: ONLINE
            </div>

          </div>
        </div>

      </section>
    </main>
  );
}