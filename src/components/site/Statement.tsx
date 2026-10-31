import { statement } from "@/content/site";

export function Statement() {
  return (
    <section aria-labelledby="statement-title" className="relative">
      <div className="grid lg:grid-cols-12">
        <div className="panel rounded-3xl p-8 md:p-12 lg:col-span-7 lg:py-20 lg:pl-[max(3rem,calc((100vw-80rem)/2+1rem))]">
          <h2 id="statement-title" className="font-display text-4xl leading-tight text-brand md:text-5xl">
            {statement.lines[0]}
            <br />
            <span className="text-accent">{statement.lines[1]}</span>
          </h2>
          <p className="mt-5 max-w-lg font-display text-2xl leading-snug text-brand">{statement.kicker}</p>
          {statement.paragraphs.map((paragraph) => (
            <p key={paragraph} className="mt-5 max-w-xl leading-relaxed text-muted-foreground">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="lg:col-span-5">
          <img
            src={statement.image.src}
            alt={statement.image.alt}
            width={1200}
            height={1798}
            loading="lazy"
            className="h-full max-h-[38rem] w-full rounded-3xl object-cover"
          />
        </div>
      </div>
    </section>
  );
}
