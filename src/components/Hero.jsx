import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { TextAppear } from "../animations/textAppear";
import TreeMid from "@/components/CircuitTree/TreeMid";
import TreeBot from "@/components/CircuitTree/TreeBot";
import TreeTop from "@/components/CircuitTree/TreeTop";
import SqStripes from "@/components/svg/SqStripes";
import FolderStripe from "@/components/svg/FolderStripe";
import HexGrp1 from "@/components/svg/HexGrp1";
import HexGrp2 from "@/components/svg/HexGrp2";
import HexGrp3 from "@/components/svg/HexGrp3";

import gsap from "gsap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

import { ArrowRightShort } from "@styled-icons/bootstrap";

const githubIcon = (
  <FontAwesomeIcon className="footer-social-icon" icon={faGithub} />
);
const linkedinIcon = (
  <FontAwesomeIcon className="footer-social-icon" icon={faLinkedin} />
);

const ArrowIcon = styled(ArrowRightShort)`
  margin-bottom: 5px;
  height: 30px;
  transition: 0.5s;
`;

const Hero = () => {
  const topTitleText = "I'm Mateusz Brzeziński";
  const titleText = "I can develop";
  const subTitleText = "Your own website";
  const buttonText = "See my work";

  let subTitleTopRef = useRef(null);
  let subTitleBotRef = useRef(null);
  let subTitleBotSwipeRef = useRef(null);
  let buttonRef = useRef(null);

  useEffect(() => {
    gsap.set([subTitleTopRef, subTitleBotRef, buttonRef], { autoAlpha: 0 });
    const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

    //added label to get rid of default delay between scenes
    tl.addLabel("reveal")
      .fromTo(
        subTitleTopRef,
        { x: "-10vw" },
        { duration: 1.4, x: "0", autoAlpha: 1, delay: 0.3 },
        "reveal"
      )
      .fromTo(
        subTitleBotSwipeRef,
        { x: "-100vw" },
        { duration: 2, x: "+100vw", autoAlpha: 1, delay: 1 },
        "reveal"
      )
      .to(subTitleBotRef, { duration: 0.2, autoAlpha: 1, delay: 1.6 }, "reveal")
      .fromTo(
        buttonRef,
        { y: "-=100" },
        { duration: 1.8, y: "0", autoAlpha: 1, delay: 2.4 },
        "reveal"
      );
  });

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
        ref={(element) => {
          subTitleTopRef = element;
        }}
      >
        {topTitleText}
      </TopSubtitle>
      <TextAppear text={titleText} />
      <SubtitleWrapper>
        <BotSubtitle
          ref={(element) => {
            subTitleBotRef = element;
          }}
        >
          {subTitleText}
        </BotSubtitle>
        <SubtitleAppear
          ref={(element) => {
            subTitleBotSwipeRef = element;
          }}
        />
      </SubtitleWrapper>
      <HeaderButton
        href="#featured"
        ref={(element) => {
          buttonRef = element;
        }}
      >
        See my work <ArrowIcon />
      </HeaderButton>
      <HeaderFrame>
        <IconContainer>
          <Icon
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{
              delay: 2.2,
              duration: 1.5,
            }}
            className="social-icon"
            href="https://github.com/brozinsky"
            target="_blank"
            aria-label="Github"
          >
            {githubIcon}
          </Icon>
          <Icon
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{
              delay: 2.2,
              duration: 1.5,
            }}
            className="social-icon"
            href="https://www.linkedin.com/in/mateusz-brzeziński-b31494210/"
            target="_blank"
            aria-label="Linkedin"
          >
            {linkedinIcon}
          </Icon>
        </IconContainer>
      </HeaderFrame>
      <ToBottom href="#featured">
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
            transform: "translate(0,16px)",
          }}
        />
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
            transform: "translate(0,8px)",
          }}
        />
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
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        transition={{
          delay: 0,
          duration: 0.6,
        }}
      />
      <LineBot
        initial={{ x: "100vh" }}
        animate={{ x: 0 }}
        transition={{
          delay: 0,
          duration: 0.6,
        }}
      />
      <LineLeft
        initial={{ y: "100vh" }}
        animate={{ y: 0 }}
        transition={{
          delay: 0.6,
          duration: 0.6,
        }}
      />
      <LineRight
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
        transition={{
          delay: 0.6,
          duration: 0.6,
        }}
      />
    </HeaderStyle>
  );
};

const ToBottom = styled.a`
  position: absolute;
  bottom: 15px;
  left: 50%;
  transform: translate(-50%, 0%);
  cursor: pointer;
`;

const IconContainer = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
  bottom: 8vh;
  right: 7vw;

  @media (max-width: 768px) {
    position: absolute;
    bottom: 1rem;
    right: 1rem;
    flex-direction: row-reverse;
  }
