import type { Metadata } from "next";
import { Epilogue, Inter, Manrope, Space_Grotesk } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { site } from "@/lib/site";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const epilogue = Epilogue({
  variable: "--font-epilogue-face",
  subsets: ["latin"],
  weight: ["800", "900"],
});

const inter = Inter({
  variable: "--font-inter-face",
  subsets: ["latin"],
  weight: ["400", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: site.name,
    template: `%s — ${site.name}`,
  },
  description:
    "Vacuno en frío, cortes frescos y mostrador en Mataderos. Frigorífico H&H: calidad que no se negocia.",
  icons: {
    icon: "/images/logos/logo-transparent.png",
    apple: "/images/logos/logo-transparent.png",
  },
  openGraph: {
    title: site.name,
    description:
      "Selección de cortes vacunos en Mataderos, CABA. Contacto por WhatsApp y retiro en sucursales.",
    locale: "es_AR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`dark ${spaceGrotesk.variable} ${manrope.variable} ${epilogue.variable} ${inter.variable} h-full antialiased`}
    >
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0..1,0&display=swap"
        />
      </head>
      <body className="min-h-full bg-background text-on-background selection:bg-primary-container selection:text-white">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
