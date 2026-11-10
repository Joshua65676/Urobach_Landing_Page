import React, { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Portfolios } from "../contact";
import { BlackArrow, GreyArrow } from "../assets";

const PortFolio: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const reveal = shouldReduceMotion ? false : { opacity: 0, y: 24 };
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(1);

  useEffect(() => {
    const updateVisible = () => {
      setVisible(window.innerWidth >= 1024 ? 3 : window.innerWidth >= 640 ? 2 : 1);
    };

    updateVisible();
    window.addEventListener("resize", updateVisible);
    return () => window.removeEventListener("resize", updateVisible);
  }, []);

  const maxIndex = Math.max(0, Portfolios.length - visible);
  const current = Math.min(index, maxIndex);

  const prev = () => setIndex(Math.max(0, current - 1));
  const next = () => setIndex(Math.min(maxIndex, current + 1));

  return (
    <main className="w-full bg-White2">
      <section
        id="portfolio"
        className="flex flex-col py-8 px-5 w-full max-w-7xl mx-auto gap-10 sm:gap-10 sm:px-8 lg:px-0"
      >
        <div className="flex items-center justify-between gap-4">
          <h2 className="font-sf text-3xl font-medium leading-tight text-black sm:text-4xl">
            Our Portfolio
          </h2>

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

        <div className="grid w-full grid-cols-1 justify-items-center gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10 px-8">
          {Portfolios.slice(current, current + visible).map((items, cardIndex) => (
            <motion.article
              key={items.name}
              initial={reveal}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={shouldReduceMotion ? undefined : { y: -6 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.5,
                delay: shouldReduceMotion ? 0 : cardIndex * 0.12,
              }}
              className="flex w-full max-w-xl flex-col items-start gap-4 text-start sm:gap-5"
            >
              <a
                href={items.link}
                aria-label={`View ${items.name} project`}
                className="w-full overflow-hidden bg-Bg"
              >
                <img
                  src={items.image}
                  alt={items.name}
                  className="aspect-4/3 w-full object-cover"
                />
              </a>
              <h3 className="font-sf text-xl font-medium leading-snug text-black sm:text-2xl">
                {items.name}
              </h3>
              <a
                href={items.link}
                className="font-sf text-base font-medium text-black underline underline-offset-4"
              >
                View Project
              </a>
            </motion.article>
          ))}
        </div>
      </section>
    </main>
  );
};

export default PortFolio;
