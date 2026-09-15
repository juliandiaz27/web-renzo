import { Icon } from "@/components/Icon";
import { contactChannels, whatsappMessageUrl } from "@/lib/site";

export function ContactChannelsIndustrial() {
  return (
    <section
      id="como-comunicarse"
      className="scroll-mt-28 bg-surface-container-low py-20 sm:py-28 px-4 sm:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <p className="text-sm font-black uppercase tracking-[0.35em] text-[#cc0000] mb-4">Pedido</p>
        <h2 className="text-5xl sm:text-6xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-4">
          Tres formas
          <br />
          de pedir
        </h2>
        <p className="mb-12 sm:mb-16 max-w-xl text-on-surface-variant font-bold uppercase tracking-wide">
          Envío a restaurantes, envío a carnicerías o retiro en sucursal.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/15 border border-white/15">
          {contactChannels.map((channel) => {
            const href =
              channel.kind === "whatsapp" ? whatsappMessageUrl(channel.message) : channel.href;

            return (
              <article
                key={channel.id}
                className="relative flex min-h-[320px] flex-col overflow-hidden bg-surface-container-lowest p-8 sm:p-10"
              >
                <span
                  aria-hidden
                  className="pointer-events-none absolute -right-2 -top-8 select-none text-[7.5rem] font-black leading-none text-white/[0.06]"
                >
                  {channel.id}
                </span>
                <span className="text-sm font-black tracking-[0.3em] text-[#cc0000]">
                  {channel.id}
                </span>
                <h3 className="mt-8 text-3xl font-black uppercase tracking-tighter leading-[0.9]">
                  {channel.title}
                </h3>
                <p className="mt-4 flex-1 text-on-surface-variant font-medium leading-relaxed">
                  {channel.text}
                </p>
                <a
                  className="mt-8 inline-flex w-full items-center justify-center gap-2 bg-primary-container px-5 py-4 text-xs font-black uppercase tracking-widest text-on-primary-container transition-colors hover:bg-[#a30000] sm:text-sm"
                  href={href}
                  {...(channel.kind === "whatsapp"
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  <Icon
                    name={channel.kind === "whatsapp" ? "chat" : "location_on"}
                    className="text-lg"
                  />
                  {channel.cta}
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
