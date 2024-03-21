import { AiFillLinkedin, AiFillGithub, AiOutlineMail } from "react-icons/ai";
import Link from "next/link";
import { motion } from "framer-motion";
import clsx from "clsx";
import { links } from "@/components/utils/contstants/links";

type TProps = {
  direction?: "horizontal" | "vertical";
  isEmail?: boolean;
};

export const MyLinks = ({ direction = "horizontal", isEmail }: TProps) => {
  return (
    <div className={clsx(direction === "vertical" && "flex-col", "flex gap-6")}>
      <motion.span
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.0 }}
      >
        <Link
          href={links.linkedin}
          target="_blank"
          rel="nofollow"
          className="transition text-neutral-400 hover:text-white"
          aria-label="Linkedin"
        >
          <AiFillLinkedin size="2rem" />
        </Link>
      </motion.span>

      <motion.span
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Link
          href={links.github}
          target="_blank"
          rel="nofollow"
          className="transition text-neutral-400 hover:text-white"
          aria-label="Github"
        >
          <AiFillGithub size="2rem" />
        </Link>
      </motion.span>

      {isEmail && (
        <motion.span
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Link
            href={links.email}
            target="_blank"
            rel="nofollow"
            className="transition text-neutral-400 hover:text-white"
            aria-label="Github"
          >
            <AiOutlineMail size="2rem" />
          </Link>
        </motion.span>
      )}
    </div>
  );
};
