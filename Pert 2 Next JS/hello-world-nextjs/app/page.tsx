import Button from "@/components/Button";

export default function BerandaPage() {
  return (
    <main className="nier-grid min-h-screen">
      <section className="relative flex min-h-[calc(100vh-73px)] items-center overflow-hidden">
        <div className="pointer-events-none absolute left-1/2 top-1/4 h-80 w-80 -translate-x-1/2 rounded-full bg-accent/[0.03] blur-3xl" />

        <div className="mx-auto w-full max-w-6xl px-6 py-20">
          <div className="fade-in max-w-3xl">

            <div className="nier-line mb-6">
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-muted">
                System // Portfolio
              </span>
            </div>

            <h1 className="text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-6xl md:text-7xl">
              Mochammad
              <span className="block text-accent">
                Rifiq.
              </span>
            </h1>

            <p className="mt-5 font-mono text-sm uppercase tracking-[0.2em] text-muted">
              Web Developer // Informatics
            </p>

            <p className="mt-8 max-w-2xl text-base leading-8 text-muted sm:text-lg">
              Saya membangun website dan aplikasi dengan
              pendekatan yang sederhana, terstruktur, dan
              berorientasi pada pengalaman pengguna.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Button href="/tentang">
                TENTANG SAYA
              </Button>

              <Button
                href="/kontak"
                variant="secondary"
              >
                HUBUNGI SAYA
              </Button>
            </div>

            <div className="mt-16 flex items-center gap-4 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-dark">
              <span>01</span>
              <span className="h-px w-12 bg-border" />
              <span>Welcome to my portfolio</span>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}