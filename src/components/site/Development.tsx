import { development } from "@/content/site";

export function Development() {
  return (
    <section
      id="development"
      aria-labelledby="development-title"
      className="relative mx-auto max-w-7xl px-4 py-12 md:py-20"
    >
      <div className="max-w-2xl">
        <p className="eyebrow text-accent">
          {development.eyebrow}
        </p>
        <h2 id="development-title" className="mt-4 font-display text-4xl leading-tight text-brand md:text-5xl">
          {development.title}
        </h2>
        <p className="mt-5 leading-relaxed text-muted-foreground">{development.body}</p>
      </div>

      <ol className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4">
        {development.steps.map((step) => (
          <li key={step.label} className="panel overflow-hidden rounded-3xl">
            <img
              src={step.image.src}
              alt={step.image.alt}
              loading="lazy"
              className="aspect-4/3 w-full object-cover"
            />
            <div className="p-6">
              <h3 className="mt-2 font-display text-2xl text-brand">{step.label}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.note}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
