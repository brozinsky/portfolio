import React, { useState } from "react";
import { textFromTop } from "../animations/animation";
import { motion } from "framer-motion";
import logo from "@/images/logo.svg";
import Logo from "@/components/svg/Logo";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const burgerHandler = () => {
    setIsOpen((current) => !current);
  };

  return (
    <nav className={`navbar ${isOpen ? "tabs-open" : ""}`}>
      <a href="#" className="logo-wrap">
        <div className="logo">
          {/* <img src={logo} alt="logo" width="33" height="33" /> */}
          <Logo />
        </div>
      </a>
      <div className="burger" onClick={burgerHandler}>
        {/* {menuIcon} */}
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
  );
};

export default Menu;
