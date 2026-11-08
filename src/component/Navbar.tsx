import React, { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Logo } from "../assets";
import { NavList } from "../contact";

const Navbar: React.FC = () => {
  const [stickyClass, setStickyClass] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const stickNavbar = () => setStickyClass(window.scrollY > 50);

    window.addEventListener("scroll", stickNavbar, { passive: true });
    return () => window.removeEventListener("scroll", stickNavbar);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <motion.nav
      initial={shouldReduceMotion ? false : { opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: shouldReduceMotion ? 0 : 0.4 }}
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        stickyClass ? "bg-[#0a1428]/80 shadow-lg backdrop-blur-md" : ""
      }`}
    >
      <div className="relative mx-auto flex w-full items-center justify-between px-5 py-4 sm:px-8 sm:py-5">
        <a href="/" className="flex items-center gap-2" aria-label="Urobach home">
          <img
            src={Logo}
            alt=""
            className="h-10 w-10 brightness-0 invert sm:h-12 sm:w-12"
          />
          <span className="font-sf text-[26px] font-medium leading-none text-white sm:text-[32px]">
            Urobach
          </span>
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          <ul className="flex items-center gap-8">
            {NavList.map((item) => (
              <li key={item.name}>
                <a
                  href={item.link}
                  className="font-sf text-lg text-White transition-colors hover:text-white"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
          <button
            type="button"
            className="h-12 rounded-[20px] cursor-pointer bg-white px-6 text-center font-sf text-xl font-medium text-black shadow-Button"
          >
            Contact Us
          </button>
        </div>

        <button
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
          className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-lg border border-white/40 text-white lg:hidden"
        >
          <span
            className={`h-0.5 w-5 bg-current transition-transform ${
              menuOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`h-0.5 w-5 bg-current transition-opacity ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-0.5 w-5 bg-current transition-transform ${
              menuOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              id="mobile-navigation"
              initial={shouldReduceMotion ? false : { opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={shouldReduceMotion ? undefined : { opacity: 0, y: -8 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.2 }}
              className="absolute inset-x-0 top-full rounded-b-2xl border-t border-white/15 bg-[#0a1428]/95 px-5 py-5 shadow-xl backdrop-blur-md lg:hidden"
            >
              <ul className="flex flex-col gap-5">
                {NavList.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.link}
                      onClick={closeMenu}
                      className="block py-1 font-sf text-lg text-white/85"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
              <button
                type="button"
                onClick={closeMenu}
                className="mt-5 min-h-11 w-full rounded-[20px] bg-white px-6 font-sf text-lg font-medium text-black shadow-Button"
              >
                Contact Us
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
