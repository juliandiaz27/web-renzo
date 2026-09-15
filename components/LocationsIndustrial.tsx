import Image from "next/image";
import { Icon } from "@/components/Icon";
import { locations, mapsSearchUrl, site } from "@/lib/site";

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

export function LocationsIndustrial() {
  return (
    <section id="ubicacion" className="scroll-mt-28 bg-background py-20 sm:py-28 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <p className="text-sm font-black uppercase tracking-[0.35em] text-[#cc0000] mb-4">
          Red de locales
        </p>
        <h2 className="text-5xl sm:text-6xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-4">
          Sucursales
        </h2>
        <p className="mb-12 sm:mb-16 max-w-xl text-on-surface-variant font-bold uppercase tracking-wide">
          Planta en Mataderos y carnicerías para retiro. Envíos a {site.shipping}.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {locations.map((place) => (
            <article
              key={place.id}
              className="flex flex-col border-l-8 border-[#cc0000] bg-surface-container-low p-7 sm:p-8"
            >
              <p className="text-xs font-black uppercase tracking-[0.28em] text-[#cc0000]">
                {place.kind}
              </p>
              <h3 className="mt-3 text-2xl sm:text-3xl font-black uppercase tracking-tighter leading-[0.95]">
                {place.name}
              </h3>
              <p className="mt-2 text-sm font-bold uppercase tracking-wide text-on-surface-variant">
                {place.area}
              </p>
              <p className="mt-4 flex-1 text-on-surface-variant leading-relaxed">{place.text}</p>
              <p className="mt-5 text-sm font-black uppercase tracking-wide">{place.hours}</p>
              <a
                className="mt-6 inline-flex w-full items-center justify-center gap-2 border border-white/20 px-4 py-3.5 text-xs font-black uppercase tracking-widest transition-colors hover:border-transparent hover:bg-primary-container hover:text-on-primary-container sm:text-sm"
                href={mapsSearchUrl(place.mapsQuery)}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon name="directions" className="text-lg" />
                {place.mapsLabel}
              </a>
            </article>
          ))}
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          {photos.map((photo) => (
            <div
              key={photo.src}
              className="relative min-h-[240px] overflow-hidden border border-white/10 md:min-h-[320px]"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover md:grayscale"
                sizes="(min-width: 768px) 50vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <p className="absolute bottom-4 left-4 right-4 text-xs font-black uppercase tracking-[0.22em] text-white">
                {photo.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
