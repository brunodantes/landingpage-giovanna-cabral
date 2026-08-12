import { episodes } from "@/lib/site-data";

export default function PodcastSection() {
  return (
    <section id="podcast" className="scroll-mt-24 px-6 py-16 min-[900px]:px-14 min-[900px]:py-24">
      <div className="mx-auto grid max-w-[1280px] gap-12 min-[900px]:grid-cols-[0.85fr_1.15fr] min-[900px]:gap-18 min-[900px]:items-start">
        <div className="flex flex-col gap-5.5 min-[900px]:sticky min-[900px]:top-[110px]">
          <span className="text-xs tracking-[0.22em] text-eyebrow uppercase">
            02 — Podcast
          </span>
          <h2 className="font-display text-[32px] leading-[1.15] font-normal min-[900px]:text-[42px]">
            Café com Página
          </h2>
          <p className="text-base leading-[1.7] text-body">
            Um episódio novo toda quinta, sobre leitura, rotina e as pequenas
            coisas que fazem diferença.
          </p>
          <div className="mt-1 flex flex-wrap gap-2.5">
            <a
              href="#"
              className="rounded-full bg-accent-blue px-5 py-2.5 text-[13px] text-surface"
            >
              Spotify
            </a>
            <a
              href="#"
              className="rounded-full border border-border-defined px-5 py-2.5 text-[13px] text-ink"
            >
              Apple Podcasts
            </a>
            <a
              href="#"
              className="rounded-full border border-border-defined px-5 py-2.5 text-[13px] text-ink"
            >
              YouTube
            </a>
          </div>
        </div>

        <div className="flex flex-col">
          {episodes.map((ep) => (
            <a
              key={ep.num}
              href="#"
              className="grid grid-cols-[64px_1fr_auto] items-center gap-6 border-t border-border-subtle px-2 py-6.5 text-ink hover:bg-episode-hover"
            >
              <span className="font-display text-[26px] text-numeral">
                {ep.num}
              </span>
              <div className="flex flex-col gap-1.5">
                <h3 className="font-display text-xl font-normal">
                  {ep.title}
                </h3>
                <span className="text-sm text-soft">{ep.guest}</span>
              </div>
              <span className="text-[13px] tracking-[0.06em] text-eyebrow">
                {ep.length}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
