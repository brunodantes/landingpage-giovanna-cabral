import Image from "next/image";

export default function Hero() {
  return (
    <section className="scroll-mt-24 px-6 py-16 min-[900px]:px-14 min-[900px]:pt-24 min-[900px]:pb-26">
      <div className="mx-auto grid max-w-[1280px] items-center gap-10 min-[900px]:grid-cols-[1.15fr_0.85fr] min-[900px]:gap-16">
        <div className="flex flex-col gap-7">
          <span className="text-xs tracking-[0.22em] text-eyebrow uppercase">
            Leituras, conversas e boas escolhas
          </span>
          <h1 className="text-pretty font-display text-[42px] leading-[1.08] font-normal min-[900px]:text-[66px]">
            Um cantinho para quem
            <br />
            <em className="text-accent-blue">ama ler</em> e descobrir coisas
            boas
          </h1>
          <p className="max-w-[46ch] text-pretty text-lg leading-[1.65] text-body">
            Aqui eu reúno os livros que me marcaram, os episódios do podcast,
            os textos que escrevo e os produtos que uso e indico de verdade.
          </p>
        </div>

        <div className="group relative w-fit justify-self-center">
          <div
            className="absolute -top-[22px] -right-[22px] bottom-[40px] left-6 rounded-[220px_220px_16px_16px] bg-hero-shape transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-3.5 group-hover:translate-y-2.5 group-hover:-rotate-[2.5deg]"
            aria-hidden
          />
          <div
            className="absolute -top-3.5 -left-[34px] size-[72px] rounded-full border border-circle opacity-35 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-x-2.5 group-hover:-translate-y-2 group-hover:scale-[1.15] group-hover:opacity-100"
            aria-hidden
          />
          <div className="relative h-[360px] w-[280px] overflow-hidden rounded-[200px] transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-3.5 group-hover:scale-[1.02] min-[900px]:h-[440px] min-[900px]:w-[340px]">
            <Image
              src="/giovanna-cabral-retrato.jpeg"
              alt="Giovanna Cabral"
              fill
              priority
              sizes="(min-width: 900px) 340px, 280px"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