`;

const Icon = styled(motion.a)`
  color: #111;
  font-size: 2.5rem;
  cursor: pointer;
  margin-right: 15px;
  margin-bottom: 6px;

  &:hover {
    color: #fff;
  }
`;

const Triangle = styled(motion.div)`
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 22px 14px 0 14px;
  border-color: #fff transparent transparent transparent;
  opacity: 70%;
`;

const HeaderFrame = styled(motion.div)`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-end;
`;

const HeaderStyle = styled(motion.header)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;

  .header-title {
    text-align: center;
    font-size: 5.5rem;

    @media (max-width: 768px) {
      font-size: 2.5rem;
    }
  }
`;
const TreeContainer = styled.div`
  position: absolute;
  max-width: 90vw;
  right: 50%;
  top: 50%;
  transform: translate(50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  z-index: -1;

  @media (max-width: 1200px) {
    transform: translate(60%, -50%) scale(0.8);
  }

  @media (max-width: 768px) {
    display: none;
  }
`;
const HeaderButton = styled(motion.a)`
  margin: 1rem auto;
  width: 200px;
  height: 55px;
  line-height: 55px;
  border: 1px solid #f13f3f;
  color: #f13f3f;
  font-family: "Rajdhani", "Helvetica Neue", sans-serif;
  font-size: 1.4rem;
  text-transform: uppercase;
  text-align: center;
  background: #111;
  backdrop-filter: blur(18px);
  &:hover {
    border: 1px solid #f13f3f;
    background: #f13f3f;
    color: #111;
    cursor: pointer;
    font-weight: 700;
    box-shadow: 0 8px 32px 0 rgba(135, 31, 31, 0.37);
  }
  &:hover svg {
    transform: rotate(90deg);
  }
  &:link,
  &:visited,
  &:not(.default):link,
  &:not(.default):visited {
    color: #f13f3f;
    text-decoration: none;
    &:hover {
      color: #111;
    }
  }
  @media (max-width: 768px) {
      margin: 0 auto;
  }
`;

const TopSubtitle = styled(motion.h2)`
  text-align: center;
  color: #111;
  background: #999;
  padding: 0.5rem;
  width: 650px;
  font-size: 2.5rem;
  margin: 1rem auto 1.6rem auto;
  font-weight: bold;
  letter-spacing: 0.2rem;
  @media (max-width: 768px) {
    margin: -2rem auto 1.6rem auto;
    font-size: 1.25rem;
    width: 100%;
  }
`;

const SubtitleWrapper = styled.div`
  height: 3.5rem;
  width: 950px;
  overflow: hidden;
  position: relative;
  margin: 1.6rem auto 2rem auto;
  @media (max-width: 1200px) {
    width: 90vw;
    margin: 1.5rem auto 1.5rem auto;
    height: 2.25rem;
  }
`;

const BotSubtitle = styled(motion.h2)`
  text-align: center;
  color: #fff;
  font-size: 3.5rem;
  position: absolute;
  top: 0;
  left: 0;
  margin: 1rem 0 1rem 0;
  letter-spacing: 0.1rem;
  font-weight: 400;

  @media (max-width: 768px) {
    font-size: 1.75rem;
    margin: 0 auto;
  }
  @media (max-width: 930px) {
    width: 100%;
  }
`;

const SubtitleAppear = styled(motion.div)`
  height: 3.5rem;
  width: 950px;
  background: #fff;
  position: absolute;
  top: 0;
  right: 0;

  @media (max-width: 1200px) {
    width: 90vw;
  }
`;

// Lines

const LineTop = styled(motion.div)`
  width: 100vw;
  height: 1px;
  position: absolute;
  top: 10vh;
  left: 0;
  background: #666;
  z-index: 1;
  overflow-x: hidden;

  @media (max-width: 768px) {
    display: none;
  }
`;
const LineBot = styled(motion.div)`
  width: 100vw;
  height: 1px;
  position: absolute;
  bottom: 8vh;
  left: 0;
  background: #666;
  z-index: 1;

  @media (max-width: 768px) {
    display: none;
  }
`;
const LineLeft = styled(motion.div)`
  width: 1px;
  height: 100vh;
  position: absolute;
  top: 55px;
  left: 7vw;
  background: #666;
  z-index: 1;

  @media (max-width: 768px) {
    display: none;
  }
`;
const LineRight = styled(motion.div)`
  width: 1px;
  height: 100vh;
  position: absolute;
  top: 55px;
  right: 7vw;
  background: #666;
  z-index: 1;

  @media (max-width: 768px) {
    display: none;
  }
`;

export default Hero;
