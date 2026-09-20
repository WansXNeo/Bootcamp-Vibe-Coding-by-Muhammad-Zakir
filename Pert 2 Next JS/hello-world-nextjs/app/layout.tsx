import "./globals.css";
import Navbar from "@/components/Navbar";

const navItems = [
  {
    label: "BERANDA",
    href: "/",
  },
  {
    label: "TENTANG",
    href: "/tentang",
  },
  {
    label: "PROJECT",
    href: "/project",
  },
  {
    label: "EXPERIENCE",
    href: "/experience",
  },
  {
    label: "KONTAK",
    href: "/kontak",
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className="bg-background text-foreground">
        <Navbar logo="RIFIQ." items={navItems} />

        {children}
      </body>
    </html>
  );
}