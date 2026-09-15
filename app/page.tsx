import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CoverImage } from "@/components/CoverImage";
import { Icon } from "@/components/Icon";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: site.name },
  description:
    "Seleccionamos cada pieza a mano. Frigorífico H&H en Mataderos: calidad superior desde el origen.",
};

export default function HomePage() {
  return (
    <main className="pt-20">
      <section className="relative w-full overflow-hidden flex items-center py-8 sm:py-10 md:py-12 min-h-[min(58vh,420px)] sm:min-h-[min(64vh,500px)] md:min-h-[min(72vh,600px)] lg:min-h-0 lg:h-[921px]">
        <div className="absolute inset-0 z-0">
          <CoverImage
            src="/images/Carnes/corte-corne.jpg"
            alt="Corte de carne vacuna premium con marmoleo"
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-black/45" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-black/15" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-black/20 to-black/50" />
        </div>
        <div className="relative z-10 container mx-auto px-4 sm:px-8 lg:px-12">
          <div className="max-w-4xl rounded-sm border border-white/10 bg-black/35 backdrop-blur-md px-5 py-8 sm:px-10 sm:py-12 shadow-[0_24px_80px_rgba(0,0,0,0.55)]">
            <span className="inline-block py-1 px-3 mb-4 sm:mb-6 bg-black/50 text-[#ffdb3c] headline-font text-[10px] sm:text-xs tracking-[0.25em] sm:tracking-[0.3em] font-bold border border-white/20">
              MAESTRÍA EN CARNES
            </span>
            <h1 className="headline-font text-4xl sm:text-6xl md:text-7xl lg:text-[6rem] xl:text-[7rem] font-black leading-[0.9] sm:leading-[0.88] tracking-tighter text-[#fff9ef] mb-6 sm:mb-8 uppercase [text-shadow:0_4px_32px_rgba(0,0,0,0.85)]">
              LA CALIDAD <br />
              <span className="text-[#ff6b5e] [text-shadow:0_2px_24px_rgba(0,0,0,1),0_0_40px_rgba(0,0,0,0.6)]">
                NO SE NEGOCIA
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl max-w-xl text-[#f0e8e5] font-medium leading-relaxed mb-8 sm:mb-10 [text-shadow:0_2px_12px_rgba(0,0,0,0.9)]">
              Seleccionamos manualmente cada pieza siguiendo tradiciones ancestrales. Calidad
              superior certificada desde el origen hasta su mesa.
            </p>
            <div className="flex flex-wrap gap-4 sm:gap-6">
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center butcher-gradient px-10 sm:px-12 py-5 text-on-primary-container font-black headline-font tracking-widest uppercase hover:brightness-110 transition-all active:scale-95"
              >
                HACÉ TU PEDIDO
              </Link>
              <Link
                href="/catalogo"
                className="inline-flex items-center justify-center border-2 border-[#fff9ef]/80 bg-black/20 px-10 sm:px-12 py-5 text-[#fff9ef] font-black headline-font tracking-widest uppercase hover:bg-white/10 transition-all active:scale-95"
              >
                VER CORTES
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28 md:py-32 px-4 sm:px-8 lg:px-12 bg-background">
        <div className="container mx-auto">
          <div className="mb-12 sm:mb-16 w-full">
            <h2 className="headline-font text-[clamp(1.55rem,6vw,3rem)] sm:text-4xl md:text-5xl font-black uppercase tracking-tighter leading-[1.05]">
              Destacados de Selección
            </h2>
            <div className="h-1 bg-[#dd180d] mt-4 w-full max-w-[min(100%,18rem)] sm:w-24 sm:max-w-none" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 md:items-stretch gap-6 md:h-[800px] md:min-h-[800px]">
            <div className="md:col-span-7 relative overflow-hidden group min-h-[420px] md:min-h-0 md:h-full">
              <CoverImage
                src="/images/Carnes/vacio.webp"
                alt="Vacío premium para parrilla"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(min-width: 768px) 58vw, 100vw"
              />
              <div className="absolute inset-0 bg-black/35 pointer-events-none md:bg-black/25" />
              <div className="absolute bottom-0 left-0 right-0 h-[78%] bg-gradient-to-t from-[#0a0a0a] via-black/80 to-transparent pointer-events-none" />
              <div className="absolute bottom-0 left-0 right-0 top-0 bg-gradient-to-r from-black/55 via-transparent to-transparent pointer-events-none max-md:hidden" />
              <div className="absolute bottom-0 left-0 p-10 z-10 max-w-xl [text-shadow:0_2px_16px_rgba(0,0,0,0.85)]">
                <span className="bg-secondary-container text-on-secondary-container px-3 py-1 text-[10px] font-black uppercase tracking-widest headline-font mb-4 inline-block shadow-lg">
                  PARRILLA & ASADO
                </span>
                <h3 className="headline-font text-4xl font-bold uppercase mb-2 text-white">
                  VACÍO RESERVA
                </h3>
                <p className="text-white/90 max-w-md font-light leading-relaxed mb-6">
                  Corte del diafragma, jugoso y con sabor profundo a vacuno. Un ícono del asado
                  argentino: pocos minutos por lado al fuego y una capa de grasa que lo hace
                  irresistible.
                </p>
                <Link
                  className="text-[#ff8f84] headline-font text-sm font-bold tracking-[0.2em] border-b-2 border-[#dd180d] pb-1 drop-shadow-[0_2px_10px_rgba(0,0,0,1)] hover:text-[#ffb4a8]"
                  href="/catalogo"
                >
                  VER ESTE CORTE
                </Link>
              </div>
            </div>
            <div className="md:col-span-5 grid grid-cols-2 grid-rows-2 gap-4 md:gap-6 min-h-[520px] md:min-h-0 md:h-full">
              {[
                { src: "/images/Carnes/bife-chorizo.webp", alt: "Ojo de bife", title: "OJO DE BIFE" },
                { src: "/images/Carnes/vacio2.webp", alt: "Vacío para parrilla", title: "VACÍO" },
                { src: "/images/Carnes/asado.webp", alt: "Asado de tira", title: "ASADO DE TIRA" },
                { src: "/images/Carnes/matambre.webp", alt: "Matambre", title: "MATAMBRE" },
              ].map((item) => (
                <div
                  key={item.title}
                  className="relative overflow-hidden group min-h-[220px] md:min-h-0 h-full"
                >
                  <CoverImage
                    src={item.src}
                    alt={item.alt}
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(min-width: 768px) 21vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-transparent pointer-events-none" />
                  <div className="absolute bottom-0 left-0 p-5 md:p-6 z-10 [text-shadow:0_2px_10px_rgba(0,0,0,0.9)]">
                    <h3 className="headline-font text-lg md:text-2xl font-bold uppercase leading-tight text-white">
                      {item.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="herencia"
        className="bg-surface-container-low py-32 px-12 relative overflow-hidden scroll-mt-24"
      >
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
          <div className="relative flex flex-col gap-4">
            <div className="absolute -top-10 -left-10 w-40 h-40 border-l-4 border-t-4 border-[#dd180d] opacity-50 z-10 pointer-events-none" />
            <Image
              alt="Tradición y cortes H&H"
              className="w-full h-[min(42vh,320px)] sm:h-[340px] object-cover filter sepia-[0.2] brightness-90 shadow-2xl"
              src="/images/portada-1.jpeg"
              width={900}
              height={340}
            />
            <Image
              alt="Operación y medias reses en planta — Frigorífico H&H"
              className="w-full h-[min(42vh,320px)] sm:h-[340px] object-cover filter sepia-[0.15] brightness-90 shadow-2xl"
              src="/images/mediares.jpeg"
              width={900}
              height={340}
            />
            <div className="absolute -bottom-6 -right-6 glass-panel p-8 max-w-xs border border-[#ffffff10] z-10">
              <p className="headline-font text-xs tracking-widest text-[#dd180d] mb-2 uppercase font-bold">
                {site.neighborhood}
              </p>
              <p className="text-sm font-light italic text-on-surface leading-relaxed">
                &quot;La calidad no se negocia: la sostenemos con trabajo, criterio y cercanía en
                cada pedido.&quot;
              </p>
            </div>
          </div>
          <div>
            <h2 className="headline-font text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tighter mb-8 leading-[0.92] sm:leading-[0.9]">
              NUESTRA <br /> <span className="text-[#dd180d]">HERENCIA</span>
            </h2>
            <div className="space-y-6 text-on-surface-variant text-lg leading-relaxed font-light">
              <p>
                Fundado hace más de seis décadas en el corazón del mercado central,{" "}
                <span className="text-on-background font-bold">Frigorífico H&H</span> nació de la
                pasión de Don Hernán por la excelencia cárnica.
              </p>
              <p>
                No somos solo proveedores; somos curadores de sabor. Trabajamos directamente con
                productores seleccionados que respetan el ciclo natural del ganado, garantizando un
                producto libre de hormonas y con el marmoleo exacto que buscan los paladares más
                exigentes.
              </p>
              <div className="grid grid-cols-2 gap-8 pt-6 border-t border-[#ffffff15]">
                <div>
                  <p className="headline-font text-3xl font-black text-secondary">100%</p>
                  <p className="text-xs uppercase tracking-widest opacity-60">Pastoreo Natural</p>
                </div>
                <div>
                  <p className="headline-font text-3xl font-black text-secondary">21 DÍAS</p>
                  <p className="text-xs uppercase tracking-widest opacity-60">Maduración en seco</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="ubicacion"
        className="py-24 px-6 sm:px-10 lg:px-12 bg-background border-t border-[#ffffff08] scroll-mt-28"
      >
        <div className="container mx-auto max-w-[1920px]">
          <div className="mb-10 md:mb-12 lg:mb-14 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <h2 className="headline-font text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight">
                Visitá el local
              </h2>
              <p className="font-['Space_Grotesk'] mt-3 text-sm uppercase tracking-[0.2em] text-hh-yellow/90">
                {site.address} · {site.neighborhood}
              </p>
              <p className="text-on-surface-variant mt-4 max-w-lg text-base leading-relaxed">
                En el barrio, con el mismo trato de siempre. Coordiná tu visita o pasá directo por
                el mostrador.
              </p>
            </div>
            <a
              className="inline-flex w-fit items-center gap-2 text-hh-yellow headline-font text-sm font-bold tracking-widest uppercase border-b border-hh-yellow/70 pb-1 hover:text-[#fff9ef] hover:border-[#fff9ef] transition-colors"
              href={site.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon name="directions" className="text-base" />
              Cómo llegar
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
                <p className="text-[#fff9ef]/95 text-sm sm:text-base max-w-md leading-relaxed">
                  Te esperamos en el mostrador para asesorarte y armar tu pedido con el corte que
                  buscás.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-12 bg-background border-t border-[#ffffff05]">
        <div className="container mx-auto">
          <div className="butcher-gradient p-16 flex flex-col md:flex-row justify-between items-center relative overflow-hidden">
            <div className="absolute top-0 right-0 opacity-10 pointer-events-none">
              <Icon name="restaurant" className="text-[300px]" filled />
            </div>
            <div className="relative z-10 text-center md:text-left mb-10 md:mb-0">
              <h2 className="headline-font text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-3 sm:mb-4">
                ¿BUSCAS ALGO ESPECÍFICO?
              </h2>
              <p className="text-white/80 text-base sm:text-lg md:text-xl font-light max-w-xl">
                Atención personalizada y consultas directas con nuestro equipo de maestros
                carniceros.
              </p>
            </div>
            <a
              className="relative z-10 flex items-center gap-4 bg-white text-[#131313] px-12 py-6 headline-font font-black tracking-widest uppercase hover:bg-hh-yellow transition-all transform hover:-translate-y-1"
              href={site.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon name="chat_bubble" />
              WHATSAPP DIRECTO
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
