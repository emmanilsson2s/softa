import { brand, contact, nav } from "@/content/site";

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="relative">
      <div className="bg-brand px-8 py-14 text-brand-foreground md:px-14 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="eyebrow text-accent">
              {contact.eyebrow}
            </p>
            <h2 id="contact-title" className="mt-4 font-display text-4xl leading-tight md:text-6xl">
              {contact.title}
            </h2>
            <p className="mt-5 max-w-md leading-relaxed text-brand-foreground/75">{contact.body}</p>
          </div>

          <div className="space-y-8 lg:col-span-5">
            <dl className="space-y-6">
              {contact.details.map((detail) => (
                <div key={detail.label}>
                  <dt className="eyebrow text-accent">{detail.label}</dt>
                  <dd className="mt-1 text-lg">
                    {detail.href ? (
                      <a href={detail.href} className="transition-colors hover:text-accent">
                        {detail.value}
                      </a>
                    ) : (
                      detail.value
                    )}
                  </dd>
                </div>
              ))}
            </dl>

            <div>
              <p className="eyebrow text-accent">Kontaktperson</p>
              <ul className="mt-3 space-y-4">
                {contact.people.map((person) => (
                  <li key={person.email}>
                    <p className="text-lg font-medium">{person.name}</p>
                    <p className="mt-0.5 text-sm text-brand-foreground/75">
                      <a href={person.phoneHref} className="transition-colors hover:text-accent">
                        {person.phone}
                      </a>
                      <span aria-hidden="true"> · </span>
                      <a href={`mailto:${person.email}`} className="transition-colors hover:text-accent">
                        {person.email}
                      </a>
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <footer className="mx-auto max-w-7xl px-4 pb-8 mt-6 flex flex-col items-start justify-between gap-6 border-t border-brand/10 pt-8 md:flex-row md:items-center">
        <p className="font-display text-lg text-brand">{brand.name}</p>
        <ul className="flex flex-wrap gap-6 text-sm text-muted-foreground">
          {nav.map((item) => (
            <li key={item.id}>
              <a href={`#${item.id}`} className="transition-colors hover:text-brand">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <p className="eyebrow text-muted-foreground">{brand.tagline}</p>
      </footer>
    </section>
  );
}
