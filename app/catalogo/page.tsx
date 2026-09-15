import type { Metadata } from "next";
import { CatalogGrid } from "@/components/CatalogGrid";
import { CoverImage } from "@/components/CoverImage";
import { Icon } from "@/components/Icon";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Catálogo",
  description:
    "Catálogo de exhibición de cortes vacunos de Frigorífico H&H. Consultá disponibilidad en el mostrador.",
};

export default function CatalogoPage() {
  return (
    <main className="pt-28 pb-20">
      <section className="px-4 sm:px-8 mb-16 sm:mb-20 max-w-[1920px] mx-auto">
        <div className="relative py-12 sm:py-16 md:py-24 bg-surface-container-low">
          <div className="absolute inset-0 overflow-hidden opacity-20">
            <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-transparent z-10" />
            <CoverImage
              src="/images/Carnes/bife-ancho2.webp"
              alt="Corte premium en primer plano"
              className="object-cover grayscale brightness-50"
              sizes="100vw"
              priority
            />
          </div>
          <div className="relative z-20 px-5 sm:px-8 md:px-12">
            <span className="text-primary-container headline-font font-bold uppercase tracking-[0.2em] sm:tracking-[0.3em] text-[11px] sm:text-sm block mb-4">
              Selección maestra
            </span>
            <h1 className="headline-font font-black uppercase tracking-tighter leading-[0.9] mb-5 sm:mb-6 text-[clamp(2.35rem,11vw,8rem)]">
              EL CATÁLOGO
              <br />
              <span className="text-outline-variant opacity-40">PREMIUM</span>
            </h1>
            <p className="max-w-xl text-base sm:text-lg text-on-surface-variant font-light leading-relaxed">
              Vacuno en frío y cortes frescos para ver y consultar. Mayoristas y particulares:
              disponibilidad en mostrador, teléfono o WhatsApp. Sin pedidos online.
            </p>
          </div>
        </div>
      </section>

      <CatalogGrid />

      <section className="px-8 mt-24 max-w-[1920px] mx-auto">
        <h2 className="text-4xl headline-font font-black uppercase tracking-tight mb-10 flex items-center gap-4">
          <span className="text-hh-yellow">/</span> Servicio de frigorífico
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#ffffff15] border border-[#ffffff15]">
          <div className="bg-surface-container-low p-8 md:p-10">
            <Icon name="ac_unit" className="mb-4 text-4xl text-hh-yellow" />
            <h3 className="headline-font text-lg font-bold uppercase tracking-wide mb-3">
              Cadena de frío
            </h3>
            <p className="text-sm leading-relaxed text-on-surface-variant">
              Mercadería conservada y manipulada según prácticas de frigorífico.
            </p>
          </div>
          <div className="bg-surface-container-low p-8 md:p-10">
            <Icon name="storefront" className="mb-4 text-4xl text-hh-yellow" />
            <h3 className="headline-font text-lg font-bold uppercase tracking-wide mb-3">
              Mostrador y envíos
            </h3>
            <p className="text-sm leading-relaxed text-on-surface-variant">
              {site.address}, Mataderos. Retiro en local y envíos a {site.shipping}; coordiná por
              teléfono o WhatsApp.
            </p>
          </div>
          <div className="bg-surface-container-low p-8 md:p-10">
            <Icon name="picture_as_pdf" className="mb-4 text-4xl text-hh-yellow" />
            <h3 className="headline-font text-lg font-bold uppercase tracking-wide mb-3">
              Lista de precios
            </h3>
            <p className="text-sm leading-relaxed text-on-surface-variant mb-4">
              Valores y vigencia en PDF.
            </p>
            <a
              className="headline-font inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-hh-yellow underline decoration-hh-yellow/50 underline-offset-4 hover:decoration-hh-yellow"
              href={site.priceList}
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver PDF
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
