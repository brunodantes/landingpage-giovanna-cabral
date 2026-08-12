export default function SectionHeading({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <div className="flex flex-col gap-3">
      <span className="text-xs tracking-[0.22em] text-eyebrow uppercase">
        {eyebrow}
      </span>
      <h2 className="font-display text-[32px] font-normal min-[900px]:text-[42px]">
        {title}
      </h2>
    </div>
  );
}
