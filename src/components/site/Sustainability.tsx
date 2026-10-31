import { sustainability } from "@/content/site";

export function Sustainability() {
  return (
    <section
      id="sustainability"
      aria-labelledby="sustainability-title"
      className="relative bg-panel py-20 md:py-32"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-6">
          <p className="eyebrow text-accent">
            {sustainability.eyebrow}
          </p>
          <h2
            id="sustainability-title"
            className="mt-4 font-display text-4xl leading-tight text-brand md:text-5xl"
          >
            {sustainability.title}
          </h2>
          <p className="mt-3 text-sm font-medium tracking-wide text-brand uppercase">
            {sustainability.subtitle}
          </p>
          {sustainability.paragraphs.map((paragraph) => (
            <p key={paragraph} className="mt-4 max-w-xl leading-relaxed text-muted-foreground">
              {paragraph}
            </p>
          ))}
          <p className="mt-6 max-w-lg font-display text-2xl leading-snug text-brand">
            {sustainability.closing}
          </p>
        </div>

        <div className="flex flex-col gap-8 lg:col-span-6">
          <div className="border-t border-brand/20 pt-6 text-brand">
            <h3 className="font-display text-2xl">Certifierade partner</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{sustainability.note}</p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {sustainability.certifications.map((certification) => (
                <li
                  key={certification}
                  className="rounded-full border border-brand/20 px-3 py-1.5 font-mono text-[11px] tracking-wide text-brand"
                >
                  {certification}
                </li>
              ))}
            </ul>
          </div>
          <img
            src={sustainability.certificationsImage.src}
            alt={sustainability.certificationsImage.alt}
            loading="lazy"
            className="w-full rounded-3xl object-cover"
          />
        </div>
      </div>
    </section>
  );
}
