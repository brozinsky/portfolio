import React from 'react';
import styled from "styled-components";
import { motion } from 'framer-motion';
import { appearAnim, } from "../animations/animation";
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

import { ArrowRightShort } from '@styled-icons/bootstrap'

const githubIcon = <FontAwesomeIcon className="footer-social-icon"
    icon={faGithub} />
const linkedinIcon = <FontAwesomeIcon className="footer-social-icon"
    icon={faLinkedin} />

const ArrowIcon = styled(ArrowRightShort)`
margin-bottom: 5px;
height: 30px;
transition: 0.5s;
`

const Header = () => {
    const topTitleText = "I'm Mateusz Brzeziński";
    const titleText = "I can develop";
    const subTitleText = "Your own website";
    const buttonText = "See my work";

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
            <TopSubtitle
                initial={{ opacity: 0, x: '10vw' }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                    delay: 0.2,
                    duration: 0.4,
                }}>
                {topTitleText}
            </TopSubtitle>
            <TextAppear text={titleText} />
            <SubtitleWrapper>
                <Subtitle
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        delay: 2.2,
                    }}>
                    {subTitleText}
                </Subtitle>
                <SubtitleAppear
                    initial={{ x: '-100%', opacity: 0 }}
                    animate={{ x: '100%', opacity: 1 }}
                    transition={{
                        delay: 1.8,
                        duration: 0.8,
                    }}
                />
            </SubtitleWrapper>
            <HeaderButton
                initial={{ y: '-100%', opacity: 0 }}
                animate={{
                    y: 0,
                    opacity: 1
                }}
                transition={{
                    delay: 2.4,
                    duration: 1.2,
                }}

            >{buttonText} <ArrowIcon></ArrowIcon> </HeaderButton>
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
            <LineTop
                initial={{ x: '-100vw' }}
                animate={{ x: 0 }}
                transition={{
                    delay: 0,
                    duration: 0.6,
                }} />
            <LineBot
                initial={{ x: '100vh' }}
                animate={{ x: 0 }}
                transition={{
                    delay: 0,
                    duration: 0.6,
                }}
            />
            <LineLeft
                initial={{ y: '100vh' }}
                animate={{ y: 0 }}
                transition={{
                    delay: 0.6,
                    duration: 0.6,
                }}
            />
            <LineRight
                initial={{ y: '-100vh' }}
                animate={{ y: 0 }}
                transition={{
                    delay: 0.6,
                    duration: 0.6,
                }}
            />
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
    margin: 1rem auto;
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
    &:hover svg{
    transform: rotate(90deg)
    }
`

const TopSubtitle = styled(motion.h2)`
    text-align: center;
    color: #111;
    background: #999;
    padding: 0.5rem;
    width: 650px;
    /* margin: 3rem; */
    font-size: 2.5rem;
    margin: 1rem auto 1.6rem auto;
    font-weight: bold;
    letter-spacing: 0.2rem;
`

const SubtitleWrapper = styled.div`
height: 3.5rem;
width: 950px;
margin: 0 auto;
overflow:hidden;
position: relative;
margin: 1.6rem auto 2rem auto;
`

const Subtitle = styled(motion.h2)`
    text-align: center;
    color: #fff;
    /* margin: 3rem; */
    font-size: 3.5rem;
    position: absolute;
    top: 0;
    left: 0;
    margin: 1rem 0 1rem 0;
    letter-spacing: 0.1rem;
    font-weight: 400;

`

const SubtitleAppear = styled(motion.div)`
height: 3.5rem;
width: 950px;
background: #fff;
position: absolute;
top: 0;
right:0;
`

// Lines

const LineTop = styled(motion.div)`
    width: 100vw;
    height: 1px;
    position: absolute;
    top: 10vh;
    left: 0;
    background: #666;
    z-index:3;
`
const LineBot = styled(motion.div)`
    width: 100vw;
    height: 1px;
    position: absolute;
    bottom: 8vh;
    left: 0;
    background: #666;
    z-index:3;
`
const LineLeft = styled(motion.div)`
    width: 1px;
    height: 100vh;
    position: absolute;
    top: 55px;
    left: 7vw;
    background: #666;
    z-index:3;
`
const LineRight = styled(motion.div)`
    width: 1px;
    height: 100vh;
    position: absolute;
    top: 55px;
    right: 7vw;
    background: #666;
    z-index:3;
`


export default Header;
