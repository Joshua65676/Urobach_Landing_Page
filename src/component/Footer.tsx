import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Logo, SendIcon } from "../assets";
import { FooterLink, SocialLink } from "../contact";
// import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const reveal = shouldReduceMotion ? false : { opacity: 0, y: 20 };
  const revealTransition = { duration: shouldReduceMotion ? 0 : 0.45 };

  return (
    <footer className="w-full bg-black">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 px-5 py-12 sm:px-8 sm:py-14 md:grid-cols-2 md:gap-x-10 md:gap-y-12 lg:grid-cols-[1.1fr_0.7fr_1.2fr] lg:gap-12 lg:py-16">
        <motion.div
          initial={reveal}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={revealTransition}
          className="flex flex-col items-start gap-6 sm:gap-8"
        >
          <a
            href="/"
            className="flex items-center gap-2"
            aria-label="Urobach home"
          >
            <img
              src={Logo}
              alt=""
              className="size-10 brightness-0 invert sm:size-12"
            />
            <span className="font-sf text-[28px] font-medium leading-none text-White2 sm:text-[32px]">
              Urobach
            </span>
          </a>

          <p className="max-w-md font-sf text-base leading-relaxed text-White2">
            Discover inspired architectural solutions tailored to your unique
            style and needs.
          </p>

          <div className="flex flex-col items-start gap-4">
            <ul className="flex items-center gap-4">
              {SocialLink.map((social, index) => (
                <li key={`${social.link}-${index}`}>
                  <motion.a
                    href={social.link}
                    aria-label={`Visit our social profile ${index + 1}`}
                    whileHover={shouldReduceMotion ? undefined : { y: -3, scale: 1.08 }}
                    whileTap={shouldReduceMotion ? undefined : { scale: 0.96 }}
                    transition={{ duration: shouldReduceMotion ? 0 : 0.18 }}
                    className="flex size-10 items-center justify-center rounded-full transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                  >
                    <img src={social.icon} alt="" />
                  </motion.a>
                </li>
              ))}
            </ul>
            <span className="font-sf text-sm leading-relaxed text-White2">
              © 2025 Your awesome website. All rights reserved.
            </span>
          </div>
        </motion.div>

        <motion.nav
          aria-label="Footer navigation"
          initial={reveal}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ ...revealTransition, delay: shouldReduceMotion ? 0 : 0.1 }}
          className="flex flex-col items-start gap-5"
        >
          <h2 className="font-sf text-lg font-medium text-White2 sm:text-xl">
            Quick links
          </h2>
          <ul className="flex flex-col items-start gap-3">
            {FooterLink.map((item) => (
              <li key={item.name}>
                <a
                  href={item.link}
                  className="group relative inline-block py-1 font-sf text-base text-White2 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                >
                  {item.name}
                  <span className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-White2 transition-transform duration-200 group-hover:scale-x-100 group-focus-visible:scale-x-100" />
                </a>
              </li>
            ))}
          </ul>
        </motion.nav>

        <motion.div
          initial={reveal}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ ...revealTransition, delay: shouldReduceMotion ? 0 : 0.2 }}
          className="flex w-full flex-col items-start gap-5 md:col-span-2 lg:col-span-1"
        >
          <h2 className="font-sf text-lg font-medium text-White2 sm:text-xl">
            Subscribe to our newsletter
          </h2>
          <div className="relative w-full max-w-md">
            <input
              type="email"
              placeholder="Email address"
              aria-label="Email address"
              className="h-14 w-full rounded-full border border-White2 bg-transparent py-3.5 pl-6 pr-14 font-sf text-base text-White2 outline-none transition-colors placeholder:text-White/70 focus:border-white focus:ring-2 focus:ring-white/30"
            />
            <img
              src={SendIcon}
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 object-contain"
            />
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
