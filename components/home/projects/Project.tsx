import Image from "next/image";
import { Reveal } from "@/components/utils/Reveal";
import { useAnimation, useInView, motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  AiFillGithub,
  AiOutlineArrowRight,
  AiOutlineExport,
} from "react-icons/ai";
import { ProjectModal } from "./ProjectModal";
import useLockScroll from "@/hooks/useLockScroll";
import { trackProjectClick } from "@/components/utils/analytics";
interface Props {
  modalContent: JSX.Element;
  description: string;
  projectLink: string;
  imgSrc: string;
  imgModalsrc: string;
  tech: string[];
  title: string;
  code: string;
}

export const Project = ({
  modalContent,
  projectLink,
  description,
  imgSrc,
  imgModalsrc,
  title,
  code,
  tech,
}: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useLockScroll(isOpen);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
      const img: HTMLImageElement = new window.Image();
      img.src = imgSrc;
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  return (
    <>
      <motion.div
        ref={ref}
        className="flex flex-col justify-between"
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.75 }}
      >
        <div>
          <div
            onClick={() => setIsOpen(true)}
            className={"project__image-wrap"}
          >
            <Image
              className={"project__image"}
              loading="lazy"
              src={imgSrc}
              alt={title}
              width={640}
              height={342}
            />
          </div>
          <div className={"mt-6"}>
            <Reveal width="100%">
              <div className={"flex items-center gap-4 mb-4"}>
                <h3
                  className="cursor-pointer project__title"
                  onClick={() => setIsOpen(true)}
                >
                  {title}
                </h3>
                <div className={"project__line"} />
                <Link
                  href={code}
                  target="_blank"
                  rel="nofollow"
                  className="transition text-neutral-400 hover:text-white"
                  aria-label="Source code on github"
                  onClick={() => trackProjectClick(title, "source_code")}
                >
                  <AiFillGithub size="2.25rem" />
                </Link>
                <Link
                  href={projectLink}
                  target="_blank"
                  rel="nofollow"
                  className="transition text-neutral-400 hover:text-white"
                  aria-label="Live project"
                  onClick={() => trackProjectClick(title, "live_project")}
                >
                  <AiOutlineExport size="2.25rem" />
                </Link>
              </div>
            </Reveal>
            <Reveal>
              <div className={"project__tech mb-2 max-w-full"}>
                {tech.join(" - ")}
              </div>
            </Reveal>
            <Reveal>
              <p className="mb-4 font-light">{description}</p>
            </Reveal>
          </div>
        </div>

        <Reveal>
          <button
            onClick={() => setIsOpen(true)}
            className="relative inline-flex items-center group hover:underline"
          >
            <span>Learn more</span>
            <div className="relative w-5 h-5 ml-1 overflow-hidden">
              <div className="absolute transition-all duration-200 group-hover:-translate-y-5 group-hover:translate-x-4">
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                >
                  <path
                    d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
                    fill="currentColor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 -translate-x-4"
                >
                  <path
                    d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
                    fill="currentColor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
            </div>
          </button>
        </Reveal>
      </motion.div>
      <ProjectModal
        modalContent={modalContent}
        projectLink={projectLink}
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        imgSrc={imgModalsrc}
        imgThumb={imgSrc}
        title={title}
        code={code}
        tech={tech}
      />
    </>
  );
};
