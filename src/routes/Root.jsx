import React from 'react'

import GlobalStyle from '@/components/GlobalStyle';
import Menu from '../components/Menu';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import About from '@/components/About';
// import Contact from '@/components/Contact';
import Footer from '@/components/Footer';


function App() {
  return (
    <>
      <GlobalStyle />
      <Menu />
      <Hero />
      <Projects />
      <About />
      {/* <Contact /> */}
      <Footer />
    </>
  );
}

export default App;
