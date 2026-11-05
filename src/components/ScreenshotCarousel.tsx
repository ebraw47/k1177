import Image from 'next/image';

export type ScreenshotItem = {
  src: string;
  alt: string;
  title: string;
};

type ScreenshotCarouselProps = {
  screenshots: ScreenshotItem[];
};

export default function ScreenshotCarousel({ screenshots }: ScreenshotCarouselProps) {
  return (
    <div className="relative" aria-label="K1177 app screenshots">
      <div className="k1177-shots-track flex gap-4 md:gap-5 overflow-x-auto px-4 md:px-8 pb-4 snap-x snap-mandatory scroll-smooth">
        {screenshots.map((shot) => (
          <figure
            key={shot.src}
            className="k1177-shot snap-center shrink-0 w-[148px] sm:w-[168px] md:w-[190px] m-0"
          >
            <div className="k1177-shot-frame">
              <Image
                src={shot.src}
                alt={shot.alt}
                width={720}
                height={1280}
                sizes="190px"
                className="k1177-shot-img"
              />
            </div>
            <figcaption className="mt-2.5 text-center text-sm font-semibold text-accent tracking-wide">
              {shot.title}
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
