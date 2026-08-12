"use client";

import { useState, type FormEvent } from "react";

export default function NewsletterSection() {
  const [message, setMessage] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setMessage("Prontinho, você está na lista.");
    e.currentTarget.reset();
  }

  return (
    <section id="newsletter" className="scroll-mt-24 px-6 py-18 min-[900px]:px-14 min-[900px]:py-26">
      <div className="mx-auto flex max-w-[720px] flex-col items-center gap-5 text-center">
        <span className="text-xs tracking-[0.22em] text-eyebrow uppercase">
          Carta semanal
        </span>
        <h2 className="font-display text-[32px] leading-[1.2] font-normal min-[900px]:text-[40px]">
          Uma carta por semana, com calma
        </h2>
        <p className="max-w-[48ch] text-base leading-[1.7] text-body">
          Leituras da semana, um trecho que anotei e as indicações que não
          couberam no feed.
        </p>
        <form
          onSubmit={handleSubmit}
          className="mt-3 flex w-full max-w-[460px] gap-2.5"
        >
          <input
            type="email"
            required
            placeholder="seu melhor e-mail"
            className="flex-1 rounded-full border border-border-defined bg-surface px-5 py-[15px] text-[15px] text-ink outline-none placeholder:text-soft"
          />
          <button
            type="submit"
            className="rounded-full bg-peach px-7 py-[15px] text-sm tracking-[0.06em] text-surface"
          >
            Assinar
          </button>
        </form>
        <span className="min-h-[18px] text-[13px] text-eyebrow">{message}</span>
      </div>
    </section>
  );
}
