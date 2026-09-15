import Image from "next/image";
import Link from "next/link";

export function LogoBrand() {
  return (
    <Link href="/" className="logo-brand min-w-0 shrink" aria-label="Frigorífico H&H - Inicio">
      <span className="logo-brand__mark">
        <Image
          src="/images/logos/logo-c.png"
          width={160}
          height={80}
          alt=""
          className="logo-brand__img"
        />
      </span>
      <span className="logo-brand__divider" aria-hidden="true" />
      <span className="logo-brand__wordmark">FRIGORIFICO</span>
      <span className="logo-brand__flag-wrap">
        <Image
          src="/images/logos/bandera-2.png"
          width={56}
          height={36}
          alt=""
          className="logo-brand__flag"
        />
      </span>
    </Link>
  );
}
