import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import Link from "next/link";
import { motion } from "framer-motion";
import clsx from "clsx";

type TProps = {
  direction?: "horizontal" | "vertical";
};

export const MyLinks = ({ direction = "horizontal" }: TProps) => {
  return (
    <div className={clsx(direction === "vertical" && "flex-col", "flex gap-6")}>
      <motion.span
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.0 }}
      >
        <Link
          href="https://www.linkedin.com/in/mateusz-brzeziński-b31494210/"
          target="_blank"
          rel="nofollow"
          className="transition text-neutral-400 hover:text-white"
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
          href="https://github.com/brozinsky"
          target="_blank"
          rel="nofollow"
          className="transition text-neutral-400 hover:text-white"
        >
          <AiFillGithub size="2rem" />
        </Link>
      </motion.span>
    </div>
  );
};