import { SectionHeader } from "@/components/utils/SectionHeader";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { Technologies } from "./Technologies";
import Link from "next/link";
import ButtonLink from "@/components/buttons/ButtonLink";
import { Reveal } from "@/components/utils/Reveal";

export const About = () => {
  const handleScrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };
  return (
    <section id="about" className="section-wrapper">
      <SectionHeader title="About" dir="l" />
      <div className={"grid grid-cols-1 lg:grid-cols-about gap-4"}>
        <div className="p-6 space-y-3 font-light border border-neutral-600 rounded-xl">
          <Reveal>
            <p>Hello, I'm a Front-end Developer from Szczecin.</p>
          </Reveal>
          <Reveal>
            <p>
              I create fast, responsive, and reliable websites using modern web
              development tools.
            </p>
          </Reveal>
          <Reveal>
            <p>
              I write <b className="font-semibold">semantic HTML</b> to improve
              webpage <b className="font-semibold">SEO</b>.
            </p>
          </Reveal>
          <Reveal>
            <p>
              For styling I prefer using{" "}
              <b className="font-semibold">Tailwind</b> or{" "}
              <b className="font-semibold">Sass</b>, which I use along with BEM
              methodology.
            </p>
          </Reveal>
          <Reveal>
            <p>
              I'm using React as my main framework. My preferred tool for state
              management is <b className="font-semibold">React Query</b>{" "}
              alongside <b className="font-semibold">Zustand</b>.
            </p>
          </Reveal>
          <Reveal>
            <p>
              I'm designing website layouts using{" "}
              <b className="font-semibold">Figma</b>.
            </p>
          </Reveal>
          <Reveal>
            <p>
              I use Git to track all changes in my code that I store on my{" "}
              <ButtonLink href={"https://github.com/brozinsky"}>GitHub</ButtonLink> page.
            </p>
          </Reveal>
          <Reveal>
            <p>
              I focus on <b className="font-semibold">Responsive Web Design</b>{" "}
              with <b className="font-semibold">mobile first</b> approach to
              make sure my website works well on every device.
            </p>
          </Reveal>
          <Reveal>
            <p>
              Besides the work, I'm interested in music production, playing
              guitar and listening to basicially all genres of music.
            </p>
          </Reveal>
          <Reveal>
            <p>
              If you&apos;re interested in working together or have any
              questions, please don&apos;t hesitate to{" "}
              <ButtonLink onClick={handleScrollToBottom}>contact me</ButtonLink>
              !
            </p>
          </Reveal>
        </div>
        <div className="flex flex-col gap-4">
          <Technologies />
          <div className="grid h-full grid-cols-2 gap-4">
            <div className="flex items-center gap-3 p-4 border border-neutral-600 rounded-xl">
              <Link
                href="https://github.com/brozinsky"
                target="_blank"
                rel="nofollow"
                className="flex items-center justify-center gap-3 mx-auto transition text-neutral-400 hover:text-white"
              >
                <Reveal>
                  <AiFillGithub size="1.5rem" />
                </Reveal>
                <Reveal>
                  <span>Github</span>
                </Reveal>
              </Link>
            </div>
            <div className="flex items-center gap-3 p-4 border border-neutral-600 rounded-xl">
              <Link
                href="https://www.linkedin.com/in/mateusz-brzeziński-b31494210/"
                target="_blank"
                rel="nofollow"
                className="flex items-center justify-center gap-3 mx-auto transition text-neutral-400 hover:text-white"
              >
                <Reveal>
                  <AiFillLinkedin size="1.5rem" />
                </Reveal>
                <Reveal>
                  <span>Linkedin</span>
                </Reveal>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
