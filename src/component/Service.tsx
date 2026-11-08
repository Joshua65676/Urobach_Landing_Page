import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ServiceList } from "../contact";

const Service: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const reveal = shouldReduceMotion ? false : { opacity: 0, y: 20 };

  return (
    <section id="services" className="w-full bg-Bg py-12 sm:py-12 lg:py-10">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-5 sm:gap-8 sm:px-8">
        <motion.h2
          initial={reveal}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.5 }}
          className="font-sf text-3xl font-medium leading-tight text-black sm:text-4xl"
        >
          Our service
        </motion.h2>
        <div aria-hidden="true" className="h-px w-screen -ml-41 bg-BorderLine" />

        <ul className="grid w-full grid-cols-1 gap-10 py-2 sm:grid-cols-2 sm:gap-8 sm:py-4 lg:grid-cols-3 lg:gap-10">
          {ServiceList.map((item, index) => (
            <motion.li
              key={item.name}
              initial={reveal}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.55,
                delay: shouldReduceMotion ? 0 : index * 0.12,
              }}
              className="flex min-w-0 flex-col items-start gap-4 sm:gap-5"
            >
              <motion.img
                src={item.image}
                alt=""
                aria-hidden="true"
                whileHover={shouldReduceMotion ? undefined : { scale: 1.06 }}
                transition={{ duration: 0.2 }}
                className="h-14 w-14 object-contain sm:h-16 sm:w-16"
              />
              <h3 className="font-sf text-xl font-medium leading-snug text-black sm:text-2xl">
                {item.name}
              </h3>
              <p className="font-sf text-base leading-relaxed text-Text sm:text-lg w-73.75">
                {item.description}
              </p>
              <span className="mt-auto cursor-pointer pt-1 font-sf text-base font-medium text-black underline underline-offset-4 sm:text-lg">
                View More
              </span>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Service;
