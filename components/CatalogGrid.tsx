"use client";

import { useMemo, useState } from "react";
import { CutCard } from "@/components/CutCard";
import {
  catalogFilters,
  filterCuts,
  type CatalogFilterId,
} from "@/lib/cuts";

export function CatalogGrid() {
  const [filter, setFilter] = useState<CatalogFilterId>("todos");
  const visible = useMemo(() => filterCuts(filter), [filter]);

  return (
    <section className="px-8 max-w-[1920px] mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
        <h2 className="text-4xl headline-font font-black uppercase tracking-tight">
          Cortes destacados
        </h2>
        <div className="flex flex-wrap gap-4 headline-font uppercase text-xs tracking-widest">
          {catalogFilters.map((item) => {
            const active = filter === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setFilter(item.id)}
                className={
                  active
                    ? "text-secondary-container border-b border-secondary-container pb-1"
                    : "text-on-surface-variant hover:text-white transition-colors"
                }
                aria-pressed={active}
              >
                {item.label}
              </button>
            );
          })}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#ffffff15] border border-[#ffffff15]">
        {visible.map((cut) => (
          <CutCard key={cut.id} cut={cut} />
        ))}
      </div>
    </section>
  );
}
