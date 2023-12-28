import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Marquee from "react-fast-marquee";
import { Tooltip as ReactTooltip } from "react-tooltip";
import {
  faHtml5,
  faCss3Alt,
  faSass,
  faJsSquare,
  faReact,
  faFigma,
} from "@fortawesome/free-brands-svg-icons";
import {
  Styledcomponents,
  Firebase,
  Redux,
  // TailwindCss,
  Graphql,
  Nextdotjs,
} from "@styled-icons/simple-icons";
import Text from "./ui/Text";
import Heading from "./ui/Heading";
import { ArrowRightShort } from "@styled-icons/bootstrap";

const githubIcon = <FontAwesomeIcon icon={faGithub} />;
const linkedinIcon = (
  <FontAwesomeIcon className="footer-social-icon" icon={faLinkedin} />
);
const htmlIcon = <FontAwesomeIcon className="html-icon" icon={faHtml5} />;
const cssIcon = <FontAwesomeIcon className="css-icon" icon={faCss3Alt} />;
const sassIcon = <FontAwesomeIcon className="sass-icon" icon={faSass} />;
const jsIcon = <FontAwesomeIcon className="js-icon" icon={faJsSquare} />;
const reactIcon = <FontAwesomeIcon className="react-icon" icon={faReact} />;
const figmaIcon = <FontAwesomeIcon className="figma-icon" icon={faFigma} />;
const StyledCompIocn = styled(Styledcomponents)`
  transform: scale(0.5);
`;
const ReduxIcon = styled(Redux)`
  transform: scale(0.3);
`;
const GraphqlIcon = styled(Graphql)`
  transform: scale(0.3);
`;
const FirebaseIcon = styled(Firebase)`
  transform: scale(0.3);
`;
const ArrowIcon = styled(ArrowRightShort)`
  margin-bottom: 5px;
  height: 30px;
  transition: 0.5s;
`;
const graphqlIcon = <GraphqlIcon className="graphql-icon" />;
const firebaseIcon = <FirebaseIcon className="firebase-icon" />;
const styledIcon = <StyledCompIocn className="styled-icon" />;
const reduxIcon = <ReduxIcon className="redux-icon" />;

const skills1 = [
  { name: "Html 5", icon: htmlIcon },
  { name: "Css3", icon: cssIcon },
  { name: "Sass", icon: sassIcon },
  { name: "Javascript ES6", icon: jsIcon },
  { name: "React", icon: reactIcon },
  { name: "Figma", icon: figmaIcon },
];

const skills2 = [
  { name: "Styled Components", icon: styledIcon },
  { name: "GraphQL", icon: graphqlIcon },
  { name: "Redux", icon: reduxIcon },
  { name: "Firebase", icon: firebaseIcon },
  { name: "Github", icon: githubIcon },
];

