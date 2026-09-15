"use client";

import { FormEvent, useState } from "react";
import { mailtoMessage, whatsappMessageUrl } from "@/lib/site";

export function ContactForm() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");

  function buildMessage() {
    return `Hola, soy ${nombre}.\nEmail: ${email}\n\n${mensaje}`;
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    window.open(whatsappMessageUrl(buildMessage()), "_blank", "noopener,noreferrer");
  }

  function handleMailto() {
    window.location.href = mailtoMessage({
      name: nombre,
      email,
      message: mensaje,
    });
  }

  return (
    <form className="space-y-10" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="relative">
          <label
            className="block text-xs uppercase tracking-widest text-on-surface-variant mb-2"
            htmlFor="contacto-nombre"
          >
            Nombre
          </label>
          <input
            className="w-full bg-surface-container-lowest border-0 border-b-2 border-outline-variant focus:border-primary-container focus:ring-0 text-on-surface py-4 transition-colors"
            id="contacto-nombre"
            name="nombre"
            type="text"
            autoComplete="name"
            required
            value={nombre}
            onChange={(event) => setNombre(event.target.value)}
          />
        </div>
        <div className="relative">
          <label
            className="block text-xs uppercase tracking-widest text-on-surface-variant mb-2"
            htmlFor="contacto-email"
          >
            Email
          </label>
          <input
            className="w-full bg-surface-container-lowest border-0 border-b-2 border-outline-variant focus:border-primary-container focus:ring-0 text-on-surface py-4 transition-colors"
            id="contacto-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
      </div>
      <div className="relative">
        <label
          className="block text-xs uppercase tracking-widest text-on-surface-variant mb-2"
          htmlFor="contacto-mensaje"
        >
          Mensaje
        </label>
        <textarea
          className="w-full bg-surface-container-lowest border-0 border-b-2 border-outline-variant focus:border-primary-container focus:ring-0 text-on-surface py-4 transition-colors"
          id="contacto-mensaje"
          name="mensaje"
          rows={4}
          required
          value={mensaje}
          onChange={(event) => setMensaje(event.target.value)}
        />
      </div>
      <div className="flex flex-col sm:flex-row gap-4 sm:items-center">
        <button
          className="bg-primary-container text-white px-12 py-5 headline-font font-black uppercase tracking-widest hover:bg-opacity-90 transition-all active:scale-95"
          type="submit"
        >
          Enviar por WhatsApp
        </button>
        <button
          className="border border-white/20 px-8 py-5 headline-font font-bold uppercase tracking-widest text-on-surface hover:bg-white/5 transition-all"
          type="button"
          onClick={handleMailto}
        >
          Abrir correo
        </button>
      </div>
      <p className="text-sm text-on-surface-variant">
        No hay pedidos online: la consulta se abre en WhatsApp o en tu correo.
      </p>
    </form>
  );
}
