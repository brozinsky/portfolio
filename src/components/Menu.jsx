import React, { useState } from 'react';
import { textFromTop } from '../animations/animation';
import { motion } from 'framer-motion';
import logo from '../images/logo.png';

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const logoText = 'codeTree';

  const burgerHandler = () => {
    setIsOpen((current) => !current);
  };

  return (
    <nav className={`navbar ${isOpen ? 'tabs-open' : ''}`}>
      <a href="#" className="logo-wrap">
        <div className="logo">
          <img src={logo} alt="logo" width="33" height="33" />
        </div>
        <h3 className="logo-text">{logoText}</h3>
      </a>
      <div className="burger" onClick={burgerHandler}>
        {/* {menuIcon} */}
      </div>
      <motion.ul
        variants={textFromTop}
        initial="hidden"
        animate="show"
        className={`tabs ${isOpen ? 'tabs-open' : ''}`}
      >
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
        <li className="nav-link">
          <a onClick={burgerHandler} href="#contact">
            Contact
          </a>
        </li>
      </motion.ul>
    </nav>
  );
};

export default Menu;
