import React from 'react';
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faHtml5 } from '@fortawesome/free-brands-svg-icons';
import { faCss3Alt } from '@fortawesome/free-brands-svg-icons';
import { faSass } from '@fortawesome/free-brands-svg-icons';

import { faJsSquare } from '@fortawesome/free-brands-svg-icons';
import { faReact } from '@fortawesome/free-brands-svg-icons';

import { faFigma } from '@fortawesome/free-brands-svg-icons';

import { faGitAlt } from '@fortawesome/free-brands-svg-icons';

import { faMobileAlt } from "@fortawesome/free-solid-svg-icons";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import { faRedo } from "@fortawesome/free-solid-svg-icons";

const htmlIcon = <FontAwesomeIcon className="html-icon"
  icon={faHtml5} />
const cssIcon = <FontAwesomeIcon className="css-icon"
  icon={faCss3Alt} />
const sassIcon = <FontAwesomeIcon className="sass-icon"
  icon={faSass} />

const jsIcon = <FontAwesomeIcon className="js-icon"
  icon={faJsSquare} />
const reactIcon = <FontAwesomeIcon className="react-icon"
  icon={faReact} />

const figmaIcon = <FontAwesomeIcon className="figma-icon"
  icon={faFigma} />
const gitIcon = <FontAwesomeIcon className="git-icon"
  icon={faGitAlt} />

const mobileIcon = <FontAwesomeIcon className="mobile-icon"
  icon={faMobileAlt} />
const rwdIcon = <FontAwesomeIcon className="rwd-icon"
  icon={faLaptopCode} />
const dryIcon = <FontAwesomeIcon className="dry-icon"
  icon={faRedo} />



const About = () => {
  return (
    <AboutSection id="about">
      <Title>_About</Title>
      <Info>
        <SectionTitle>Hello, I'm Mateusz Brzeziński.</SectionTitle>
        <InfoText>
          I'm a self taught Front-end Developer and a Creative Web Designer from Szczecin.
          I create fast, responsive, and reliable websites using modern web development tools.
          I'm a civil engineering graduate of West Pomeranian University of Technology that fell in love in web development.
                    </InfoText>
        <SectionTitle>Technologies I use:</SectionTitle>
        <IconsWrap>
          <Icon>{htmlIcon} Html5</Icon>
          <Icon>{cssIcon} Css3</Icon>
          <Icon>{sassIcon} Sass</Icon>
          <Icon>BEM</Icon>
        </IconsWrap>
        <InfoText>
          I write semantic HTML to improve webpage SEO.
                For styling I prefer using Styled Components but I feel comfortable with SASS preprocessor, which I like to use along with BEM methodology. </InfoText>
        <IconsWrap>
          <Icon>{jsIcon} Javascript ES6</Icon>
          <Icon>{reactIcon} React</Icon>
          <Icon>Redux</Icon>
          <Icon>jQuery</Icon>
          <Icon>Typescript</Icon>
        </IconsWrap>
        <InfoText>
          I'm using React as my main framework.
                    I know all the necessary basics of Redux but I prefer to keep state with useState and context hooks. </InfoText>
        <IconsWrap>
          <Icon>{figmaIcon} Figma</Icon>
          <Icon> Photoshop</Icon>
          <Icon>{gitIcon} Git</Icon>
          <Icon>NPM</Icon>
          <InfoText>
            I'm designing website layouts using Figma and sometimes using Photoshop for images optimalization.
            I use Git to track all changes in my code that I store on my GitHub page.
                    </InfoText>
        </IconsWrap>
        <IconsWrap>
          <Icon>{mobileIcon} Mobile first</Icon>
          <Icon>{rwdIcon} RWD</Icon>
          <Icon>{dryIcon} DRY</Icon>
        </IconsWrap>
        <InfoText>
          I always focus on Responsive Web Design with mobile first approach to make sure my website works well on every device.
                </InfoText>
        <InfoText> Besides the work, I'm interested in music production, playing guitar and listening to basicially all genres of music.
                You can follow my Instagram or SoundCloud.</InfoText>
      </Info>
      <Photo></Photo>
    </AboutSection>
  )
}

const AboutSection = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;

    @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    flex-wrap: nowrap;
    }
`

const Title = styled.h2`
    @media (max-width: 1200px) {
    width: 90vw;
    text-align: center;
    }
`

const Info = styled.div`
    max-height: 100%;
    max-width: 1000px;
    border: 1px solid #444;
    border-radius: 20px;

    @media (max-width: 1200px) {
      width: 90vw;
    }
`
const SectionTitle = styled.h3`
    font-size: 2rem;
    margin: 1rem auto;
    text-align: center;
    font-weight: bold;
    color: #bbb;
`

const InfoText = styled.p`
    padding: 1rem 2rem;
    font-size: 1.2rem;
    font-weight: 100;
    text-align: justify;
    @media (max-width: 1200px) {
      text-align: center;
    }
`

const Photo = styled.div`
    height: 520px;
    width: 415px;
    border: 1px solid #444;
    border-radius:20px;
    position: relative;
    overflow: hidden;

    @media (max-width: 768px) {
    margin: 2rem auto;
    height: 300px;
    width: 239px;
    }

    @media (max-width: 1200px) {
    margin: 2rem auto;
    height: 520px;
    width: 415px;
    }

&::after, &::before {
    content: "";
    position: absolute;
    z-index: 0;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
}
&::after{
    background: linear-gradient(to top right,transparent calc(50% - 1px),
    #444,transparent calc(50% + 1px));
}
&::before {
    background: linear-gradient(to top left,transparent calc(50% - 1px),
    #444,transparent calc(50% + 1px));
}
`

const Icon = styled.h4`
font-size: 1.1rem;
text-transform: uppercase;
font-weight: 400;
color: #bbb;
display:inline-block;
margin: 0.3rem;
border: 1px solid #bbb;
border-radius: 20px;
padding: 0.1rem 0.5rem;
`
const IconsWrap = styled.div`
width: 100%;
text-align: center;
`


export default About;
