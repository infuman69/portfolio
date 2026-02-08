import Image from "next/image";

export function Diagram({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption?: string;
}) {
  return (
    <figure className="my-8 flex flex-col items-center gap-2">
      <Image
        src={src}
        alt={alt}
        width={900}
        height={500}
        className="rounded-lg dark:invert dark:hue-rotate-180"
      />
      {caption && (
        <figcaption className="text-sm text-muted-foreground">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
