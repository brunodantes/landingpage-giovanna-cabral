"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    instgrm?: {
      Embeds: {
        process: () => void;
      };
    };
  }
}

let scriptPromise: Promise<void> | null = null;

function loadEmbedScript() {
  if (!scriptPromise) {
    scriptPromise = new Promise((resolve) => {
      if (window.instgrm) {
        resolve();
        return;
      }
      const script = document.createElement("script");
      script.src = "https://www.instagram.com/embed.js";
      script.async = true;
      script.onload = () => resolve();
      document.body.appendChild(script);
    });
  }
  return scriptPromise;
}

/** Prévia oficial de um post do Instagram (via embed.js). Só funciona para posts públicos. */
export default function InstagramEmbed({ url }: { url: string }) {
  useEffect(() => {
    let cancelled = false;
    loadEmbedScript().then(() => {
      if (!cancelled) window.instgrm?.Embeds.process();
    });
    return () => {
      cancelled = true;
    };
  }, [url]);

  return (
    <blockquote
      className="instagram-media"
      data-instgrm-permalink={url}
      data-instgrm-version="14"
      style={{ margin: 0, width: "100%", minWidth: 326 }}
    />
  );
}
