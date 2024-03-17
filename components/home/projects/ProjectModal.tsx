import { useEffect } from "react";
import ReactDOM from "react-dom";
import { motion } from "framer-motion";
import Link from "next/link";
import { AiFillGithub, AiOutlineExport } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import Image from "next/image";
interface Props {
  isOpen: boolean;
  setIsOpen: Function;
  title: string;
  imgSrc: string;
  code: string;
  projectLink: string;
  tech: string[];
  modalContent: JSX.Element;
}

export const ProjectModal = ({
  modalContent,
  projectLink,
  setIsOpen,
  imgSrc,
  isOpen,
  title,
  code,
  tech,
}: Props) => {
  useEffect(() => {
    const body = document.querySelector("body");

    if (isOpen) {
      body!.style.overflowY = "hidden";
    } else {
      body!.style.overflowY = "scroll";
    }
  }, [isOpen]);

  const content = (
    <div className={"modal"} onClick={() => setIsOpen(false)}>
      <button className={"modal__close"}>
        <MdClose />
      </button>

      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        onClick={(e) => e.stopPropagation()}
        className={"modal__card"}
      >
        <div style={{ background: "var(--background)" }}>
          <Image
            priority
            src={imgSrc}
            alt={title}
            width={768}
            height={410}
            className={"w-full mx-auto"}
          />
        </div>
        <div className={"p-8"}>
          <h4 className="mb-2 text-lg text-center">{title}</h4>
          <div className={"modal__tech mb-6"}>{tech.join(" - ")}</div>

          <div className={"modal__content"}>{modalContent}</div>

          <div className={"mt-6"}>
            <div className={"flex justify-center gap-12"}>
              <Link
                target="_blank"
                rel="nofollow"
                href={code}
                className="flex items-center gap-4 transition text-neutral-400 hover:text-white"
              >
                <AiFillGithub size="2.25rem" /> Source code
              </Link>
              <Link
                target="_blank"
                rel="nofollow"
                href={projectLink}
                className="flex items-center gap-4 transition text-neutral-400 hover:text-white"
              >
                <AiOutlineExport size="2.25rem" /> Live project
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );

  if (!isOpen) return <></>;

  // @ts-ignore
  return ReactDOM.createPortal(content, document.getElementById("root"));
};
