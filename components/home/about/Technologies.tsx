import { AiFillTool } from "react-icons/ai";
import { Reveal } from "@/components/utils/Reveal";
import Marquee from "react-fast-marquee";
import TypescriptSVG from "@/components/svg/TypescriptSVG";
import TailwindSVG from "@/components/svg/TailwindSVG";
import ReactSVG from "@/components/svg/ReactSVG";
import NextSVG from "@/components/svg/NextSVG";
import SassSVG from "@/components/svg/SassSVG";
import HtmlSVG from "@/components/svg/HtmlSVG";
import CssSVG from "@/components/svg/CssSVG";
import StyledComponentsSVG from "@/components/svg/StyledComponentsSVG";
import FirebaseSVG from "@/components/svg/FirebaseSVG";
import StrapiSVG from "@/components/svg/StrapiSVG";
import GraphQlSVG from "@/components/svg/GraphQlSVG";
import { Tooltip as ReactTooltip } from "react-tooltip";

const technologies1 = [
  { id: 0, name: "React", icon: <ReactSVG /> },
  { id: 1, name: "Tailwind", icon: <TailwindSVG /> },
  { id: 2, name: "Next", icon: <NextSVG /> },
  { id: 3, name: "Typescript", icon: <TypescriptSVG /> },
  { id: 4, name: "Sass", icon: <SassSVG /> },
  { id: 5, name: "Styled Components", icon: <StyledComponentsSVG /> },
  { id: 6, name: "Css", icon: <CssSVG /> },
];

const technologies2 = [
  { id: 0, name: "React", icon: <ReactSVG /> },
  { id: 1, name: "Tailwind", icon: <StrapiSVG /> },
  { id: 2, name: "Next", icon: <NextSVG /> },
  { id: 3, name: "Typescript", icon: <TypescriptSVG /> },
  { id: 4, name: "Sass", icon: <GraphQlSVG /> },
  { id: 5, name: "Html", icon: <HtmlSVG /> },
  { id: 6, name: "Firebase", icon: <FirebaseSVG /> },
];

export const Technologies = () => {
  return (
    <div className="relative p-6 border border-neutral-600 rounded-xl h-fit">
      <div className={"flex flex-col relative justify-between"}>
        <Reveal>
          <p className="flex flex-row items-center justify-start gap-2 mb-6">
            <AiFillTool size="1.5rem" color="white" />
            <span>Tech stack</span>
          </p>
        </Reveal>
        <Reveal>
          <div className={"flex flex-wrap gap-3 mb-6"}>
            <span className="chip">JavaScript</span>
            <span className="chip">HTML</span>
            <span className="chip">CSS</span>
            <span className="chip">TypeScript</span>
            <span className="chip">Tailwind</span>
            <span className="chip">React</span>
            <span className="chip">Nextjs</span>
            <span className="chip">Zustand</span>
            <span className="chip">React Query</span>
            <span className="chip">React Native</span>
            <span className="chip">Sass</span>
            {/* <span className="chip">Firebase</span> */}
            <span className="chip">Strapi</span>
            <span className="chip">Styled Components</span>
            <span className="chip">Sanity</span>
          </div>
        </Reveal>
        <Marquee direction="left" speed={15} pauseOnHover>
          {technologies1.map(({ icon, name, id }) => {
            return (
              <div
                key={id}
                data-tooltip-id={name}
                className="hover:bg-neutral-800 transition hover:text-neutral-100 w-28 text-neutral-400 h-16 m-1.5 bg-neutral-900 text-3xl items-center justify-center flex"
              >
                {icon}
                {/* <ReactTooltip
                  className="text-sm"
                  style={{ fontSize: 14, height: "fit-content" }}
                  id={name}
                  variant="dark"
                  content={name}
                /> */}
              </div>
            );
          })}
        </Marquee>
        <Marquee direction="right" speed={13} pauseOnHover>
          {technologies2.map(({ icon, name, id }) => {
            return (
              <div
                key={id}
                data-tooltip-id={name}
                className="hover:bg-neutral-800 transition hover:text-neutral-100 w-28 text-neutral-400 h-16 m-1.5 bg-neutral-900 text-3xl items-center justify-center flex"
              >
                {icon}
              </div>
            );
          })}
        </Marquee>
      </div>
    </div>
  );
};
