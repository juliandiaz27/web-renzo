import Link from "next/link";
import { CoverImage } from "@/components/CoverImage";
import { Icon } from "@/components/Icon";
import type { Cut } from "@/lib/cuts";

export function CutCard({ cut }: { cut: Cut }) {
  return (
    <article className="bg-surface-container-lowest group relative overflow-hidden aspect-[3/4]">
      <CoverImage
        src={cut.image}
        alt={cut.alt}
        className="object-cover transition-transform duration-700 group-hover:scale-110"
        sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
      />
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-[78%] bg-gradient-to-t from-[#0a0a0a] via-black/80 to-transparent" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/55 via-transparent to-transparent max-md:hidden" />
      <div className="absolute inset-0 z-10 flex flex-col justify-end p-8">
        <div className="mb-4">
          <span className="bg-surface-container-highest text-hh-yellow headline-font text-[10px] tracking-[0.2em] px-2 py-1 border border-white/10 uppercase">
            {cut.badge}
          </span>
        </div>
        <h3 className="text-3xl headline-font font-bold text-white mb-2 uppercase">{cut.name}</h3>
        <p className="text-on-surface-variant text-sm mb-6 line-clamp-2">{cut.description}</p>
        <div className="flex justify-end">
          <Link
            href="/contacto"
            className="bg-primary-container p-4 text-white transition-colors hover:bg-on-primary-fixed-variant active:scale-95 inline-flex"
            aria-label={`Consultar ${cut.name}`}
          >
            <Icon name="send" />
          </Link>
        </div>
      </div>
    </article>
  );
}
