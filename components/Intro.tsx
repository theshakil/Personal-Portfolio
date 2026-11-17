import { Band } from "@/components/Band";
import { Reveal } from "@/components/Reveal";
import { pill, statement } from "@/lib/ui";

export function Intro() {
  return (
    <Band id="about" label="Intro">
      <Reveal as="p" className={`${statement} min-[721px]:indent-[16%]`}>
        I&apos;m an engineer building toward Senior AI Android Engineer.{" "}
        <em className="not-italic text-accent">I make apps that run models on the device and in the cloud,</em> and I
        design them to look as sharp as they work.
      </Reveal>

      <Reveal className="grid grid-cols-1 gap-7 min-[721px]:grid-cols-[minmax(0,1fr)_minmax(0,1.7fr)] min-[721px]:gap-x-[clamp(24px,5vw,72px)]">
        <p className="max-w-[46ch] justify-self-start text-[0.9375rem] text-mute min-[721px]:col-start-2">
          Android, machine learning, backend and web, learned from the first line of HTML up. I like to understand the
          whole system before I ship any piece of it.
        </p>
        <a href="#work" className={`${pill} justify-self-start min-[721px]:col-start-2`}>
          See my work
        </a>
      </Reveal>
    </Band>
  );
}