export default function About() {
  return (
    <section className="pb-8 pt-16" id="about">
      {/* <h2 className={"projects-title"}>_About</h2> */}
      <div className=" lg:max-w-none w-[86vw] mx-auto">
        <div className="xl:grid flex flex-col xl:grid-cols-3 xl:grid-rows-2 gap-4">
          <div className="flex flex-col gap-4 col-start-1 xl:col-end-3 row-span-2">
            <div className="flex flex-col lg:grid grid-cols-2 gap-4">
              <div className="p-8 rounded-xl border border-neutral-600">
                <h2 className={"mx-auto text-center projects-title m-0"}>
                  _About
                </h2>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <a
                  href="https://github.com/brozinsky"
                  className="h-full w-full"
                >
                  <div className="h-full p-8 rounded-xl border border-neutral-600 transition text-3xl gap-4 text-neutral-400 hover:text-white flex items-center justify-center">
                    {githubIcon}
                    <span className="text-xl">Github</span>
                  </div>
                </a>
                <a
                  href="https://www.linkedin.com/in/mateusz-brzeziński-b31494210/"
                  className="h-full w-full"
                >
                  <div className="h-full p-8 rounded-xl border border-neutral-600 transition gap-4 text-3xl text-neutral-400 hover:text-white flex items-center justify-center">
                    {linkedinIcon}
                    <span className="text-xl">Linkedin</span>
                  </div>
                </a>
              </div>
            </div>
            <div className="p-8 rounded-xl border border-neutral-600 col-start-1">
              <div className="space-y-4">
                <Text>
                  I'm a self taught Front-end Developer from Szczecin.
                  <br />I create fast, responsive, and reliable websites using
                  modern web development tools. I'm a civil engineering graduate
                  of West Pomeranian University of Technology that fell in love
                  in web development.
                </Text>
                <Text>
                  I write semantic HTML to improve webpage SEO.
                  <br />
                  For styling I prefer using TailwindCss or Sass, which I use
                  along with BEM methodology.
                </Text>
                <Text>
                  I'm using React as my main framework. My preffered tool for
                  state management is React Query or Zustand.
                </Text>
                <Text>
                  I'm designing website layouts using Figma and sometimes
                  Photoshop for images optimalization.
                  <br />I use Git to track all changes in my code that I store
                  on my GitHub page.
                </Text>
                <Text>
                  I always focus on Responsive Web Design with mobile first
                  approach to make sure my website works well on every device.
                </Text>
                <Text>
                  Besides the work, I'm interested in music production, playing
                  guitar and listening to basicially all genres of music.
                </Text>
              </div>
              {/* <PhotoContainer className='about-photo'>
            <img className='about-photo-img' src={photo} alt="me" width="430" height="520" />
                    </PhotoContainer> */}
            </div>
          </div>
          <div className="p-8 rounded-xl border border-neutral-600 flex flex-col justify-center w-full xl:col-start-3 row-start-1 row-end-2">
            <Heading variant="h3" color="light" className="mb-4 text-center">
              Technologies I use:
            </Heading>
            <div className="marquee">
              <Marquee direction="left" speed={15} pauseOnHover>
                {skills1.map(({ name, icon }) => {
                  return (
                    <div
                      key={name}
                      data-tooltip-id={name}
                      className="hover:bg-neutral-800 transition hover:text-neutral-100 w-28 text-neutral-400 h-16 m-1.5 bg-neutral-900 text-3xl items-center justify-center flex"
                    >
                      {icon}
                      <ReactTooltip
                        className="text-sm"
                        style={{ fontSize: 14, height: "fit-content" }}
                        id={name}
                        variant="dark"
                        content={name}
                      />
                    </div>
                  );
                })}
              </Marquee>
            </div>
            <div className="marquee">
              <Marquee direction="right" speed={13} pauseOnHover>
                {skills2.map(({ name, icon }) => {
                  return (
                    <div
                      key={name}
                      data-tooltip-id={name}
                      className="w-28 text-neutral-400 h-16 m-1.5 bg-neutral-900 border-neutral-400 text-3xl items-center justify-center flex"
                    >
                      {icon}
                      <ReactTooltip
                        className="text-sm"
                        style={{ fontSize: 14, height: "fit-content" }}
                        id={name}
                        variant="dark"
                        content={name}
                      />
                    </div>
                  );
                })}
              </Marquee>
            </div>
          </div>
          <div className="p-8 rounded-xl border border-neutral-600 flex flex-col justify-center w-full xl:col-start-3 row-start-2 row-end-3">
            <Heading variant="h3" color="light" className="mb-4 text-center">
              Let's get in touch:
            </Heading>
            <HeaderButton
              href="mailto:mateusz0brzezinski@gmail.com"
              // ref={element => { buttonRef = element }}
            >
              Email <ArrowIcon />
            </HeaderButton>
          </div>
        </div>
      </div>
    </section>
  );
}

const HeaderButton = styled(motion.a)`
  margin: 1rem auto;
  width: 200px;
  height: 55px;
  line-height: 55px;
  border: 1px solid #fff;
  color: #fff;
  font-family: "Rajdhani", "Helvetica Neue", sans-serif;
  font-size: 1.4rem;
  text-transform: uppercase;
  text-align: center;
  background: transparent;
  backdrop-filter: blur(18px);
  &:hover {
    border: 1px solid #fff;
    background: #fff;
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
    color: #fff;
    text-decoration: none;
    &:hover {
      color: #111;
    }
  }
`;
