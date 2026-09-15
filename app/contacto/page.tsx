import type { Metadata } from "next";
import Image from "next/image";
import { ContactChannels } from "@/components/ContactChannels";
import { ContactForm } from "@/components/ContactForm";
import { Icon } from "@/components/Icon";
import { Locations } from "@/components/Locations";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Consultas, mayoristas y reservas. Planta en Mataderos y sucursales de carnicería.",
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

      <ContactChannels />

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

      <Locations />

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
