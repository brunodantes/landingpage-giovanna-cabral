"use client";

import { useState } from "react";
import { recommendations, type RecommendationType } from "@/lib/site-data";

const typeLabels: Record<RecommendationType, string> = {
  podcast: "Podcasts",
  video: "Vídeos",
};

export default function PodcastSection() {
  const [activeType, setActiveType] = useState<RecommendationType>("podcast");
  const filtered = recommendations.filter((item) => item.type === activeType);

  return (
    <section id="podcast" className="scroll-mt-24 px-6 py-16 min-[900px]:px-14 min-[900px]:py-24">
      <div className="mx-auto grid max-w-[1280px] gap-12 min-[900px]:grid-cols-[0.85fr_1.15fr] min-[900px]:gap-18 min-[900px]:items-start">
        <div className="flex flex-col gap-5.5 min-[900px]:sticky min-[900px]:top-[110px]">
          <span className="text-xs tracking-[0.22em] text-eyebrow uppercase">
            02 — Indicações
          </span>
          <h2 className="font-display text-[32px] leading-[1.15] font-normal min-[900px]:text-[42px]">
            Pra ouvir e assistir
          </h2>
          <p className="text-base leading-[1.7] text-body">
            Vídeos e podcasts de outras pessoas que eu acompanho e acho que
            valem a pena conhecer.
          </p>
          <div className="mt-1 flex flex-wrap gap-2.5">
            {(Object.keys(typeLabels) as RecommendationType[]).map((type) => (
              <button
                key={type}
                type="button"
                onClick={() => setActiveType(type)}
                aria-pressed={activeType === type}
                className={
                  activeType === type
                    ? "rounded-full bg-accent-blue px-5 py-2.5 text-[13px] text-surface"
                    : "rounded-full border border-border-defined px-5 py-2.5 text-[13px] text-ink"
                }
              >
                {typeLabels[type]}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col">
          {filtered.map((item, index) => (
            <a
              key={item.title}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="grid grid-cols-[64px_1fr_auto] items-center gap-6 border-t border-border-subtle px-2 py-6.5 text-ink hover:bg-episode-hover"
            >
              <span className="font-display text-[26px] text-numeral">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="flex flex-col gap-1.5">
                <h3 className="font-display text-xl font-normal">
                  {item.title}
                </h3>
                <span className="text-sm text-soft">{item.creator}</span>
              </div>
              <span className="text-[13px] tracking-[0.06em] text-eyebrow">
                {item.type === "podcast" ? "Podcast" : "Vídeo"}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
