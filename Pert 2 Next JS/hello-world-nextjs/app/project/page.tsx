import Button from "@/components/Button";
import FeatureCard from "@/components/FeatureCard";
import SectionTitle from "@/components/SectionTitle";

const projects = [
  {
    number: "01",
    icon: "◇",
    title: "LearnCheck!",
    description:
      "Platform formative assessment yang membantu pengguna mendapatkan feedback pembelajaran secara lebih cepat dengan bantuan AI.",
  },
  {
    number: "02",
    icon: "□",
    title: "Pangkalan Ratnawilis",
    description:
      "Aplikasi manajemen penjualan LPG 3kg untuk membantu pencatatan penjualan, pembelian, stok, quota, dan pembuatan laporan.",
  },
  {
    number: "03",
    icon: "△",
    title: "Portfolio Website",
    description:
      "Website portfolio personal yang dibangun menggunakan Next.js, TypeScript, dan Tailwind CSS dengan pendekatan component-based.",
  },
];

export default function ProjectPage() {
  return (
    <main className="nier-grid min-h-screen">
      <section className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <SectionTitle
          eyebrow="Projects // 02"
          title="Project yang Saya Kerjakan"
          description="Beberapa project yang menjadi bagian dari proses belajar, pengembangan skill, dan penerapan teknologi yang saya pelajari."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <FeatureCard
              key={project.number}
              number={project.number}
              icon={project.icon}
              title={project.title}
              description={project.description}
            />
          ))}
        </div>

        <div className="mt-16 border-t border-border pt-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-dark">
                Repository
              </p>

              <p className="mt-2 text-lg text-accent">
                Explore my development projects.
              </p>
            </div>

            <Button
              href="https://github.com"
              variant="secondary"
            >
              GITHUB
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}