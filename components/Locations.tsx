import Image from "next/image";
import { Icon } from "@/components/Icon";
import { locations, mapsSearchUrl } from "@/lib/site";

const photos = [
  {
    src: "/images/entrada-banner.jpeg",
    alt: "Entrada Frigorífico H&H",
    label: "Planta // José E. Rodó 6483",
  },
  {
    src: "/images/WhatsApp Image 2026-04-01 at 09.16.30 (1).jpeg",
    alt: "Planta Frigorífico H&H en Mataderos",
    label: "José E. Rodó 6483 · Planta",
  },
] as const;

export function Locations() {
  return (
    <section
      id="ubicacion"
      className="scroll-mt-28 border-t border-[#ffffff08] bg-background py-16 sm:py-24 px-4 sm:px-8 lg:px-12"
    >
      <div className="container mx-auto max-w-[1920px]">
        <div className="mb-10 sm:mb-14">
          <h2 className="headline-font text-[clamp(1.55rem,6vw,3rem)] sm:text-4xl md:text-5xl font-black uppercase tracking-tighter leading-[1.05]">
            Sucursales
          </h2>
          <div className="h-1 bg-[#dd180d] mt-4 w-full max-w-[min(100%,18rem)] sm:w-24 sm:max-w-none" />
          <p className="mt-5 max-w-xl text-on-surface-variant text-base leading-relaxed">
            Planta en Mataderos y sucursales de carnicería para retiro. Envíos a CABA y zona oeste.
          </p>
        </div>

        <div className="flex flex-col gap-6 lg:flex-row lg:items-stretch lg:gap-8">
          <div className="flex flex-1 flex-col gap-px bg-[#ffffff15] border border-[#ffffff15]">
            {locations.map((place) => (
              <article key={place.id} className="flex-1 bg-surface-container-low p-6 sm:p-8">
                <p className="headline-font text-[11px] font-bold uppercase tracking-[0.22em] text-[#dd180d]">
                  {place.kind}
                </p>
                <h3 className="headline-font mt-2 text-2xl sm:text-3xl font-black uppercase tracking-tight">
                  {place.name}
                </h3>
                <p className="font-['Space_Grotesk'] mt-1 text-xs uppercase tracking-[0.18em] text-hh-yellow/90">
                  {place.area}
                </p>
                <p className="mt-3 text-sm text-on-surface-variant leading-relaxed">{place.text}</p>
                <p className="mt-3 text-sm font-medium text-on-surface">{place.hours}</p>
                <a
                  className="mt-5 inline-flex items-center gap-2 text-hh-yellow headline-font text-xs sm:text-sm font-bold tracking-widest uppercase border-b border-hh-yellow/70 pb-1 hover:text-[#fff9ef] hover:border-[#fff9ef] transition-colors"
                  href={mapsSearchUrl(place.mapsQuery)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon name="directions" className="text-base" />
                  {place.mapsLabel}
                </a>
              </article>
            ))}
          </div>

          <div className="flex min-h-[420px] flex-1 flex-col gap-4">
            {photos.map((photo) => (
              <div
                key={photo.src}
                className="relative min-h-[220px] flex-1 overflow-hidden rounded-sm bg-surface-container-highest ring-1 ring-white/[0.07]"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <p className="absolute bottom-4 left-4 right-4 headline-font text-[10px] sm:text-xs font-bold uppercase tracking-[0.18em] text-white">
                  {photo.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
