import React from "react";
import styled from "styled-components";
import projectIMG from "../images/project-featured.jpg";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Heading from "./ui/Heading";

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
    <section className="py-section" id="featured">
      <div className="container">
        <Heading variant="h2" color="primary" size="h2" className="m-0 mb-6">
          _Featured Project
        </Heading>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-32">
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
              <h2 className="text-[2.5rem] tracking-[1px] m-0 mb-4 text-white">
                Chords lab
              </h2>
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
              scales and chords. The project aims on creating all possible
              chords and scales based on the formulas for a given instrument.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

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
