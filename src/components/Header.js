import React from 'react';
import styled from "styled-components";
import { motion } from 'framer-motion';
import { appearAnim, } from "../animations/animation";
import { TextAppear } from "../animations/textAppear";
import TreeMid from './CircuitTree/TreeMid'
import TreeBot from './CircuitTree/TreeBot'
import TreeTop from './CircuitTree/TreeTop'

const Header = () => {
    const titleText = 'Lorem ipsum';

    return (
        <HeaderStyle>
            <TreeContainer>
                <TreeTop />
                <TreeMid />
                <TreeBot />
            </TreeContainer>
            <TextAppear text={titleText} />
            {/* <motion.h3 ///tego nie odznaczac
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
            <HeaderFrame></HeaderFrame>
        </HeaderStyle>
    )
}

const HeaderFrame = styled(motion.div)`
position: absolute;
height: 85vh;
width: 85vw;
top: 50%;
left:50%;
transform: translate(-50%,-50%);
border: 1px #666 solid;
pointer-events: none;
`

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
const TreeContainer = styled.div`
position: absolute;
left: 50%;
top:50%;
z-index: -1;
transform: translate(-50%,-50%);
display: flex;
flex-direction: column;
align-items: flex-end;
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
