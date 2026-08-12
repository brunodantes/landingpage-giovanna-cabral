"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/lib/site-data";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-20 border-b border-border-subtle bg-paper/88 px-6 py-5 backdrop-blur-sm lg:px-14 lg:py-[26px]">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-6">
        <span className="font-display text-[22px] tracking-[0.02em]">
          Giovanna Cabral
        </span>

        <nav className="hidden items-center gap-[34px] text-sm tracking-[0.06em] text-soft uppercase min-[900px]:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-soft hover:text-peach">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="#newsletter"
            className="hidden rounded-full bg-peach px-[22px] py-[11px] text-[13px] tracking-[0.08em] text-surface uppercase hover:text-surface min-[900px]:inline-block"
          >
            Newsletter
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label="Abrir menu"
            className="text-ink min-[900px]:hidden"
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="mx-auto mt-5 flex max-w-[1280px] flex-col gap-4 border-t border-border-subtle pt-5 text-sm tracking-[0.06em] text-soft uppercase min-[900px]:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-soft hover:text-peach"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#newsletter"
            onClick={() => setOpen(false)}
            className="w-fit rounded-full bg-peach px-[22px] py-[11px] text-[13px] tracking-[0.08em] text-surface uppercase hover:text-surface"
          >
            Newsletter
          </a>
        </nav>
      )}
    </header>
  );
}
