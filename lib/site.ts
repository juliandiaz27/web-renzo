export const site = {
  name: "Frigorífico H&H",
  tagline: "Calidad en carnes",
  phone: "4687-1105",
  phoneHref: "tel:+541146871105",
  whatsapp: "11 6694-6733",
  whatsappHref: "https://wa.me/5491166946733",
  address: "José E. Rodó 6483",
  neighborhood: "Mataderos · CABA",
  hours: "Carnicerías: lun a sáb 9:00 – 13:30 y 16:30 – 20:30 · Dom: 9:00 – 13:00",
  hoursRange: "9:00 — 13:30 / 16:30 — 20:30",
  hoursWeekdaysLabel: "Lunes a sábado",
  hoursWeekdays: "9:00 — 13:30 y 16:30 — 20:30",
  hoursSundayLabel: "Domingo",
  hoursSunday: "9:00 — 13:00",
  hoursCarniceria:
    "Lun a sáb 9:00–13:30 y 16:30–20:30. Domingo 9:00–13:00.",
  hoursPlant: "Lun – sáb 05:00 — 13:00",
  shipping: "CABA y zona oeste",
  priceList: "/lista-precios.pdf",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Jose+E+Rodo+6483,+Mataderos,+Buenos+Aires,+Argentina",
  mapsEmbed:
    "https://maps.google.com/maps?q=Jose%20E%20Rodo%206483%2C%20Mataderos%2C%20Buenos%20Aires%2C%20Argentina&hl=es&z=16&output=embed",
  instagram: "#",
} as const;

export const locations = [
  {
    id: "planta",
    kind: "Planta",
    name: "José E. Rodó 6483",
    area: "Mataderos · CABA",
    text: "Venta mayorista y minorista. Cortes, medias reses y retiro en mostrador.",
    hours: "Lun – Sáb 05:00 — 13:00",
    mapsLabel: "Cómo llegar a planta",
    mapsQuery: "José E. Rodó 6483, Mataderos, Buenos Aires, Argentina",
  },
  {
    id: "mataderos",
    kind: "Sucursal carnicería",
    name: "Emilio Castro 6927",
    area: "Mataderos · CABA",
    text: "Mostrador de carnicería para retiro de cortes, achuras y pedidos del día.",
    hours: "Lun – Sáb 09:00 — 13:30 y 16:30 — 20:30 · Dom 09:00 — 13:00",
    mapsLabel: "Cómo llegar a Mataderos",
    mapsQuery: "Emilio Castro 6927, Mataderos, Buenos Aires, Argentina",
  },
  {
    id: "tapiales",
    kind: "Sucursal carnicería",
    name: "Boulogne Sur Mer 1394",
    area: "Bitegual Tapiales · Provincia de Buenos Aires",
    text: "Carnicería en Zona Oeste. Retiro de cortes y pedidos del día.",
    hours: "Lun – Sáb 09:00 — 13:30 y 16:30 — 20:30 · Dom 09:00 — 13:00",
    mapsLabel: "Cómo llegar a Tapiales",
    mapsQuery: "Boulogne Sur Mer 1394, Tapiales, Buenos Aires, Argentina",
  },
] as const;

export const contactChannels = [
  {
    id: "01",
    title: "Envío a restaurantes",
    text: "Abastecimiento para gastronomía. Coordiná cortes, cantidad y entrega por WhatsApp.",
    cta: "Consultar por WhatsApp",
    message: "Hola, consulto envío a restaurantes.",
    kind: "whatsapp",
    icon: "restaurant",
  },
  {
    id: "02",
    title: "Envío a carnicerías",
    text: `Abastecimiento para comercios. ${site.hoursCarniceria}`,
    cta: "Consultar por WhatsApp",
    message: "Hola, consulto envío a carnicerías.",
    kind: "whatsapp",
    icon: "storefront",
  },
  {
    id: "03",
    title: "Retiro por local",
    text: "Planta y sucursales de carnicería. Retiro en mostrador o coordiná tu visita.",
    cta: "Ver ubicación",
    message: "",
    kind: "anchor",
    href: "#ubicacion",
    icon: "location_on",
  },
] as const;

export function mapsSearchUrl(query: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

export function whatsappMessageUrl(text: string) {
  return `${site.whatsappHref}?text=${encodeURIComponent(text)}`;
}

export function mailtoMessage({
  name,
  email,
  message,
}: {
  name: string;
  email: string;
  message: string;
}) {
  const subject = encodeURIComponent(`Consulta de ${name} — ${site.name}`);
  const body = encodeURIComponent(
    `Nombre: ${name}\nEmail: ${email}\n\n${message}`,
  );
  return `mailto:?subject=${subject}&body=${body}`;
}
