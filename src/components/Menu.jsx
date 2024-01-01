import React, { useState } from "react";
import { textFromTop } from "../animations/animation";
import { motion } from "framer-motion";
import Logo from "@/components/svg/Logo";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const burgerHandler = () => {
    setIsOpen((current) => !current);
  };

  return (
    <div className="navbar">
      <div className="container">
        <nav className="flex justify-between w-full items-center max-h-[56px]">
          <a href="/">
            <div className="flex items-center">
              <Logo />
            </div>
          </a>
          <div className="burger" onClick={burgerHandler}>
            {/* {menuIcon} */}
            <svg
              class="MuiSvgIcon-root"
              focusable="false"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path fill="#969696" d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
            </svg>
          </div>
          <motion.ul
            variants={textFromTop}
            initial="hidden"
            animate="show"
            className={`tabs ${isOpen ? "tabs-open" : ""}`}
          >
            <li className="nav-link">
              <a onClick={burgerHandler} href="#featured">
                Featured
              </a>
            </li>
            <li className="nav-link">
              <a onClick={burgerHandler} href="#projects">
                Projects
              </a>
            </li>
            <li className="nav-link">
              <a onClick={burgerHandler} href="#about">
                About
              </a>
            </li>
            {/* <li className="nav-link">
              <a onClick={burgerHandler} href="#contact">
                Contact
              </a>
            </li> */}
          </motion.ul>
        </nav>
      </div>
    </div>
  );
};

export default Menu;
