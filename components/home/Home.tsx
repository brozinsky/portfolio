import React from "react";
import { Hero } from "./hero/Hero";
import { Menu } from "../nav/Menu";
import { About } from "./about/About";
import { Projects } from "./projects/Projects";
import { Contact } from "./contact/Contact";
import Footer from "./footer/Footer";

export const Home = () => {
  return (
    <>
      <div>
        <main id="main">
          <Menu />
          <Hero />
          <Projects />
          <About />
          <Contact />
          <Footer />
        </main>
      </div>
    </>
  );
};
