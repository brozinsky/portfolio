import Link from "next/link";
import React from "react";
import {
  AiFillTool,
  AiFillSmile,
  AiOutlineArrowUp,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";

const Footer = () => {
  const handleScrollButton = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <footer className="footer mt-section">
      <div className="footer__triangle-background" />
      <div className="footer__button-center">
        <button
          aria-label="Scroll to top"
          onClick={handleScrollButton}
          className="relative inline-flex items-center justify-center w-12 h-12 overflow-hidden font-medium group footer__button-to-top"
        >
          <div className="translate-y-0 transition group-hover:-translate-y-[300%]">
            <AiOutlineArrowUp />
          </div>
          <div className="absolute translate-y-[300%] transition group-hover:translate-y-0">
            <AiOutlineArrowUp />
          </div>
        </button>
      </div>
      <div className="footer__wrap-links">
        <Link
          href="https://github.com/brozinsky"
          target="_blank"
          rel="nofollow"
          className="flex items-center justify-center gap-3 mx-auto transition text-neutral-400 hover:text-white"
          aria-label="Github"
        >
          <AiFillGithub size="2rem" />
        </Link>
        <Link
          href="https://www.linkedin.com/in/mateusz-brzeziński-b31494210/"
          target="_blank"
          rel="nofollow"
          className="flex items-center justify-center mx-auto transition text-neutral-400 hover:text-white"
          aria-label="Linkedin"
        >
          <AiFillLinkedin size="2rem" />
        </Link>
      </div>

      <small className="footer__small">
        Created by &nbsp;
        <a className="footer__small-link" href="https://github.com/brozinsky">
          brozinsky
        </a>
        &copy; 2024
      </small>
    </footer>
  );
};
export default Footer;
