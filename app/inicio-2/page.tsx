import type { Metadata } from "next";
import Image from "next/image";
import { ContactChannelsIndustrial } from "@/components/ContactChannelsIndustrial";
import { CoverImage } from "@/components/CoverImage";
import { Icon } from "@/components/Icon";
import { LocationsIndustrial } from "@/components/LocationsIndustrial";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Inicio 2",
  description:
    "Calidad en carnes con logística propia y desposte diario. Frigorífico H&H, Mataderos.",
};

export default function Inicio2Page() {
  return (
    <main className="inicio2 pt-24">
      <section className="relative flex min-h-[100svh] items-end">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <CoverImage
            src="/images/mediares.jpeg"
            alt="Operación y medias reses en planta — Frigorífico H&H"
            className="object-cover grayscale opacity-60"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>
        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-10 pt-28 sm:px-8 sm:pb-24 md:pb-32">
          <p className="mb-2 text-base font-black uppercase tracking-widest text-[#cc0000] sm:text-xl md:text-3xl">
            Frigorífico H&H
          </p>
          <h1 className="mb-6 font-black uppercase tracking-tighter leading-none sm:mb-8">
            <span className="mb-4 block max-w-2xl text-xs font-bold tracking-[0.22em] text-on-surface/90 sm:mb-6 sm:text-sm sm:tracking-[0.35em] md:text-lg">
              La calidad no se negocia
            </span>
            <span className="block text-[clamp(2.4rem,13vw,8rem)] leading-[0.88] md:text-9xl">
              CALIDAD EN
            </span>
            <span className="block text-[clamp(2.4rem,13vw,8rem)] leading-[0.88] text-primary-container md:text-9xl">
              CARNES
            </span>
          </h1>
          <a
            className="inline-flex w-full max-w-full items-center justify-center bg-primary-container px-5 py-4 text-center text-sm font-black uppercase tracking-tight text-on-primary-container transition-colors hover:bg-[#a30000] sm:w-auto sm:px-12 sm:py-6 sm:text-xl sm:tracking-tighter"
            href={site.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
          >
            Escribinos por WhatsApp
          </a>
        </div>
      </section>

      <section className="px-8 py-24 bg-surface-container-low" id="products">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="text-4xl sm:text-5xl md:text-7xl font-black uppercase tracking-tighter">
                CORTES DESTACADOS
              </h2>
              <p className="mt-3 max-w-xl text-sm text-on-surface-variant font-medium">
                Galería de cortes. Los precios se publican en la lista en PDF.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <span className="bg-secondary-fixed text-on-secondary-fixed px-4 py-1 text-sm font-black uppercase">
                Actualizado 05:00 AM
              </span>
              <a
                className="inline-flex items-center gap-2 border border-white/20 bg-white/[0.06] px-4 py-2 text-xs font-black uppercase tracking-widest text-on-surface hover:bg-white/10 transition-colors"
                href={site.priceList}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon name="picture_as_pdf" className="text-base" />
                Lista de precios
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 md:min-h-[640px]">
            <div className="md:col-span-2 md:row-span-2 relative overflow-hidden group border border-white/10 min-h-[380px] md:min-h-0">
              <CoverImage
                src="/images/Carnes/bife-ancho.webp"
                alt="Ojo de bife con marmoleo"
                className="object-cover md:grayscale md:group-hover:grayscale-0 transition-all duration-500"
                sizes="(min-width: 768px) 50vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent pointer-events-none" />
              <div className="absolute bottom-0 left-0 right-0 p-8 z-10">
                <h3 className="text-3xl font-black uppercase text-white">OJO DE BIFE</h3>
              </div>
            </div>
            <div className="relative overflow-hidden group border border-white/10 min-h-[280px] md:min-h-0">
              <CoverImage
                src="/images/Carnes/vacio2.webp"
                alt="Vacío"
                className="object-cover md:grayscale md:group-hover:grayscale-0 transition-all duration-500"
                sizes="(min-width: 768px) 25vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent pointer-events-none" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 z-10">
                <h3 className="text-xl font-black uppercase text-white mb-1">VACÍO</h3>
                <p className="text-white/70 text-xs uppercase tracking-wide">
                  Selección de exportación
                </p>
              </div>
            </div>
            <div className="relative overflow-hidden group border border-white/10 min-h-[280px] md:min-h-0">
              <CoverImage
                src="/images/Carnes/asado.webp"
                alt="Asado de tira"
                className="object-cover md:grayscale md:group-hover:grayscale-0 transition-all duration-500"
                sizes="(min-width: 768px) 25vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent pointer-events-none" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 z-10">
                <h3 className="text-xl font-black uppercase text-white mb-1">ASADO DE TIRA</h3>
                <p className="text-white/70 text-xs uppercase tracking-wide">Corte especial</p>
              </div>
            </div>
            <div className="md:col-span-2 relative overflow-hidden group border border-white/10 min-h-[260px] md:min-h-0">
              <CoverImage
                src="/images/Carnes/matambre.webp"
                alt="Matambre"
                className="object-cover md:grayscale md:group-hover:grayscale-0 transition-all duration-500"
                sizes="(min-width: 768px) 50vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent pointer-events-none" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 z-10">
                <h3 className="text-2xl font-black uppercase text-white mb-1">MATAMBRE</h3>
                <p className="text-white/70 text-sm uppercase tracking-wide">Ternera premium</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-surface-dim" id="process">
        <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-20 items-center">
            <div className="lg:col-span-5">
              <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8 leading-none">
                EXCELENCIA
                <br />
                INDUSTRIAL
              </h2>
              <div className="space-y-8 border-l-8 border-[#cc0000] pl-8">
                <div>
                  <p className="text-2xl font-bold uppercase mb-2">LOGÍSTICA PROPIA</p>
                  <p className="text-on-surface-variant">
                    Control total de la cadena de frío desde el frigorífico hasta su negocio. Sin
                    intermediarios.
                  </p>
                </div>
                <div>
                  <p className="text-2xl font-bold uppercase mb-2">HIGIENE RIGUROSA</p>
                  <p className="text-on-surface-variant">
                    Protocolos de limpieza grado industrial. Acero inoxidable y saneamiento diario.
                  </p>
                </div>
                <div>
                  <p className="text-2xl font-bold uppercase mb-2">DESPOSTE DIARIO</p>
                  <p className="text-on-surface-variant">
                    Procesamos carne fresca cada madrugada para garantizar la máxima ternura.
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-7 grid grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
              <Image
                className="w-full aspect-[3/4] sm:aspect-[4/5] lg:aspect-[3/4] lg:min-h-[min(52vh,480px)] object-cover object-center md:grayscale rounded-sm shadow-[0_24px_60px_rgba(0,0,0,0.45)]"
                alt="Pasillo del frigorífico H&H"
                src="/images/Pasillo.jpeg"
                width={720}
                height={960}
              />
              <Image
                className="w-full aspect-[3/4] sm:aspect-[4/5] lg:aspect-[3/4] lg:min-h-[min(52vh,480px)] object-cover object-center md:grayscale rounded-sm shadow-[0_24px_60px_rgba(0,0,0,0.45)] lg:mt-14 self-end"
                alt="Instalaciones — Frigorífico H&H"
                src="/images/portada4.jpeg"
                width={720}
                height={960}
              />
            </div>
          </div>
        </div>
      </section>

      <section
        className="px-8 py-32 bg-primary-container text-white overflow-hidden relative"
        id="about"
      >
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-3xl">
            <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-12">
              MATADEROS ES NUESTRA CASA.
            </h2>
            <p className="text-2xl font-bold uppercase leading-tight mb-8">
              En el corazón de Mataderos, H&H no es solo un frigorífico: es el estándar de calidad
              para quienes saben de carne.
            </p>
            <p className="text-lg font-medium opacity-80 uppercase">
              Décadas de experiencia operando bajo el ritmo de la industria pesada, sirviendo a los
              clientes más exigentes con honestidad y peso real.
            </p>
          </div>
        </div>
        <div className="absolute -bottom-24 -right-24 opacity-20 pointer-events-none select-none">
          <span className="text-[20rem] font-black uppercase tracking-tighter leading-none">
            H&H
          </span>
        </div>
      </section>

      <ContactChannelsIndustrial />

      <LocationsIndustrial />

      <section className="border-t border-white/10 bg-surface-container-lowest py-10 sm:py-12" id="contact">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <a
            className="text-2xl sm:text-3xl font-black uppercase tracking-tighter hover:text-white transition-colors"
            href={site.phoneHref}
          >
            {site.phone}
          </a>
          <p className="text-sm font-bold uppercase tracking-wide text-on-surface-variant">
            Planta {site.hoursPlant}
            <span className="mx-2 text-white/20">/</span>
            Carnicerías {site.hoursCarniceria}
          </p>
          <a
            className="inline-flex w-full md:w-auto items-center justify-center gap-2 bg-primary-container px-6 py-4 text-xs font-black uppercase tracking-widest text-on-primary-container transition-colors hover:bg-[#a30000] sm:text-sm"
            href={site.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon name="chat" className="text-lg" />
            WhatsApp {site.whatsapp}
          </a>
        </div>
      </section>
    </main>
  );
}
