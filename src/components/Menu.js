import React, { useState } from 'react';
import styled from "styled-components";
import { textFromTop } from "../animations/animation.js";
import { motion } from 'framer-motion';
import logo from "../images/logo.png";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const menuIcon = <FontAwesomeIcon className="footer-social-icon"
    icon={faBars} />

const Menu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const logoText = 'codeTree';

    const burgerHandler = () => {
        setIsOpen(current => !current)
    }

    return (
        <NavBar>
            <LogoWrap
                href="#"
            >
                <Logo>
                    <img
                        className="logo"
                        src={logo}
                        alt="logo" />
                </Logo>
                <LogoText>{logoText}</LogoText>
            </LogoWrap>
            <Burger onClick={burgerHandler} >
                {menuIcon}
            </Burger>
            <motion.ul
                variants={textFromTop}
                initial="hidden"
                animate="show"
                className={isOpen ? 'tabs tabs-open' : 'tabs'}
            >
                <NavLink>
                    <a onClick={burgerHandler} href="#projects">Projects</a>
                </NavLink>
                <NavLink>
                    <a onClick={burgerHandler} href="#about">About</a>
                </NavLink>
                <NavLink>
                    <a onClick={burgerHandler} href="#contact">Contact</a>
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
    z-index: 2;
    background: rgba(17, 17, 17, 0.8);
    margin-top: 0;
    align-items: center;
    box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
    backdrop-filter: blur( 18.0px );
    -webkit-backdrop-filter: blur( 18.0px );

    @media (max-width: 768px) {
        background: #000;
    }

    .tabs{
    @media (max-width: 768px) {
    background: #000;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: calc(100vh - 55px);
    width: 100vw;
    position: fixed;
    top:55px;
    left:0;
    transform: translateX(-100vw);
    transition: 0.2s;
    z-index: 0;
    }
    }
    .tabs-open{
    @media (max-width: 768px) {
    transform: translateX(0);
    }
    }


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
    @media (max-width: 768px) {
        margin-right: 0;
    }
&:hover{
    color: #F13F3F;
    cursor: pointer;
    border-bottom: 4px solid #F13F3F;
}

@media (max-width: 768px) {
    font-size: 3rem;
}
`

const Burger = styled.div`
width: 2rem;
font-size: 2rem;
margin-right: 2rem;
@media (min-width: 768px) {
display: none;
}
`

const Logo = styled.div`
    margin-left: 2rem;
    display: flex;
    align-items: center;
    & img{
        height: 33px;
        margin-right: 0.4rem;
    }
`
const LogoText = styled.h3`
font-size: 1.8rem;
text-transform: none;
color: #fff;
`
const LogoWrap = styled.a`
display: flex;
flex-direction: row;
height: 100%;
align-items: center;
`



export default Menu;
