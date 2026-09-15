import { Icon } from "@/components/Icon";
import { contactChannels, whatsappMessageUrl } from "@/lib/site";

export function ContactChannels() {
  return (
    <section
      id="como-comunicarse"
      className="scroll-mt-28 border-t border-[#ffffff08] bg-background py-16 sm:py-24 px-4 sm:px-8 lg:px-12"
    >
      <div className="container mx-auto max-w-[1920px]">
        <div className="mb-10 sm:mb-14">
          <h2 className="headline-font text-[clamp(1.55rem,6vw,3rem)] sm:text-4xl md:text-5xl font-black uppercase tracking-tighter leading-[1.05]">
            Cómo comunicarte
          </h2>
          <div className="h-1 bg-[#dd180d] mt-4 w-full max-w-[min(100%,18rem)] sm:w-24 sm:max-w-none" />
          <p className="mt-5 max-w-xl text-on-surface-variant text-base leading-relaxed">
            Tres formas de hacer tu pedido: envío a restaurantes, envío a carnicerías o retiro en el
            local.
          </p>
        </div>
        <div className="flex flex-col gap-px bg-[#ffffff15] border border-[#ffffff15]">
          {contactChannels.map((channel) => {
            const href =
              channel.kind === "whatsapp" ? whatsappMessageUrl(channel.message) : channel.href;
            const ctaClass =
              "inline-flex w-full sm:w-auto items-center justify-center gap-2 bg-primary-container px-6 py-4 text-white headline-font text-xs sm:text-sm font-black uppercase tracking-widest hover:brightness-110 transition-all active:scale-95";

            const cta =
              channel.kind === "whatsapp" ? (
                <a
                  className={ctaClass}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon name="chat_bubble" className="text-lg" />
                  {channel.cta}
                </a>
              ) : (
                <a className={ctaClass} href={href}>
                  <Icon name="directions" className="text-lg" />
                  {channel.cta}
                </a>
              );

            return (
              <article
                key={channel.id}
                className="flex flex-col gap-6 bg-surface-container-low p-6 sm:p-8 md:flex-row md:items-center md:justify-between md:gap-10 md:p-10 lg:px-14"
              >
                <div className="flex min-w-0 flex-1 gap-4 sm:gap-6">
                  <span className="headline-font shrink-0 text-2xl sm:text-3xl font-black text-[#dd180d]">
                    {channel.id}
                  </span>
                  <div className="min-w-0">
                    <h3 className="headline-font flex items-center gap-3 text-xl sm:text-2xl md:text-3xl font-black uppercase tracking-tight">
                      <Icon name={channel.icon} className="text-hh-yellow text-2xl sm:text-3xl" />
                      {channel.title}
                    </h3>
                    <p className="mt-3 max-w-2xl text-sm sm:text-base text-on-surface-variant leading-relaxed">
                      {channel.text}
                    </p>
                  </div>
                </div>
                <div className="shrink-0 md:self-center">{cta}</div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
