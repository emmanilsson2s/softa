import { createFileRoute } from "@tanstack/react-router";

import { SiteHeader } from "@/components/site/SiteHeader";
import { Hero } from "@/components/site/Hero";
import { Statement } from "@/components/site/Statement";
import { Story } from "@/components/site/Story";
import { Development } from "@/components/site/Development";
import { Collections } from "@/components/site/Collections";
import { Sustainability } from "@/components/site/Sustainability";
import { PrivateLabel } from "@/components/site/PrivateLabel";
import { Contact } from "@/components/site/Contact";

const title = "Textilier, framtagna för ert sortiment";
const description =
  "Skandinaviska hemtextilier för grossister och e-handel – kuddar, mattor, plädar, sängkläder och gardiner. Familjeägt sedan 1999.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <main id="top" className="relative">
        {/* Decorative light wash behind the frosted panels */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="absolute -left-24 top-10 size-[34rem] rounded-full bg-accent/25 blur-3xl" />
          <div className="absolute right-0 top-40 size-[30rem] rounded-full bg-sand/60 blur-3xl" />
          <div className="absolute bottom-0 left-1/3 size-[40rem] rounded-full bg-brand/10 blur-3xl" />
        </div>

        <Hero />
        <Statement />
        <Story />
        <Development />
        <Collections />
        <Sustainability />
        <PrivateLabel />
        <Contact />
      </main>
    </div>
  );
}
