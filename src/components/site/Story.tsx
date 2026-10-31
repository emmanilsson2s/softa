import { story } from "@/content/site";

export function Story() {
  return (
    <section id="story" aria-labelledby="story-title" className="relative bg-panel-light py-20 md:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-6">
          <p className="eyebrow text-accent">
            {story.eyebrow}
          </p>
          <h2 id="story-title" className="mt-4 font-display text-4xl leading-tight text-brand md:text-5xl">
            {story.title}
          </h2>
          <p className="mt-3 text-sm font-medium tracking-wide text-brand uppercase">{story.subtitle}</p>
          {story.paragraphs.map((paragraph) => (
            <p key={paragraph} className="mt-5 max-w-xl leading-relaxed text-muted-foreground">
              {paragraph}
            </p>
          ))}
        </div>

        <figure className="lg:col-span-6">
          <img
            src={story.image.src}
            alt={story.image.alt}
            loading="lazy"
            className="aspect-4/3 w-full object-cover shadow-xl lg:aspect-4/5"
          />
        </figure>
      </div>
    </section>
  );
}
