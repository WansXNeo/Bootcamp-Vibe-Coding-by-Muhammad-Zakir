import SectionTitle from "@/components/SectionTitle";
import Timeline from "@/components/Timeline";

const experiences = [
  {
    period: "2025",
    title: "Electronic & IT System Intern",
    company: "PT Angkasa Pura",
    description:
      "Membantu operasional dan maintenance perangkat IT serta sistem elektronik bandara seperti FIDS, server, CCTV, videotron, dan perangkat elektronik lainnya.",
    technologies: [
      "IT Support",
      "Troubleshooting",
      "Networking",
      "Hardware",
    ],
  },
  {
    period: "2025",
    title: "Maintenance Administration",
    company: "PT Telkom Akses",
    description:
      "Membantu pencatatan dan pelaporan aktivitas maintenance area yang dilakukan oleh tim lapangan serta memastikan data administrasi maintenance terdokumentasi.",
    technologies: [
      "Administration",
      "Reporting",
      "Maintenance",
      "Documentation",
    ],
  },
  {
    period: "2024 - 2025",
    title: "React & Back-End Learner",
    company: "Dicoding — ASAH",
    description:
      "Mempelajari pengembangan aplikasi web menggunakan React dan Back-End serta bekerja dalam tim untuk mengembangkan project LearnCheck!.",
    technologies: [
      "React",
      "JavaScript",
      "REST API",
      "Git",
    ],
  },
];

export default function ExperiencePage() {
  return (
    <main className="nier-grid min-h-screen">
      <section className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <SectionTitle
          eyebrow="Experience // 03"
          title="Perjalanan Saya"
          description="Pengalaman akademik, magang, dan proses belajar yang membentuk kemampuan saya di bidang teknologi informasi."
        />

        <div className="mx-auto mt-16 max-w-4xl">
          <Timeline items={experiences} />
        </div>
      </section>
    </main>
  );
}