import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

html {
  margin: 0;
  font-family: 'Montserrat', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: #111111;
  color: #fff;
  overflow-x: hidden !important;
}

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  scroll-behavior: smooth;
}

h1, h2, h3{
  font-family: 'Rajdhani', 'Helvetica Neue',
  sans-serif;
  color: #F13F3F;
  text-transform: uppercase;
  font-weight: 400;
}

h1{
  font-size: 3.5rem;
  line-height: 3.5rem;
  font-weight: 700;
}

h2{
  /* font-size: 2.4rem;
  line-height:  2.4rem;
  margin: 2rem 5rem; */
    line-height:  2.4rem;
    text-transform: uppercase;
    color: #F13F3F;
    font-size: 2.4rem;
    font-weight: 400;
    width: 100%;
    margin: 4rem 5rem 2rem 5rem;
}

header{
  min-height: 100vh;
}

a:link {
  color: #969696;
}

a:visited {
  color: #969696;
}

a:not(.default):link {
  color: #969696;
}

a:not(.default):visited {
  color: #969696;
}

:root {
  /* Colors */
  --color-default: #666;
  --color-main: #F13F3F;
  --color-background: #111;

  --color-css:         #1572B6;
  --color-javascript:  #F7DF1E;
  --color-html:        #E34F26;

  --color-react:       #61DAFB;
  --color-sass:        #CC6699;

  --color-redux:       #764ABC;
  --color-styled-components:#DB7093;
  --color-gsap:       #88CE02;

  --color-bootstrap:   #563D7C;
  --color-git:         #F14E32;
  --color-github:      #FFFFFF;
  --color-webpack:     #8DD6F9;
  --color-nodejs:      #339933;
  --color-firebase:    #FFCA28;
  --color-npm:         #CB3837;

  --color-vscode:     #007ACC;
  --color-webpack:     #8DD6F9;

  --color-figma:       #F24E1E;
  --color-photoshop:   #31A8FF;
  --color-autocad:     #E51937;

}

`

export default GlobalStyle;