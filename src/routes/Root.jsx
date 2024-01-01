import React from "react";
import GlobalStyle from "@/components/GlobalStyle";
import Menu from "../components/Menu";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Footer from "@/components/Footer";
import Featured from "@/components/Featured";

function App() {

  return (
    <div>
      <GlobalStyle />
      <Menu />
      <Hero />
      <Featured />
      <Projects />
      <About />
      <Footer />
    </div>
  );
}

export default App;
