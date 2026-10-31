import { hero } from "@/content/site";

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="relative mx-auto max-w-7xl px-4 pt-12 pb-10 md:pt-20">
      <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-6">
          <h1
            id="hero-title"
             className="font-display text-[2.75rem] leading-[1.04] tracking-tight text-brand sm:text-6xl md:text-7xl"
          >
            Textilier, framtagna för{" "}
            <em className="not-italic text-accent">ert sortiment.</em>
          </h1>

          <p className="mt-6 max-w-md text-lg leading-relaxed text-muted-foreground">{hero.lead}</p>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">{hero.body}</p>

          <div className="mt-8">
            <a
              href="#collections"
              className="inline-block rounded-full bg-brand px-6 py-3 text-sm font-medium text-brand-foreground transition-colors hover:bg-ink"
            >
              Se våra kollektioner
            </a>
          </div>
        </div>

        <div className="lg:col-span-6">
          <img
            src={hero.image.src}
            alt={hero.image.alt}
            width={1024}
            height={771}
            className="aspect-4/5 w-full rounded-3xl object-cover shadow-[0_30px_60px_-40px_oklch(0.29_0.021_158/45%)] sm:aspect-3/2 lg:aspect-4/5"
          />
        </div>
      </div>
    </section>
  );
}
