"use client";
import React, { useEffect, useRef } from "react";
import { cn } from "@/utils/cn";
import { motion, useInView, useAnimation } from "framer-motion";

const sentence = {
  initial: { opacity: 1 },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.15,
    },
  },
};

const letter = {
  initial: { display: "none", y: 50 },
  animate: {
    display: "inline",
    y: 0,
  },
};

const cursor = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
  },
};

type TProps = {
  color?: string;
  className?: string;
  text: string;
  variant?: "primary" | "secondary";
};

export const Typewriter = ({
  text,
  variant = "secondary",
  className = "text-[5rem]",
}: TProps) => {
  const controls = useAnimation();

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start("animate");
    }
  }, [isInView, controls]);

  return (
    <motion.span variants={sentence} initial="initial" animate="animate">
      {text.split("").map((char, index) => {
        return (
          <motion.span
            className={cn(
              className,
              "font-medium",
              variant === "secondary" && "heading-secondary",
              variant === "primary" && "heading-primary"
            )}
            key={char + "-" + index}
            variants={letter}
          >
            {char}
          </motion.span>
        );
      })}
      <motion.span
        className={cn(
          className,
          variant === "primary" && "heading-primary__indicator",
          variant === "secondary" && "heading-secondary__indicator",
          "text-primary-500",
          "font-medium"
        )}
        variants={cursor}
        initial="initial"
        animate="animate"
        transition={{
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        _
      </motion.span>
    </motion.span>
  );
};
