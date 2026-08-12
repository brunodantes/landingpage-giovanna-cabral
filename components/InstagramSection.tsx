import Placeholder from "./Placeholder";
import SectionHeading from "./SectionHeading";
import { instagramPosts } from "@/lib/site-data";

export default function InstagramSection() {
  return (
    <section
      id="instagram"
      className="scroll-mt-24 bg-alt px-6 py-16 min-[900px]:px-14 min-[900px]:py-22"
    >
      <div className="mx-auto flex max-w-[1280px] flex-col gap-10">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <SectionHeading eyebrow="05 — Instagram" title="@giovanna.cabral" />
          <a
            href="#"
            className="rounded-full border border-border-defined px-6.5 py-3.5 text-sm tracking-[0.06em] text-ink"
          >
            Seguir
          </a>
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,305px),1fr))] gap-4">
          {instagramPosts.map((post) => (
            <figure
              key={post.caption}
              className="relative m-0 aspect-square overflow-hidden rounded-[14px] bg-ig-tile"
            >
              <Placeholder label="Post do Instagram" className="h-full w-full" />
              <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 bg-linear-to-t from-ink/55 to-transparent px-3.5 pt-8.5 pb-3 text-xs text-surface">
                {post.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
