import Link from "next/link";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-[#131313] border-t border-[#ffffff15]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 w-full px-12 py-20 max-w-[1920px] mx-auto">
        <div className="space-y-6">
          <Link href="/" className="text-xl font-black text-[#dd180d] headline-font inline-block">
            FRIGORÍFICO H&H
          </Link>
          <p className="font-['Space_Grotesk'] text-xs tracking-widest text-hh-yellow font-bold uppercase mb-2">
            {site.tagline}
          </p>
          <p className="font-['Space_Grotesk'] uppercase text-xs tracking-widest text-[#fff9ef] opacity-60 leading-relaxed">
            Excelencia en cortes premium. La tradición que alimenta tus mejores momentos.
          </p>
        </div>
        <div className="space-y-4">
          <h4 className="font-['Space_Grotesk'] uppercase text-xs tracking-[0.2em] font-bold text-on-background">
            Ubicación
          </h4>
          <ul className="space-y-2">
            <li className="font-['Space_Grotesk'] uppercase text-xs tracking-widest text-[#fff9ef] opacity-60">
              {site.address}
            </li>
            <li className="font-['Space_Grotesk'] uppercase text-xs tracking-widest text-[#fff9ef] opacity-60">
              {site.neighborhood}
            </li>
            <li className="font-['Space_Grotesk'] uppercase text-xs tracking-widest text-[#fff9ef] opacity-80">
              Envíos: {site.shipping}
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <h4 className="font-['Space_Grotesk'] uppercase text-xs tracking-[0.2em] font-bold text-on-background">
            Horarios
          </h4>
          <ul className="space-y-2">
            <li className="font-['Space_Grotesk'] uppercase text-xs tracking-widest text-[#fff9ef] opacity-60">
              {site.hours}
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <h4 className="font-['Space_Grotesk'] uppercase text-xs tracking-[0.2em] font-bold text-on-background">
            Contacto
          </h4>
          <ul className="space-y-2">
            <li>
              <a
                className="font-['Space_Grotesk'] uppercase text-xs tracking-widest text-[#fff9ef] opacity-60 hover:opacity-100 hover:text-hh-yellow transition-colors"
                href={site.phoneHref}
              >
                {site.phone}
              </a>
            </li>
            <li>
              <a
                className="font-['Space_Grotesk'] uppercase text-xs tracking-widest text-[#fff9ef] opacity-60 hover:opacity-100 hover:text-hh-yellow transition-colors"
                href={site.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp {site.whatsapp}
              </a>
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <h4 className="font-['Space_Grotesk'] uppercase text-xs tracking-[0.2em] font-bold text-on-background">
            Redes
          </h4>
          <a
            className="font-['Space_Grotesk'] uppercase text-xs tracking-widest text-[#fff9ef] opacity-60 hover:opacity-100 hover:text-[#dd180d] transition-all duration-300"
            href={site.instagram}
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </div>
      </div>
      <div className="w-full px-12 py-8 border-t border-[#ffffff05] text-center">
        <p className="font-['Space_Grotesk'] uppercase text-[10px] tracking-widest text-[#fff9ef] opacity-40">
          © {new Date().getFullYear()} FRIGORÍFICO H&H. TODOS LOS DERECHOS RESERVADOS.
        </p>
      </div>
    </footer>
  );
}
