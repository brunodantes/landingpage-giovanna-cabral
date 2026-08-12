import Image from "next/image";
import SectionHeading from "./SectionHeading";
import { books } from "@/lib/site-data";

export default function BooksSection() {
  return (
    <section
      id="livros"
      className="scroll-mt-24 bg-alt px-6 py-16 min-[900px]:px-14 min-[900px]:py-22"
    >
      <div className="mx-auto flex max-w-[1280px] flex-col gap-11">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <SectionHeading eyebrow="01 — Estante" title="Livros que eu indico" />
          <a
            href="#"
            className="border-b border-border-defined pb-1 text-sm text-accent-blue hover:text-peach"
          >
            Ver estante completa
          </a>
        </div>

        <div className="grid grid-cols-2 gap-6 min-[640px]:grid-cols-3 min-[900px]:grid-cols-4 min-[900px]:gap-8">
          {books.map((book) => (
            <article key={book.title} className="flex flex-col gap-4">
              <div className="relative aspect-2/3 w-full overflow-hidden rounded-[6px] bg-hero-shape">
                <Image
                  src={book.cover}
                  alt={`Capa de ${book.title}`}
                  fill
                  sizes="(min-width: 900px) 25vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <span className="text-[11px] tracking-[0.18em] text-eyebrow uppercase">
                  {book.tag}
                </span>
                <h3 className="font-display text-[21px] leading-[1.25] font-normal">
                  {book.title}
                </h3>
                <span className="text-sm text-soft">{book.author}</span>
              </div>
              <p className="text-sm leading-[1.6] text-body">{book.note}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
