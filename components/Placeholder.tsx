import { ImageIcon } from "lucide-react";

type PlaceholderProps = {
  label: string;
  className?: string;
};

/**
 * Stand-in for a real photo. Swap for `next/image` once the client
 * supplies final assets — every usage below marks what the image is for.
 */
export default function Placeholder({ label, className = "" }: PlaceholderProps) {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-2 bg-hero-shape/60 text-center ${className}`}
    >
      <ImageIcon className="size-5 text-eyebrow" strokeWidth={1.5} aria-hidden />
      <span className="px-3 text-xs leading-snug text-eyebrow">{label}</span>
    </div>
  );
}
