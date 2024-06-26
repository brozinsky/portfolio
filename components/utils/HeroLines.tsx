import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { motion } from "framer-motion";
import clsx from "clsx";
import { Reveal } from "./Reveal";
import { links } from "./contstants/links";
import useScrollDown from "@/hooks/useScrollDown";

const HeroLines = () => {
  const { isScrolled } = useScrollDown();

  return (
    <div className="hidden md:block">
      <div
        className={clsx(
          "transition duration-500 absolute z-20 flex flex-row items-center w-5/12 h-8 gap-4 bottom-8 left-8",
          isScrolled && "opacity-0"
        )}
      >
        <Link
          href={links.linkedin}
          target="_blank"
          rel="nofollow"
          className="w-[112px] group"
        >
          <Reveal delay={1.3}>
            <div className="flex flex-row items-center gap-2">
              <span className="transition text-neutral-400 group-hover:text-white">
                <AiFillLinkedin size="2rem" />
              </span>
              <span className="transition text-neutral-400 group-hover:text-white">
                Linkedin
              </span>
            </div>
          </Reveal>
        </Link>
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.0 }}
          className="w-full h-[1px] bg-neutral-500"
        ></motion.div>
      </div>
      {/* bottom right */}
      <div
        className={clsx(
          "transition duration-500 absolute z-20 flex flex-row items-center w-5/12 h-8 gap-4 bottom-8 right-8 ",
          isScrolled && "opacity-0"
        )}
      >
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.0 }}
          className="w-full h-[1px] bg-neutral-500"
        ></motion.div>
        <div className="w-[100px]">
          <Link
            href={links.github}
            target="_blank"
            rel="nofollow"
            className="w-[100px] group"
          >
            <Reveal delay={1.3}>
              <div className="flex flex-row items-center gap-2">
                <div className="transition text-neutral-400 group-hover:text-white">
                  <AiFillGithub size="2rem" />
                </div>
                <span className="transition text-neutral-400 group-hover:text-white">
                  Github
                </span>
              </div>
            </Reveal>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroLines;
