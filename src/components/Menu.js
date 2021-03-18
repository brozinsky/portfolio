import React from 'react';
import styled from "styled-components";
import { textFromTop } from "../animations/animation.js";
import { motion } from 'framer-motion';
import logo from "../images/logo.png";

const Menu = () => {
    return (
        <NavBar>
            <Logo>
                <img
                    className="logo"
                    src={logo}
                    alt="logo" />
            </Logo>
            <motion.ul
                variants={textFromTop}
                initial="hidden"
                animate="show">
                <NavLink>
                    <a href="#">Home</a>
                </NavLink>
                <NavLink>
                    <a href="#projects">Projects</a>
                </NavLink>
                <NavLink>
                    <a href="#skills">Skills</a>
                </NavLink>
                <NavLink>
                    <a href="#about">About</a>
                </NavLink>
                <NavLink>
                    <a href="#contact">Contact</a>
                </NavLink>
            </motion.ul>
        </NavBar>
    )
}

const NavBar = styled.nav`
    position: fixed;
    width: 100vw;
    height: 55px;
    font-family: 'Rajdhani', 'Helvetica Neue',
    sans-serif;
    text-transform: uppercase;
    font-size: 1.5rem;
    display: flex;
    justify-content: space-between;
    z-index: 1;
    background: rgba(17, 17, 17, 0.8);
    margin-top: 0;
    align-items: center;
    box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
    backdrop-filter: blur( 18.0px );
    -webkit-backdrop-filter: blur( 18.0px );

a{
    color: inherit;
    text-decoration: none;
&:hover{
    color: #fff;
}
}

& ul{
    margin-right: 3rem;
}
`
const NavLink = styled.li`
   list-style: none;
    display: inline;
    margin-right: 3rem;
    border-bottom: 2px solid rgba(17, 17, 17, 0.1);
    padding-bottom: 8px;
&:hover{
    color: #F13F3F;
    cursor: pointer;
    border-bottom: 4px solid #F13F3F;
}
`

const Logo = styled.div`
    margin-left: 3rem;
    scale: 0.6;
`

export default Menu;
