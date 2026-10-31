import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";

import logoAsset from "@/assets/softa-interior-logo.png.asset.json";
import { brand, nav } from "@/content/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      setScrolled(window.scrollY > 8);
      const threshold = (headerRef.current?.getBoundingClientRect().bottom ?? 96) + 80;
      let current: string | null = null;
      for (const id of [...nav.map((item) => item.id), "contact"]) {
        const section = document.getElementById(id);
        if (section && section.getBoundingClientRect().top <= threshold) current = id;
      }
      if (window.scrollY > 8 && window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2) {
        current = "contact";
      }
      setActiveSection(current);
      frame = 0;
    };
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <header ref={headerRef} className="sticky top-0 z-50">
      <div className={cn("mx-auto transition-all duration-300", scrolled || menuOpen ? "max-w-7xl px-4 pt-3 md:pt-4" : "max-w-full px-0 pt-0")}>
        <nav
          aria-label="Huvudmeny"
          className={cn("panel flex items-center justify-between gap-4 px-4 py-3 transition-all duration-300 md:px-5", scrolled || menuOpen ? "panel-shadow rounded-menu" : "md:px-8 lg:py-4")}
        >
          <a href="#top" className="flex shrink-0 items-center" aria-label={brand.name}>
            <img src={logoAsset.url} alt={brand.name} className="h-9 w-auto md:h-10" />
          </a>

          <ul className="hidden items-center gap-7 text-sm text-muted-foreground lg:flex">
            {nav.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} aria-current={activeSection === item.id ? "location" : undefined} className={cn("border-b-2 py-2 transition-colors hover:text-brand", activeSection === item.id ? "border-accent text-accent" : "border-transparent")}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex shrink-0 items-center gap-2">
            <a
              href="#contact"
              aria-current={activeSection === "contact" ? "location" : undefined}
              className={cn("rounded-full px-4 py-2 text-sm font-medium transition-colors md:px-5", activeSection === "contact" ? "bg-accent text-accent-foreground" : "bg-brand text-brand-foreground hover:bg-ink")}
            >
              Kontakt
            </a>
            <button
              type="button"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? "Stäng meny" : "Öppna meny"}
              onClick={() => setMenuOpen((open) => !open)}
              className="grid size-10 place-items-center rounded-full text-brand transition-colors hover:bg-brand/5 lg:hidden"
            >
              {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </nav>

        {/* Mobile menu */}
        {menuOpen && (
          <div id="mobile-menu" className="panel panel-shadow rounded-menu mt-2 lg:hidden">
            <ul className="flex flex-col p-2">
              {nav.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    aria-current={activeSection === item.id ? "location" : undefined}
                    onClick={() => setMenuOpen(false)}
                    className={cn("block rounded-lg px-4 py-3 text-base transition-colors", activeSection === item.id ? "bg-brand/5 font-medium text-accent" : "text-brand hover:bg-brand/5")}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
