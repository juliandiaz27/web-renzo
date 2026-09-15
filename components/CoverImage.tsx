import Image from "next/image";

type CoverImageProps = {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
};

export function CoverImage({
  src,
  alt,
  className = "object-cover",
  sizes = "100vw",
  priority,
}: CoverImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      priority={priority}
      className={className}
    />
  );
}
