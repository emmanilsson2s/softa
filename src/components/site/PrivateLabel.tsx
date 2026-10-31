import { privateLabel } from "@/content/site";

export function PrivateLabel() {
  return (
    <section
      id="private-label"
      aria-labelledby="private-label-title"
      className="relative"
    >
      <div className="bg-panel-light px-4 py-20 md:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <p className="eyebrow text-accent">
              {privateLabel.eyebrow}
            </p>
            <h2
              id="private-label-title"
              className="mt-4 font-display text-4xl leading-tight text-brand md:text-5xl"
            >
              {privateLabel.title}
            </h2>
            {privateLabel.paragraphs.map((paragraph) => (
              <p key={paragraph} className="mt-5 max-w-xl leading-relaxed text-muted-foreground">
                {paragraph}
              </p>
            ))}
            <a
              href="#contact"
              className="mt-8 inline-block rounded-full bg-brand px-6 py-3 text-sm font-medium text-brand-foreground transition-colors hover:bg-ink"
            >
              Kontakta oss
            </a>
          </div>

          <div className="lg:col-span-6">
            <ul className="space-y-6 border-t border-brand/20 pt-8 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-12">
              {privateLabel.points.map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground">
                  <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
