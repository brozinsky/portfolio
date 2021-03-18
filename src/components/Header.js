import React from 'react';
import styled from "styled-components";
import { motion } from 'framer-motion';
import { appearAnim, blinkAnim, } from "../animations/animation";
import { TextAppear } from "../animations/textAppear";
import TreeMid from './CircuitTree/TreeMid'
import TreeBot from './CircuitTree/TreeBot'
import TreeTop from './CircuitTree/TreeTop'
import SqStripes from './svg/SqStripes';
import FolderStripe from './svg/FolderStripe';
import HexGrp1 from './svg/HexGrp1';
import HexGrp2 from './svg/HexGrp2';
import HexGrp3 from './svg/HexGrp3';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

const githubIcon = <FontAwesomeIcon className="footer-social-icon"
    icon={faGithub} />
const linkedinIcon = <FontAwesomeIcon className="footer-social-icon"
    icon={faLinkedin} />

const Header = () => {
    const titleText = 'Lorem ipsum';

    return (
        <HeaderStyle>
            <SqStripes />
            <FolderStripe />
            <HexGrp1 />
            <HexGrp2 />
            <HexGrp3 />
            <TreeContainer>
                <TreeTop />
                <TreeMid />
                <TreeBot />
            </TreeContainer>
            <TextAppear text={titleText} />
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
            <HeaderFrame>
                <Icon
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.6 }}
                    transition={{
                        delay: 2.2,
                        duration: 1.5,
                    }}
                    className='social-icon'
                    href="https://github.com/brozinsky">{githubIcon}</Icon>
                <Icon
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.6 }}
                    transition={{
                        delay: 2.2,
                        duration: 1.5,
                    }}
                    className='social-icon'
                    href="">{linkedinIcon}</Icon>
            </HeaderFrame>
            <ToBottom>
                <Triangle
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.3 }}
                    transition={{
                        delay: 0.6,
                        duration: 1,
                        repeat: Infinity,
                        repeatType: "reverse",
                    }}
                    style={{
                        transform: 'translate(0,16px)'
                    }} />
                <Triangle
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.5 }}
                    transition={{
                        delay: 1.2,
                        duration: 1,
                        repeat: Infinity,
                        repeatType: "reverse",
                    }}
                    style={{
                        transform: 'translate(0,8px)'
                    }} />
                <Triangle
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.8 }}
                    transition={{
                        delay: 1.8,
                        duration: 1,
                        repeat: Infinity,
                        repeatType: "reverse",
                    }}
                />
            </ToBottom>
        </HeaderStyle>
    )
}

const ToBottom = styled.div`
position: absolute;
bottom: 15px;
left: 50%;
transform: translate(-50%,0%);
cursor: pointer;
`

const Icon = styled(motion.a)`
    color: #111;
    font-size: 2.5rem;
    cursor: pointer;
    margin-right: 15px;
    margin-bottom: 6px;

    &:hover {
        color: #fff;
    }

`


const Triangle = styled(motion.div)`
width: 0;
height: 0;
border-style: solid;
border-width: 22px 14px 0 14px;
border-color: #fff transparent transparent transparent;
opacity: 70%;
`

const HeaderFrame = styled(motion.div)`
position: absolute;
height: 85vh;
width: 85vw;
top: 50%;
left:50%;
transform: translate(-50%,-50%);
border: 1px #666 solid;
display: flex;
flex-direction: row;
justify-content: flex-end;
align-items: flex-end;
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
