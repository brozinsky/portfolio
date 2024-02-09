import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProjectDetails from "./ProjectDetails";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProjectCardTag from "./ProjectCardTag";
// import Tooltip from '@material-ui/core/Tooltip';

gsap.registerPlugin(ScrollTrigger);

const githubIcon = <FontAwesomeIcon icon={faGithub} />;
const webIcon = <FontAwesomeIcon icon={faGlobe} />;

const ProjectCard = ({
  title,
  tag,
  technologies,
  info,
  type,
  img,
  githubUrl,
  webUrl,
}) => {
  const [details, setDetails] = useState({
    title: null,
    tag: [],
    technologies: [],
    info: "",
    type: "",
    img: "",
    githubUrl: "",
    webUrl: "",
  });

  const handleImageClick = () => {
    setDetails({
      title: title,
      tag: tag,
      technologies: technologies,
      info: info,
      type: type,
      img: img,
      githubUrl: githubUrl,
      webUrl: webUrl,
    });
  };

  const handleCloseClick = () => {
    setDetails({
      title: null,
      tag: [],
      technologies: [],
      info: "",
      type: "",
      img: "",
      githubUrl: "",
      webUrl: "",
    });
  };

  // useEffect(() => {

  //     const projects = document.querySelectorAll(".project");
  //     const overlays = document.querySelectorAll(".overlay");

  //     projects.forEach(project => {
  //         console.log(project)
  //         gsap.fromTo(project.children, { y: '+=10', opacity: 0 },
  //             {
  //                 y: 0, opacity: 1, stagger: 0.2, duration: 0.8,
  //                 scrollTrigger: {
  //                     trigger: project,
  //                     start: 'top 80%',
  //                     ease: 'power1. out'
  //                 }
  //             })
  //     })

  //     overlays.forEach(project => {
  //         console.log(project)
  //         gsap.fromTo(project.children, { y: '+=10', opacity: 0, delay: 1 },
  //             {
  //                 y: 0, opacity: 1, stagger: 0.2, duration: 1,
  //                 scrollTrigger: {
  //                     trigger: project,
  //                     start: 'top 80%',
  //                     ease: 'power1. out',
  //                 }
  //             })
  //     })
  // }, [])

  return (
    <>
      {details.title ? (
        <>
          <ProjectDetails
            title={details.title}
            tag={details.tag}
            img={details.img}
            technologies={details.technologies}
            info={details.info}
            type={details.type}
            githubUrl={details.githubUrl}
            webUrl={details.webUrl}
          />
          <Close onClick={handleCloseClick}></Close>
        </>
      ) : null}
      <div className="project w-full">
        <TagWrapper>
          {tag.map((tag, i) => (
            <ProjectCardTag key={i} tag={tag} />
          ))}
        </TagWrapper>
        <Card>
          <WireFrame className="wire">
            <CardImg
              onClick={handleImageClick}
              src={img}
              width={482}
              height={352}
            />
          </WireFrame>
          <div className="overlay">
            <Overlay>
              <CardTitle>{title}</CardTitle>
              <LinksWrapper>
                {/* <Tooltip title='Code' placement="bottom" arrow> */}
                <Link href={githubUrl} target="_blank" aria-label={`${title} - github page`}>
                  {githubIcon}
                </Link>
                {/* </Tooltip> */}
                {/* <Tooltip title='Live' placement="bottom" arrow> */}
                <Link href={webUrl} target="_blank" aria-label={`${title} - website`}>
                  {webIcon}
                </Link>
                {/* </Tooltip> */}
              </LinksWrapper>
              <CardType>{type}</CardType>
            </Overlay>
          </div>
        </Card>
      </div>
    </>
  );
};

const Card = styled.div`
  width: calc(100% - 45px);
  height: 24vw;
  position: relative;
  border-radius: 10px;
  border: 1px solid #666;
  overflow: hidden;
  aspect-ratio: 460 / 445;

  @media (max-width: 1535px) {
    width: calc(100% - 45px);
    height: 35.5vw;
  }

  @media (max-width: 1023px) {
    margin-top: 0;
    width: 100%;
    max-width: 560px;
    height: 77vw;
    max-height: 519px;
  }
  @media (max-width: 768px) {
    margin-top: 4rem;
    height: 82vw;
  }
`;

const WireFrame = styled.div`
  height: 50px;
  &::after,
  &::before {
    content: "";
    position: absolute;
    z-index: -1;
    top: 0;
    right: 0;
    bottom: 100px;
    left: 0;
  }
  &::after {
    background: linear-gradient(
      to top right,
      transparent calc(50% - 1px),
      #666,
      transparent calc(50% + 1px)
    );
  }
  &::before {
    background: linear-gradient(
      to top left,
      transparent calc(50% - 1px),
      #666,
      transparent calc(50% + 1px)
    );
  }
`;

const CardImg = styled.img`
  width: 100%;
  cursor: pointer;
  opacity: 0.6;
  transition: 0.5s;

  &:hover {
    transform: scale(1.05);
    opacity: 1;
  }
`;

const Overlay = styled.div`
  background: #000;
  width: 100%;
  position: absolute;
  bottom: 0;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const CardTitle = styled.h3`
  text-transform: none;
  text-align: center;
  margin: 0;
  font-size: 1.5rem;
  margin-top: 0.7rem;
  font-weight: 300;
  color: #fff;
  font-family: "Montserrat", "Helvetica Neue", sans-serif;

  @media (max-width: 768px) {
    font-size: 1.2rem;
    margin-top: 0.3rem;
  }
