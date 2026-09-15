import type { Metadata } from "next";
import Image from "next/image";
import { ContactForm } from "@/components/ContactForm";
import { Icon } from "@/components/Icon";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Consultas, mayoristas y reservas. Teléfono, WhatsApp y mostrador en Rodo 6483, Mataderos.",
};

export default function ContactoPage() {
  return (
    <main className="pt-32 pb-20">
      <section className="px-8 max-w-[1920px] mx-auto mb-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-l-4 border-primary-container pl-8">
          <div>
            <h1 className="text-7xl md:text-9xl font-black headline-font uppercase tracking-tighter leading-none mb-4">
              Escribinos <span className="text-primary-container">hoy</span>
            </h1>
            <p className="text-xl text-on-surface-variant font-light max-w-2xl">
              Cortes a medida, consultas mayoristas o reservas. Te respondemos por formulario,
              teléfono o WhatsApp.
            </p>
          </div>
          <div className="text-right">
            <span className="text-secondary-container headline-font text-2xl uppercase tracking-widest block mb-2">
              Ubicación
            </span>
            <address className="not-italic text-on-surface text-3xl font-bold uppercase tracking-tight">
              {site.address}
              <br />
              {site.neighborhood}
            </address>
          </div>
        </div>
      </section>

      <section className="px-8 max-w-[1920px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-px bg-[#ffffff15] border border-[#ffffff15]">
          <div className="lg:col-span-7 bg-surface-container-low p-12 lg:p-20">
            <h2 className="headline-font text-4xl font-black uppercase mb-12 tracking-tight">
              Consulta directa
            </h2>
            <ContactForm />
          </div>
          <div className="lg:col-span-5 flex flex-col gap-px">
            <div className="bg-surface-container p-12 lg:p-16 h-full border-b border-[#ffffff15] lg:border-b-0">
              <h2 className="headline-font text-3xl font-black uppercase mb-8 tracking-tight flex items-center gap-4">
                <Icon name="schedule" className="text-primary-container" />
                Horarios
              </h2>
              <ul className="space-y-4 headline-font uppercase tracking-wider">
                <li className="flex justify-between items-start gap-4 py-3 border-b border-outline-variant/30">
                  <span className="text-on-surface-variant">Lun – sáb</span>
                  <span className="text-on-surface font-bold text-right">
                    9:00 — 13:30
                    <br />
                    16:30 — 20:30
                  </span>
                </li>
                <li className="flex justify-between items-center py-3 border-b border-outline-variant/30">
                  <span className="text-on-surface-variant">Domingo</span>
                  <span className="text-on-surface font-bold">{site.hoursSunday}</span>
                </li>
                <li className="flex justify-between items-center py-3 border-b border-outline-variant/30">
                  <span className="text-on-surface-variant">Envíos</span>
                  <span className="text-on-surface text-right font-bold max-w-[14rem]">
                    {site.shipping}
                  </span>
                </li>
                <li className="flex justify-between items-center py-3 border-b border-outline-variant/30">
                  <span className="text-on-surface-variant">Teléfono</span>
                  <a
                    className="text-on-surface font-bold hover:text-hh-yellow transition-colors"
                    href={site.phoneHref}
                  >
                    {site.phone}
                  </a>
                </li>
                <li className="flex justify-between items-center py-3 text-primary-container opacity-90">
                  <span className="text-on-surface-variant">WhatsApp</span>
                  <a
                    className="font-bold hover:underline"
                    href={site.whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {site.whatsapp}
                  </a>
                </li>
              </ul>
            </div>
            <div className="bg-secondary-container p-12 lg:p-16 group transition-all hover:bg-opacity-95">
              <div className="flex flex-col items-center text-center">
                <Icon
                  name="chat_bubble"
                  className="text-on-secondary-container text-7xl mb-6 group-hover:scale-110 transition-transform"
                  filled
                />
                <h2 className="headline-font text-4xl font-black uppercase text-on-secondary-container tracking-tighter leading-none mb-4">
                  Escribinos por WhatsApp
                </h2>
                <p className="text-on-secondary-container text-sm font-bold uppercase tracking-widest opacity-80 mb-8">
                  Acceso directo con nuestro equipo
                </p>
                <a
                  className="bg-surface-container-lowest text-on-surface px-10 py-4 headline-font font-bold uppercase tracking-widest hover:invert transition-all"
                  href={site.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Abrir WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="ubicacion" className="mt-20 px-6 sm:px-8 max-w-[1920px] mx-auto scroll-mt-28">
        <div className="mb-10 md:mb-12 lg:mb-14">
          <div className="max-w-2xl">
            <h2 className="headline-font text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight">
              Dónde estamos
            </h2>
            <p className="font-['Space_Grotesk'] mt-3 text-sm uppercase tracking-[0.2em] text-hh-yellow/90">
              {site.address} · {site.neighborhood}
            </p>
            <p className="text-on-surface-variant mt-5 max-w-xl text-base leading-relaxed">
              Mostrador, mayoristas y envíos a {site.shipping}. Tel. {site.phone} o WhatsApp cuando
              quieras coordinar.
            </p>
          </div>
          <a
            className="mt-8 inline-flex items-center gap-2 text-hh-yellow headline-font text-sm font-bold tracking-widest uppercase border-b border-hh-yellow/70 pb-1 hover:text-[#fff9ef] hover:border-[#fff9ef] transition-colors"
            href={site.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon name="directions" className="text-base" />
            Abrir en Google Maps
          </a>
        </div>
        <div className="flex flex-col gap-8 lg:gap-10 lg:flex-row lg:items-stretch">
          <div className="relative min-h-[300px] h-[360px] sm:min-h-[380px] lg:h-auto lg:min-h-[min(70vh,560px)] lg:flex-1 overflow-hidden rounded-[1.75rem] bg-surface-container-highest shadow-[0_28px_80px_rgba(0,0,0,0.4)] ring-1 ring-white/[0.07]">
            <iframe
              title="Mapa: Frigorífico H&H, Rodo 6483, Mataderos"
              className="absolute inset-0 w-full h-full border-0 grayscale-[0.12] contrast-[1.02]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src={site.mapsEmbed}
            />
          </div>
          <div className="relative flex min-h-[400px] flex-col overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-[#161616] via-[#0c0c0c] to-[#060606] shadow-[0_28px_80px_rgba(0,0,0,0.35)] ring-1 ring-white/[0.07] lg:flex-1 group">
            <div className="flex flex-1 min-h-0 items-center justify-center px-6 py-10 sm:px-10 sm:py-12 lg:py-10 min-h-[260px]">
              <Image
                alt="Entrada del Frigorífico H&H"
                className="h-auto w-full max-h-[min(68vh,620px)] max-w-[min(100%,400px)] rounded-lg object-contain object-center shadow-[0_20px_60px_rgba(0,0,0,0.55)] transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                src="/images/entrada-banner.jpeg"
                width={880}
                height={1320}
              />
            </div>
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#060606] via-[#060606]/80 to-transparent" />
            <div className="relative z-10 px-7 pb-8 pt-4 sm:px-9 sm:pb-9">
              <p className="headline-font text-xs tracking-[0.25em] text-hh-yellow font-bold uppercase mb-2">
                Nuestra entrada
              </p>
              <h3 className="headline-font text-xl sm:text-2xl font-black uppercase text-[#fff9ef] mb-2">
                Frigorífico H&H
              </h3>
              <p className="text-[#fff9ef]/90 text-sm max-w-md leading-relaxed">
                Pasá por el mostrador: te ayudamos a elegir el corte justo.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-20 px-8 max-w-[1920px] mx-auto overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#ffffff15]">
          <div className="relative h-80 overflow-hidden">
            <Image
              alt="Vacío — corte premium"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              src="/images/Carnes/vacio2.webp"
              width={800}
              height={320}
            />
          </div>
          <div className="relative h-80 overflow-hidden">
            <Image
              alt="Chinchulín"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              src="/images/achuras/chinculin.webp"
              width={800}
              height={320}
            />
          </div>
          <div className="relative h-80 overflow-hidden">
            <Image
              alt="Achuras — riñón"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              src="/images/achuras/rinon.webp"
              width={800}
              height={320}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
