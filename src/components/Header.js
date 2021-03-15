import React from 'react';
import styled from "styled-components";
import { motion } from 'framer-motion';
import { appearAnim, } from "../animations/animation";
import { TextAppear } from "../animations/textAppear";

const Header = () => {
    const titleText = 'Lorem ipsum';

    return (
        <HeaderStyle>
            <TextAppear text={titleText} />
            {/* <motion.h3
            // variants={titleAnim}
            // initial="hidden"
            // animate="show"
            // className='header-title'
            >_Lorem ipsum</motion.h3> */}
            <motion.h2
                variants={appearAnim}
                initial="initial"
                animate="animate"
                className='header-subtitle'>Dolor sit amet</motion.h2>
            <HeaderButton
                variants={appearAnim}
                initial="initial"
                animate="animate"
            >Click</HeaderButton>
        </HeaderStyle>
    )
}

const HeaderStyle = styled(motion.header)`
    display: flex;
    flex-direction: column;
    justify-content: center;

.header-title{
    text-align: center;
    font-size: 5.5rem;
}

.header-subtitle{
    text-align: center;
    color: #fff;
    margin: 3rem;
    font-size: 3.5rem;
}
`
const HeaderButton = styled(motion.button)`
    margin: 0 auto;
    width: 200px;
    height: 55px;
    border: 1px solid #F13F3F;
    color: #F13F3F;
    font-family: 'Rajdhani', 'Helvetica Neue',
    sans-serif;
    font-size: 1.4rem;
    text-transform: uppercase;
    background: #111;
    backdrop-filter: blur( 18.0px );    
    &:hover{
    border: 1px solid #F13F3F;
    background: #F13F3F;
    color: #111;
    cursor: pointer;
    font-weight: 700;
    box-shadow: 0 8px 32px 0 rgba(135, 31, 31, 0.37);
    }
`

export default Header;
