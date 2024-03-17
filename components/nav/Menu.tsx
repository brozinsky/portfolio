import { MyLinks } from "./_partials/MyLinks";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import LogoSVG from "../svg/LogoSVG";
import Link from "next/link";
import Hamburger from "../buttons/Hamburger";
import useLockScroll from "@/hooks/useLockScroll";

const links = [
  { id: 1, title: "Projects", value: "projects" },
  { id: 2, title: "About", value: "about" },
  { id: 3, title: "Contact", value: "contact" },
];

export const Menu = () => {
  const [selected, setSelected] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useLockScroll(isMenuOpen);

  return (
    <>
      <div
        className={clsx(
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible",
          "menu-mobile__backdrop"
        )}
        onClick={() => setIsMenuOpen(false)}
      ></div>
      <header className={clsx(isMenuOpen && "menu--open", "menu")}>
        <motion.div
          initial={{ y: -70 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          onClick={() => {
            setSelected("/");
          }}
        >
          <Link href="/" aria-label="Homepage">
            <LogoSVG />
          </Link>
        </motion.div>
        <div className="flex items-center h-full gap-8">
          <motion.nav
            initial={{ y: -70 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={"menu__items"}
          >
            {links.map((item) => {
              return (
                <motion.a
                  key={item.value}
                  initial={{ y: -70 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  href={"#" + item.value}
                  onClick={() => setSelected(item.value)}
                  className={clsx(
                    "menu__item",
                    selected === item.value ? "selected" : ""
                  )}
                >
                  {item.title}
                </motion.a>
              );
            })}
          </motion.nav>
        </div>
        <Hamburger isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
        <div className="hidden md:block">
          <MyLinks />
        </div>
        <div
          className={clsx(
            isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible",
            "menu-mobile"
          )}
        >
          <div className="flex flex-col items-center gap-6 mb-6 lg:flex-row">
            {links.map((item) => {
              return (
                <motion.a
                  key={item.value}
                  initial={{ y: -70 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  href={"#" + item.value}
                  onClick={() => setIsMenuOpen(false)}
                  className={clsx(
                    "menu-mobile__item",
                    selected === item.value ? "selected" : ""
                  )}
                >
                  {item.title}
                </motion.a>
              );
            })}
            <div className="mt-4 md:hidden">
              <MyLinks />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
