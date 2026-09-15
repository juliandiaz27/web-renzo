export type CutCategory = "vacuno" | "especialidad" | "premium";

export type Cut = {
  id: string;
  name: string;
  category: CutCategory;
  badge: string;
  description: string;
  image: string;
  alt: string;
};

export const cuts: Cut[] = [
  {
    id: "matambre",
    name: "Matambre",
    category: "especialidad",
    badge: "Firma",
    description:
      "Corte de diafragma. Presentación en bandeja; disponibilidad según stock del día.",
    image: "/images/Carnes/matambre.webp",
    alt: "Matambre",
  },
  {
    id: "matambre-especial",
    name: "Matambre especial",
    category: "especialidad",
    badge: "Top ventas",
    description:
      "Limpieza extra y presentación seleccionada. Consultar en mostrador.",
    image: "/images/Carnes/matambre2.webp",
    alt: "Matambre especial",
  },
  {
    id: "bife-ancho",
    name: "Bife ancho",
    category: "premium",
    badge: "Premium",
    description:
      "Alto lomo / ojo de bife. Marmoleo según ingreso y temporada.",
    image: "/images/Carnes/bife-ancho.webp",
    alt: "Bife ancho",
  },
  {
    id: "corte-hueso",
    name: "Corte con hueso",
    category: "vacuno",
    badge: "Tradicional",
    description:
      "Costillar con hueso. Piezas enteras o fraccionadas a pedido.",
    image: "/images/Carnes/asdo-costillar.webp",
    alt: "Costillar / corte con hueso",
  },
  {
    id: "vacio",
    name: "Vacío",
    category: "vacuno",
    badge: "Vacuno",
    description: "Cuarto trasero, con cobertura. Stock sujeto a demanda.",
    image: "/images/Carnes/vacio3.webp",
    alt: "Vacío",
  },
  {
    id: "asado-tira",
    name: "Asado de tira",
    category: "vacuno",
    badge: "Clásico",
    description: "Costillar en tira. Peso y presentación según pedido.",
    image: "/images/Carnes/asado.webp",
    alt: "Asado de tira",
  },
  {
    id: "ojo-bife",
    name: "Ojo de bife",
    category: "premium",
    badge: "Premium",
    description: "Lomo alto, corte fino. Disponibilidad según ingreso.",
    image: "/images/Carnes/bife-chorizo2.webp",
    alt: "Ojo de bife / chorizo",
  },
  {
    id: "bife-ancho-especial",
    name: "Bife ancho especial",
    category: "premium",
    badge: "Reserva",
    description: "Línea reserva. Stock según lista vigente.",
    image: "/images/Carnes/bife-ancho2.webp",
    alt: "Bife ancho — selección",
  },
  {
    id: "otros",
    name: "Otros cortes",
    category: "especialidad",
    badge: "Mostrador",
    description:
      "Embutidos, achuras y cortes del día. Misma línea de calidad; consultá disponibilidad.",
    image: "/images/Carnes/asado2.webp",
    alt: "Variedad de cortes en mostrador",
  },
];

export const catalogFilters = [
  { id: "todos", label: "Todos" },
  { id: "vacuno", label: "Vacuno" },
  { id: "especialidad", label: "Especialidad" },
  { id: "premium", label: "Premium" },
] as const;

export type CatalogFilterId = (typeof catalogFilters)[number]["id"];

export function filterCuts(filter: CatalogFilterId) {
  if (filter === "todos") return cuts;
  return cuts.filter((cut) => cut.category === filter);
}
