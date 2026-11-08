import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { BgImage, RightArrow } from "../assets";
import { HeroList } from "../contact";

const Hero: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const reveal = shouldReduceMotion ? false : { opacity: 0, y: 20 };
  const revealTransition = { duration: shouldReduceMotion ? 0 : 0.6 };

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#0a1428]">
      <img
        src={BgImage}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover object-center md:object-[65%_center]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[#0a1428]/45 mix-blend-multiply"
      />

      <main className="relative z-10 mx-auto flex min-h-screen w-full flex-col justify-between gap-16 px-5 pb-10 pt-32 sm:px-8 sm:pb-12 sm:pt-36 lg:gap-20">
        <motion.div
          initial={reveal}
          animate={{ opacity: 1, y: 0 }}
          transition={revealTransition}
          className="flex flex-col items-start gap-8 sm:gap-10"
        >
          <div className="flex max-w-4xl flex-col items-start gap-5 sm:gap-6">
            <h1 className="max-w-3xl font-sf text-4xl font-bold leading-[1.05] text-white sm:text-5xl lg:text-6xl">
              Built from context. Designed for performance.
            </h1>
            <p className="max-w-3xl font-sf text-base leading-relaxed text-White sm:text-lg lg:text-xl">
              We build with an understanding of context, a focus on function,
              and a drive for architectural clarity.
            </p>
          </div>

          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:gap-4">
            <motion.button
              type="button"
              whileHover={shouldReduceMotion ? undefined : { scale: 1.03 }}
              whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
              className="flex min-h-12 w-full items-center justify-center gap-2 rounded-[20px] bg-White2 px-6 text-center font-sf text-lg font-medium text-black shadow-Button2 sm:w-auto sm:text-xl"
            >
              <span>Get in touch</span>
              <img src={RightArrow} alt="" className="h-4 w-4" />
            </motion.button>
            <motion.button
              type="button"
              whileHover={shouldReduceMotion ? undefined : { scale: 1.03 }}
              whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
              className="min-h-12 w-full rounded-[20px] border border-White2 px-6 text-center font-sf text-lg font-medium text-White2 shadow-Button2 sm:w-auto sm:text-xl"
            >
              Learn more
            </motion.button>
          </div>
        </motion.div>

        <motion.div
          initial={reveal}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ ...revealTransition, delay: shouldReduceMotion ? 0 : 0.1 }}
          className="flex w-full flex-col items-start gap-5"
        >
          <div className="h-px w-full bg-BorderLine" />
          <div className="flex w-full flex-col gap-8 md:flex-row md:items-start md:justify-between md:gap-10">
            <p className="max-w-xl font-sf text-base leading-relaxed text-White2 sm:text-lg">
              Designing buildings that respond to the real needs and wants of
              their environments, with a focus on clarity, purpose, and value.
            </p>
            <ul className="grid w-full grid-cols-2 gap-x-6 gap-y-7 sm:grid-cols-3 md:max-w-2xl md:gap-8">
              {HeroList.map((item, index) => (
                <motion.li
                  key={item.years}
                  initial={reveal}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{
                    ...revealTransition,
                    delay: shouldReduceMotion ? 0 : index * 0.1,
                  }}
                  className="flex flex-col items-start gap-2"
                >
                  <span className="font-sf text-4xl font-medium leading-none tracking-[0%] text-White2 sm:text-[45px]">
                    {item.years}
                  </span>
                  <p className="font-sf text-sm leading-snug text-White2 sm:text-base lg:text-lg">
                    {item.description}
                  </p>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </main>
    </section>
  );
};

export default Hero;
