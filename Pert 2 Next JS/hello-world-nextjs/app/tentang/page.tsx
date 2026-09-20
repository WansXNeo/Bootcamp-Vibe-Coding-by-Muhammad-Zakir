import FeatureCard from "@/components/FeatureCard";
import SectionTitle from "@/components/SectionTitle";

const skills = [
  {
    number: "01",
    icon: "◇",
    title: "Frontend Development",
    description:
      "Membangun interface website yang responsive, terstruktur, dan nyaman digunakan dengan teknologi web modern.",
  },
  {
    number: "02",
    icon: "□",
    title: "Backend Development",
    description:
      "Mempelajari API, database, server, serta bagaimana sebuah aplikasi mengolah dan mengelola data.",
  },
  {
    number: "03",
    icon: "△",
    title: "Problem Solving",
    description:
      "Menganalisis permasalahan secara sistematis dan mencari solusi yang sesuai dengan kebutuhan.",
  },
];

export default function TentangPage() {
  return (
    <main className="nier-grid min-h-screen">
      <section className="mx-auto max-w-6xl px-6 py-20 sm:py-28">

        <SectionTitle
          eyebrow="Profile // 01"
          title="Mengenal Saya Lebih Dekat"
          description="Saya merupakan seorang developer yang memiliki ketertarikan pada dunia teknologi dan pengembangan aplikasi web."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {skills.map((skill) => (
            <FeatureCard
              key={skill.number}
              number={skill.number}
              icon={skill.icon}
              title={skill.title}
              description={skill.description}
            />
          ))}
        </div>

        <div className="mt-20 border-y border-border py-8">
          <div className="grid gap-6 sm:grid-cols-3">

            <div>
              <p className="font-mono text-xs uppercase tracking-wider text-muted-dark">
                Focus
              </p>

              <p className="mt-2 text-accent">
                Web Development
              </p>
            </div>

            <div>
              <p className="font-mono text-xs uppercase tracking-wider text-muted-dark">
                Approach
              </p>

              <p className="mt-2 text-accent">
                Structured & Simple
              </p>
            </div>

            <div>
              <p className="font-mono text-xs uppercase tracking-wider text-muted-dark">
                Status
              </p>

              <p className="mt-2 text-accent">
                Available
              </p>
            </div>

          </div>
        </div>

      </section>
    </main>
  );
}