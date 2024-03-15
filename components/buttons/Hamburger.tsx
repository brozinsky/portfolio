import React, { useState } from "react";
import { motion } from "framer-motion";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
type Props = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

export default function Hamburger({ isOpen, setIsOpen }: Props) {
  return (
    <div className="flex md:hidden">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.0 }}
        aria-label="Toggle menu"
      >
        {!isOpen ? (
          <AiOutlineMenu size="2rem" />
        ) : (
          <AiOutlineClose size="2rem" />
        )}
      </motion.button>
    </div>
  );
}
