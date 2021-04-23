import React from 'react'

import GlobalStyle from './components/GlobalStyle';
import Menu from './components/Menu';
import Header from './components/Header';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <GlobalStyle />
      {/* <Menu /> */}
      <Header />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
