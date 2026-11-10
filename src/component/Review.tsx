import React, { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Reviews } from "../contact";
import { BlackArrow, GreyArrow } from "../assets";

const Review: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const reveal = shouldReduceMotion ? false : { opacity: 0, y: 20 };
  const revealTransition = { duration: shouldReduceMotion ? 0 : 0.55 };
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(1);

  useEffect(() => {
    const updateVisible = () => {
      setVisible(
        window.innerWidth >= 1024 ? 3 : window.innerWidth >= 640 ? 2 : 1,
      );
    };

    updateVisible();
    window.addEventListener("resize", updateVisible);
    return () => window.removeEventListener("resize", updateVisible);
  }, []);

  const maxIndex = Math.max(0, Reviews.length - visible);
  const current = Math.min(index, maxIndex);

  const prev = () => setIndex(Math.max(0, current - 1));
  const next = () => setIndex(Math.min(maxIndex, current + 1));

  return (
    <section
      id="testimonials"
      className="relative w-full overflow-hidden bg-Bg py-16 sm:py-20 lg:py-20"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 hidden sm:block"
      >
        <span className="absolute inset-y-0 left-[7%] w-px bg-black/10" />
        <span className="absolute inset-y-0 left-[36%] w-px bg-black/10" />
        <span className="absolute inset-y-0 left-[65%] w-px bg-black/10" />
        <span className="absolute inset-y-0 left-[93%] w-px bg-black/10" />
      </div>

      <h3 className="font-sf font-medium text-4xl leading-[100%] text-black text-center">
        What our clients say
      </h3>

      <div className="relative z-10 mt-15 mx-auto flex w-full max-w-7xl flex-col gap-5 px-5 sm:gap-16 sm:px-8 lg:gap-3">
        <div>
          {Reviews.map((items) => (
            <div
              key={items.name}
              className="relative flex w-full flex-col items-start md:block md:min-h-112.5"
            >
              <motion.img
                src={items.image}
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
                className="relative z-10 w-full bg-White2 p-6 sm:p-8 md:absolute md:right-0 md:top-1/2 md:w-[51%] md:-translate-y-1/2 lg:p-12 lg:h-79.75 lg:-mr-10"
              >
                <div className="flex flex-col items-start gap-4 sm:gap-5">
                  <p className="max-w-125 font-sf text-base leading-relaxed text-Text sm:text-lg">
                    {items.description}
                  </p>
                  <div className="flex flex-row items-center gap-5 -mt-2">
                    <img
                      src={items.profile}
                      alt={items.name}
                      className="w-25 h-25 rounded-[50px]"
                    />
                    <div className="flex flex-col items-start gap-5">
                      <h2 className="font-sf font-medium text-2xl leading-[100%] text-black">
                        {items.name}
                      </h2>
                      <span className="font-sf font-medium text-2xl leading-[100%] text-Text">
                        {items.location}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>

        <div className="flex shrink-0 items-center gap-3 -mr-3">
          <button
            type="button"
            onClick={prev}
            disabled={current === 0}
            aria-label="Previous projects"
            className="flex size-18 items-center justify-center transition disabled:cursor-not-allowed"
          >
            <img src={GreyArrow} alt="" />
          </button>

          <button
            type="button"
            onClick={next}
            disabled={current === maxIndex}
            aria-label="Next projects"
            className="flex size-18 items-center justify-center transition disabled:cursor-not-allowed"
          >
            <img src={BlackArrow} alt="" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Review;
