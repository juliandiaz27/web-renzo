export const site = {
  name: "Frigorífico H&H",
  tagline: "Calidad en carnes",
  phone: "4687-1105",
  phoneHref: "tel:+541146871105",
  whatsapp: "11 6694-6733",
  whatsappHref: "https://wa.me/5491166946733",
  address: "Rodo 6483",
  neighborhood: "Mataderos · CABA",
  hours: "Lun a sáb: 9:00 – 13:30 y 16:30 – 20:30 · Dom: 9:00 – 13:00",
  hoursRange: "9:00 — 13:30 / 16:30 — 20:30",
  hoursWeekdaysLabel: "Lunes a sábado",
  hoursWeekdays: "9:00 — 13:30 y 16:30 — 20:30",
  hoursSundayLabel: "Domingo",
  hoursSunday: "9:00 — 13:00",
  hoursCarniceria:
    "Lun a sáb 9:00–13:30 y 16:30–20:30. Domingo 9:00–13:00.",
  shipping: "CABA y zona oeste",
  priceList: "/lista-precios.pdf",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Rodo+6483,+Mataderos,+Buenos+Aires,+Argentina",
  mapsEmbed:
    "https://maps.google.com/maps?q=Rodo%206483%2C%20Mataderos%2C%20Buenos%20Aires%2C%20Argentina&hl=es&z=16&output=embed",
  instagram: "#",
} as const;

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
