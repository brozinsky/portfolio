import React from "react";
import styled from "styled-components";
import projectIMG from "../images/project-featured.jpg";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const githubIcon = <FontAwesomeIcon icon={faGithub} />;
const webIcon = <FontAwesomeIcon icon={faGlobe} />;

const technologies = [
  "Main technology - React with Typescript",
  "Styled with Tailwindcss and Sass",
  "State management with React Query and Zustand",
  "UI primitives by HeadlessUI and Radix",
  "Designed using Figma",
];

export default function Featured() {
  return (
    <section className="pb-8 pt-16" id="featured">
      <h2 className={"projects-title"}>_Featured Project</h2>
      <div className="max-w-[500px] lg:max-w-none w-[86vw] mx-auto grid lg:grid-cols-2 pt-6 gap-12 lg:gap-16 xl:gap-32">
        <div className="flex-col flex gap-8">
          <a
            href="https://chords-lab.vercel.app/"
            target="_blank"
            className="rounded-xl overflow-hidden border border-neutral-500 cursor-pointer"
          >
            <img
              className="hover:scale-110 transition duration-500 opacity-60 hover:opacity-100"
              src={projectIMG}
              width="900"
              height="505"
              alt="Chords Lab"
            />
          </a>
          <div className="gap-10 mx-auto flex-row flex">
            <a
              className="text-3xl flex flex-row gap-4 items-center hover:text-white"
              href={"https://github.com/brozinsky/chords-lab"}
              target="_blank"
            >
              {githubIcon}
              <span className="text-2xl hover:text-white">Code</span>
            </a>
            <a
              className="text-3xl flex flex-row gap-4 items-center hover:text-white"
              href={"https://chords-lab.vercel.app/"}
              target="_blank"
            >
              {webIcon}
              <span className="text-2xl hover:text-white">Live</span>
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col items-start">
            <h2 className="text-[2.5rem] tracking-[1px] m-0 mb-4 text-white">Chords lab</h2>
            {/* <div className="h-[2px] w-24 bg-white mb-4"></div> */}
            <div>
              <p
                className="text-2xl uppercase font-light"
                style={{ fontFamily: "Rajdhani" }}
              >
                Features/used technologies:
              </p>
            </div>
          </div>
          <ul className="pl-4">
            {technologies.map((item, index) => (
              <ListItem key={index}>{item}</ListItem>
            ))}
          </ul>
          <p className="font-thin text-lg text-white">
            Chords Lab is a web application that allows users explore musical
            scales and chords. The project aims on creating all possible chords
            and scales based on the formulas for a given instrument.
          </p>
        </div>
      </div>
      <div>
        <div className="info-header">
          <div className="info-wrap">
            <SubtitleWrapper>
              {/* <SubtitleAppear
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: "100%", opacity: 1 }}
                transition={{
                  delay: 0.3,
                  duration: 0.8,
                }}
              /> */}
            </SubtitleWrapper>
          </div>
        </div>
      </div>
    </section>
  );
}

const SubtitleWrapper = styled.div`
  height: 30px;
  width: 350px;
  margin: 1rem 0 0.5rem 0;
  overflow: hidden;
  position: relative;
  @media (max-width: 768px) {
    margin: 0.2rem 0 0.5rem 0;
  }
`;

const Subtitle = styled.h3`
  font-size: 1.5rem;
  text-align: center;
  position: absolute;
  top: 0;
  left: 0;
  color: #fff;
  z-index: 9000;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;
const SubtitleAppear = styled.div`
  height: 30px;
  width: 350px;
  background: #fff;
  position: absolute;
  top: 0;
  right: 0;
`;

const ListItem = styled.li`
  font-size: 1.15rem;
  margin: 0.4rem 0;
  font-weight: 300;
  color: #bbb;
  list-style-type: square;

  @media (max-width: 768px) {
    font-size: 1rem;
    list-style-position: inside;
  }
`;

const InfoBottom = styled.div`
  height: 30vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background: none;
  @media (max-width: 768px) {
    margin-top: 1rem;
    height: auto;
  }
`;

const LinksWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    max-height: 100%;
    margin-top: 1rem;
  }
`;

const Link = styled.a`
  color: #c4c4c4;
  margin: 0 2rem;
  font-size: 2rem;
  margin-top: 0.5rem;
  border: solid 1px #777;
  padding: 0.4rem 1rem;
  position: relative;
  outline: none;
  text-decoration: none;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    padding: 0.3rem 0.8rem;
    margin-bottom: 1rem;
  }

  & span {
    font-size: 1.5rem;
    line-height: 1.5rem;
  }

  &:hover {
    color: #fff !important;
    cursor: pointer;
  }
  &:visited {
    outline: none;
    text-decoration: none;
  }
`;
const Info = styled.div`
  width: 80%;
  font-size: 1.25rem;
  text-align: justify;
  margin: 0 auto;
  font-weight: 200;
  line-height: 1.6rem;
  @media (max-width: 768px) {
    width: 50vw;
    min-width: 384px;
  }

  @media (max-width: 420px) {
    font-size: 1rem;
    min-width: 80vw;
  }
`;
const Img = styled.img`
  margin: 2rem;
  transition: 1s;
  @media (max-width: 768px) {
    display: none;
  }
`;

// Lines

const LineTop = styled.div`
  width: 100vw;
  height: 1px;
  position: absolute;
  top: 10vh;
  left: 0;
  background: #666;
  z-index: 3;

  @media (max-width: 1200px) {
    top: 2vh;
  }
`;
const LineBot = styled.div`
  width: 100vw;
  height: 1px;
  position: absolute;
  bottom: 10vh;
  left: 0;
  background: #666;
  z-index: 3;

  @media (max-width: 1200px) {
    display: none;
  }
`;
const LineLeft = styled.div`
  width: 1px;
  height: 100vh;
  position: absolute;
  bottom: 0;
  left: 15vw;
  background: #666;
  z-index: 3;
  @media (max-width: 1200px) {
    display: none;
  }
`;
const LineRight = styled.div`
  width: 1px;
  height: 100vh;
  position: absolute;
  bottom: 0;
  right: 15vw;
  background: #666;
  z-index: 3;
  @media (max-width: 1200px) {
    display: none;
  }
`;
