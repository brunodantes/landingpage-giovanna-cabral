"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Placeholder from "./Placeholder";
import SectionHeading from "./SectionHeading";
import { products } from "@/lib/site-data";

export default function ProductsSection() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(true);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    const updateEdges = () => {
      setAtStart(el.scrollLeft <= 1);
      setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 1);
    };

    updateEdges();
    el.addEventListener("scroll", updateEdges, { passive: true });
    window.addEventListener("resize", updateEdges);
    return () => {
      el.removeEventListener("scroll", updateEdges);
      window.removeEventListener("resize", updateEdges);
    };
  }, []);

  const scrollByPage = (direction: 1 | -1) => {
    const el = scrollerRef.current;
    console.log(
      "[DEBUG scrollByPage] " +
        JSON.stringify({
          direction,
          hasEl: !!el,
          clientWidth: el?.clientWidth,
          scrollLeftBefore: el?.scrollLeft,
        }),
    );
    if (!el) return;
    el.scrollBy({ left: direction * el.clientWidth, behavior: "smooth" });
    console.log("[DEBUG scrollByPage] after call, scrollLeft=" + el.scrollLeft);
  };

  return (
    <section id="indicacoes" className="scroll-mt-24 px-6 py-16 min-[900px]:px-14 min-[900px]:py-24">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-11">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <SectionHeading eyebrow="04 — Indicações" title="Produtos que eu uso" />
          <p className="max-w-[34ch] text-sm text-soft">
            Alguns links são de afiliados. Só indico o que faz parte da minha
            rotina.
          </p>
        </div>

        <div className="relative">
          <div
            ref={scrollerRef}
            className="flex snap-x snap-mandatory gap-7 overflow-x-auto scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {products.map((item) => (
              <article
                key={item.name}
                className="flex shrink-0 basis-full snap-start flex-col gap-4 rounded-[20px] border border-border-subtle bg-surface p-5 transition-colors hover:border-peach sm:basis-[calc(50%-0.875rem)] lg:basis-[calc(33.3333%-1.16667rem)] xl:basis-[calc(25%-1.3125rem)]"
              >
                <Placeholder
                  label="Foto do produto"
                  className="h-[170px] w-full rounded-xl"
                />
                <div className="flex flex-col gap-1.5">
                  <h3 className="text-base font-semibold">{item.name}</h3>
                  <span className="text-[13px] text-soft">{item.category}</span>
                </div>
                <div className="mt-auto flex items-center justify-between">
                  <span className="font-display text-lg">{item.price}</span>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="sponsored noopener noreferrer"
                    className="rounded-full bg-peach-light px-4 py-2.5 text-xs tracking-[0.08em] text-ink uppercase"
                  >
                    Comprar
                  </a>
                </div>
              </article>
            ))}
          </div>

          {!atStart && (
            <button
              type="button"
              onClick={() => scrollByPage(-1)}
              aria-label="Ver produtos anteriores"
              className="absolute top-1/2 left-0 z-10 flex size-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-border-defined bg-surface text-ink shadow-[0_8px_20px_-8px_rgba(46,42,40,0.35)] transition-colors hover:border-peach"
            >
              <ChevronLeft className="size-4.5" strokeWidth={1.5} />
            </button>
          )}
          {!atEnd && (
            <button
              type="button"
              onClick={() => scrollByPage(1)}
              aria-label="Ver mais produtos"
              className="absolute top-1/2 right-0 z-10 flex size-11 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-border-defined bg-surface text-ink shadow-[0_8px_20px_-8px_rgba(46,42,40,0.35)] transition-colors hover:border-peach"
            >
              <ChevronRight className="size-4.5" strokeWidth={1.5} />
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
