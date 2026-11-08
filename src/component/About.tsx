import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { AboutImg } from "../assets";
import { AboutList } from "../contact";

const About: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const reveal = shouldReduceMotion ? false : { opacity: 0, y: 20 };
  const revealTransition = { duration: shouldReduceMotion ? 0 : 0.55 };

  return (
    <section id="about" className="relative w-full overflow-hidden bg-Bg py-16 sm:py-20 lg:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 mt-10 hidden sm:block"
      >
        <span className="absolute inset-y-0 left-[7%] w-px bg-black/10" />
        <span className="absolute inset-y-0 left-[36%] w-px bg-black/10" />
        <span className="absolute inset-y-0 left-[65%] w-px bg-black/10" />
        <span className="absolute inset-y-0 left-[93%] w-px bg-black/10" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col gap-12 px-5 sm:gap-16 sm:px-8 lg:gap-20">
        <div className="relative flex w-full flex-col items-start md:block md:min-h-112.5">
          <motion.img
            src={AboutImg}
            alt="Urobach architecture and design"
            initial={reveal}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={revealTransition}
            className="aspect-4/3 w-full object-cover sm:aspect-video md:absolute md:left-0 md:top-0 md:aspect-auto md:h-full md:w-[61%]"
          />
          <motion.div
            initial={reveal}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              ...revealTransition,
              delay: shouldReduceMotion ? 0 : 0.12,
            }}
            className="relative z-10 w-full bg-White2 p-6 sm:p-8 md:absolute md:right-0 md:top-1/2 md:w-[61%] md:-translate-y-1/2 lg:p-12"
          >
            <div className="flex flex-col items-start gap-4 sm:gap-5">
              <h2 className="font-sf text-3xl font-medium leading-tight text-black sm:text-4xl">
                About Us
              </h2>
              <p className="max-w-xl font-sf text-base leading-relaxed text-Text sm:text-lg">
                Founded on a passion for innovation, functionality, and timeless
                design, we bring together diverse expertise in architecture,
                interior design, and urban planning. Our process is rooted in
                collaboration with clients, consultants, and craftsmen to ensure
                each project reflects a unique vision brought to life through
                thoughtful detail and sustainable practice.
              </p>
            </div>
          </motion.div>
        </div>

        <motion.ul
          initial={reveal}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={revealTransition}
          className="mx-auto grid w-full max-w-5xl grid-cols-3 gap-3 py-2 sm:gap-8 sm:py-5"
        >
          {AboutList.map((item, index) => (
            <motion.li
              key={item.years}
              initial={reveal}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{
                ...revealTransition,
                delay: shouldReduceMotion ? 0 : index * 0.1,
              }}
              className="flex min-w-0 flex-col items-start gap-2 sm:gap-4"
            >
              <h3 className="font-sf text-2xl font-medium leading-tight text-black sm:text-4xl">
                {item.years}
              </h3>
              <span className="font-sf text-xs leading-snug text-Text2 sm:text-base">
                {item.description}
              </span>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
};

export default About;
