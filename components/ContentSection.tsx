import Placeholder from "./Placeholder";
import SectionHeading from "./SectionHeading";
import { contentPosts } from "@/lib/site-data";

export default function ContentSection() {
  return (
    <section
      id="conteudos"
      className="scroll-mt-24 bg-alt px-6 py-16 min-[900px]:px-14 min-[900px]:py-22"
    >
      <div className="mx-auto flex max-w-[1280px] flex-col gap-11">
        <SectionHeading eyebrow="03 — Conteúdos" title="Textos e guias" />

        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,280px),1fr))] gap-8">
          {contentPosts.map((post) => (
            <article
              key={post.title}
              className="flex flex-col gap-4.5 rounded-[20px] bg-paper px-4.5 pt-4.5 pb-7"
            >
              <Placeholder
                label="Imagem de capa"
                className="h-[190px] w-full rounded-[14px]"
              />
              <div className="flex flex-col gap-2.5 px-2">
                <span className="text-[11px] tracking-[0.18em] text-eyebrow uppercase">
                  {post.tag}
                </span>
                <h3 className="font-display text-[22px] leading-[1.25] font-normal">
                  {post.title}
                </h3>
                <p className="text-sm leading-[1.6] text-body">
                  {post.excerpt}
                </p>
                <a
                  href="#"
                  className="mt-1.5 text-[13px] tracking-[0.08em] text-accent-blue uppercase hover:text-peach"
                >
                  Ler mais
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
