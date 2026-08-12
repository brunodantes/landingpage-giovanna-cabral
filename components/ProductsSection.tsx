import Placeholder from "./Placeholder";
import SectionHeading from "./SectionHeading";
import { products } from "@/lib/site-data";

export default function ProductsSection() {
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

        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,210px),1fr))] gap-7">
          {products.map((item) => (
            <article
              key={item.name}
              className="flex flex-col gap-4 rounded-[20px] border border-border-subtle bg-surface p-5 transition-colors hover:border-peach"
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
                  href="#"
                  className="rounded-full bg-peach-light px-4 py-2.5 text-xs tracking-[0.08em] text-ink uppercase"
                >
                  Comprar
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
