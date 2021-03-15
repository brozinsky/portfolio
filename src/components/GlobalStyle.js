import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

body {
  margin: 0;
  font-family: 'Montserrat', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: #111111;
  color: #fff;
}

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
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
  font-size: 2.4rem;
  line-height:  2.4rem;
  margin: 2rem 5rem;
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
`

export default GlobalStyle;