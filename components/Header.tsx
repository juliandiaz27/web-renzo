"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Icon } from "@/components/Icon";
import { LogoBrand } from "@/components/LogoBrand";
import { site } from "@/lib/site";

const navItems = [
  { href: "/", label: "Inicio 1" },
  { href: "/inicio-2", label: "Inicio 2" },
  { href: "/contacto", label: "Contacto" },
] as const;

function navClass(active: boolean, mobile = false) {
  if (mobile) {
    return `border-b border-white/10 py-3.5 ${active ? "text-[#dd180d]" : "text-[#fff9ef] opacity-90"}`;
  }
  return `font-['Space_Grotesk'] uppercase tracking-widest text-xs lg:text-sm transition-colors duration-300 ${
    active
      ? "text-[#dd180d] border-b-2 border-[#dd180d] pb-1"
      : "text-[#fff9ef] opacity-80 hover:text-[#ffdb3c]"
  }`;
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.classList.toggle("site-nav-open", open);
    return () => document.body.classList.remove("site-nav-open");
  }, [open]);

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="site-header border-b border-white/10 fixed top-0 left-0 right-0 z-50">
      <nav className="flex w-full max-w-[1920px] items-center justify-between gap-2 px-4 py-3 sm:px-5 md:gap-4 md:px-10 md:py-5 mx-auto min-w-0">
        <LogoBrand />
        <div className="hidden md:flex flex-wrap items-center justify-end gap-6 lg:gap-8">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={navClass(active)}
                aria-current={active ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
        <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
          <a
            href={site.priceList}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-1.5 bg-[#dd180d] text-[#fff9ef] px-2.5 py-2 sm:px-4 sm:py-2.5 font-['Space_Grotesk'] uppercase text-[10px] sm:text-xs font-black tracking-widest hover:brightness-110 transition-all border border-[#ffffff20]"
            aria-label="Ver lista de precios en PDF"
          >
            <Icon name="picture_as_pdf" className="shrink-0 text-base sm:text-lg" />
            Lista de precios
          </a>
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-sm border border-white/15 bg-white/[0.06] p-2 text-[#fff9ef] hover:bg-white/10 md:hidden"
            aria-expanded={open}
            aria-controls="site-nav-panel"
            aria-label={open ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
            onClick={() => setOpen((value) => !value)}
          >
            <Icon
              name={open ? "close" : "menu"}
              className="text-[26px] leading-none"
            />
          </button>
        </div>
      </nav>
      <div
        id="site-nav-panel"
        className={`${open ? "" : "hidden"} border-t border-white/10 bg-[#0c0c0c]/98 backdrop-blur-lg md:hidden max-h-[min(70vh,420px)] overflow-y-auto`}
      >
        <div className="mx-auto flex max-w-[1920px] flex-col px-4 py-3 font-['Space_Grotesk'] text-sm uppercase tracking-widest">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={navClass(active, true)}
                aria-current={active ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
          <a
            className="py-3.5 inline-flex items-center gap-2 text-[#dd180d] font-black"
            href={site.priceList}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon name="picture_as_pdf" className="text-xl shrink-0" />
            Lista de precios
          </a>
        </div>
      </div>
    </header>
  );
}
