import InstagramEmbed from "./InstagramEmbed";
import Placeholder from "./Placeholder";
import SectionHeading from "./SectionHeading";
import { instagramPosts, instagramProfileUrl } from "@/lib/site-data";

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
            href={instagramProfileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-border-defined px-6.5 py-3.5 text-sm tracking-[0.06em] text-ink"
          >
            Seguir
          </a>
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,326px),1fr))] gap-6">
          {instagramPosts.map((post) => (
            <div key={post.caption} className="group relative">
              <div
                className="absolute top-3 left-3 -right-3 -bottom-3 rounded-[16px] bg-border-defined shadow-[10px_10px_24px_-12px_rgba(46,42,40,0.35)] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1.5 group-hover:translate-y-1.5"
                aria-hidden
              />
              {post.link && post.link !== "#" ? (
                <div className="relative overflow-hidden rounded-[14px] bg-ig-tile transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-1">
                  <InstagramEmbed url={post.link} />
                </div>
              ) : (
                <a
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative m-0 block aspect-square overflow-hidden rounded-[14px] bg-ig-tile transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-1"
                >
                  <Placeholder label="Post do Instagram" className="h-full w-full" />
                  <span className="pointer-events-none absolute inset-x-0 bottom-0 bg-linear-to-t from-ink/55 to-transparent px-3.5 pt-8.5 pb-3 text-xs text-surface">
                    {post.caption}
                  </span>
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
