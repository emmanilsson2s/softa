import { collections } from "@/content/site";

export function Collections() {
  const [tall, ...rest] = collections.images;
  if (!tall) return null;


  return (
    <section
      id="collections"
      aria-labelledby="collections-title"
      className="relative mx-auto max-w-7xl px-4 py-12 md:py-20"
    >
      <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
        <div>
          <p className="eyebrow text-accent">
            {collections.eyebrow}
          </p>
          <h2
            id="collections-title"
            className="mt-4 max-w-4xl font-display text-4xl leading-tight text-brand md:text-5xl"
          >
            {collections.title}
          </h2>
          <p className="mt-4 max-w-xl leading-relaxed text-muted-foreground">{collections.body}</p>
        </div>
      </div>

      <div className="grid lg:grid-cols-12">
        <img
          src={tall.src}
          alt={tall.alt}
          loading="lazy"
          className="aspect-3/4 w-full rounded-3xl object-cover lg:col-span-5 lg:aspect-auto lg:h-full"
        />
        <div className="grid lg:col-span-7">
          {rest.map((image) => (
            <img
              key={image.src}
              src={image.src}
              alt={image.alt}
              loading="lazy"
              className="aspect-4/3 w-full rounded-3xl object-cover"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