`;

const LinksWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
`;

const Link = styled.a`
  color: #c4c4c4;
  margin: 0 2rem;
  font-size: 2rem;
  margin-top: 0.5rem;
  border: solid 1px transparent;
  padding: 0.1rem 1rem;
  position: relative;
  outline: none;

  @media (max-width: 768px) {
    font-size: 1.8rem;
    margin: 0.2rem 1rem;
  }

  &:hover {
    color: #fff !important;
    cursor: pointer;
  }
  &:visited {
    outline: none;
  }
`;

const TagWrapper = styled.div`
  position: absolute;
  top: -12px;
  right: -8px;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: 1535px) {
    right: -8px;
  }

  @media (max-width: 1023px) {
    right: -12px;
  }

  @media (max-width: 768px) {
    flex-direction: row;
    /* width: 90vw; */
    right: 50%;
    top: 5px;
    width: 100%;
    transform: translate(50%, 0);
  }

  .card-tag {
    transition: 0.15s;
  }
  .card-tag:hover {
    border: 1px solid transparent;
    color: var(--color-background);
  }
  .sass-tag:hover {
    box-shadow: 0px 0px 8px 2px var(--color-sass);
    background: var(--color-sass);
  }
  .html-tag:hover {
    box-shadow: 0px 0px 8px 2px var(--color-html);
    background: var(--color-html);
  }
  .css-tag:hover {
    box-shadow: 0px 0px 8px 2px var(--color-css);
    background: var(--color-css);
  }
  .nextjs-tag:hover {
    box-shadow: 0px 0px 8px 2px var(--color-next);
    background: var(--color-next);
  }
  .typescript-tag:hover {
    box-shadow: 0px 0px 8px 2px var(--color-typescript);
    background: var(--color-typescript);
  }
  .tailwind-tag:hover {
    box-shadow: 0px 0px 8px 2px var(--color-tailwind);
    background: var(--color-tailwind);
  }
  .react-tag:hover {
    box-shadow: 0px 0px 8px 2px var(--color-react);
    background: var(--color-react);
  }
  .js-tag:hover {
    box-shadow: 0px 0px 8px 2px var(--color-javascript);
    background: var(--color-javascript);
  }
  .api-tag:hover {
    box-shadow: 0px 0px 8px 2px #ffc400;
    background: #ffc400;
  }
  .redux-tag:hover {
    box-shadow: 0px 0px 8px 2px var(--color-redux);
    background: var(--color-redux);
  }
  .firebase-tag:hover {
    box-shadow: 0px 0px 8px 2px var(--color-firebase);
    background: var(--color-firebase);
  }
  .styled-components-tag:hover {
    box-shadow: 0px 0px 8px 2px var(--color-styled-components);
    background: var(--color-styled-components);
  }
  .reactquery-tag:hover {
    box-shadow: 0px 0px 8px 2px var(--color-reactquery);
    background: var(--color-reactquery);
  }
  .supabase-tag:hover {
    box-shadow: 0px 0px 8px 2px var(--color-supabase);
    background: var(--color-supabase);
  }
  .stripe-tag:hover {
    box-shadow: 0px 0px 8px 2px var(--color-stripe);
    background: var(--color-stripe);
  }
  .graphql-tag:hover {
    box-shadow: 0px 0px 8px 2px var(--color-graphql);
    background: var(--color-graphql);
  }
  .woo-commerce-tag:hover {
    box-shadow: 0px 0px 8px 2px var(--color-woo-commerce);
    background: var(--color-woo-commerce);
  }
  .heroku-tag:hover {
    box-shadow: 0px 0px 8px 2px var(--color-heroku);
    background: var(--color-heroku);
  }
  .card-tag {
    text-transform: uppercase;
    border: 1px solid #c4c4c4;
    border-radius: 2px;
    display: inline-block;
    width: 2.3rem;
    height: 2.3rem;
    text-align: center;
    margin: 0.3rem 0.2rem;
    font-weight: 300;
    font-size: 1.4rem;
    padding: 4px 4px;
    color: #c4c4c4;
  }
  .small {
    font-size: 0.8rem;
  }
`;

const CardType = styled.span`
  position: absolute;
  bottom: 10px;
  right: 15px;
  font-size: 0.9rem;
  color: #888;

  @media (max-width: 768px) {
    right: 10px;
    font-size: 0.6rem;
  }
`;

const Close = styled.div`
  height: 2.5rem;
  width: 2.5rem;
  transform: translate(1rem, 0);
  background: #666;
  position: fixed;
  top: 10vh;
  right: 15vw;
  cursor: pointer;
  line-height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  z-index: 9999;

  @media (max-width: 1200px) {
    top: 55px;
    right: 1rem;
  }

  &:before,
  &:after {
    position: absolute;
    left: 15px;
    content: " ";
    height: 25px;
    width: 2px;
    background-color: var(--color-background);
    margin-left: 0.3rem;
  }

  &:before {
    transform: rotate(45deg);
  }

  &:after {
    transform: rotate(-45deg);
  }

  &:hover {
    background: #c2c3d1;
  }
`;

export default ProjectCard;
