import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { CTAimage } from "../assets";

const CTA: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const reveal = shouldReduceMotion ? false : { opacity: 0, y: 20 };

  return (
    <main className="w-full bg-black">
      <section
        id="contact"
        className="mx-auto flex w-full max-w-7xl flex-col items-center gap-8 sm:gap-10 sm:px-10 md:flex-row md:justify-between"
      >
        <motion.div
          initial={reveal}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.55 }}
          className="flex w-full flex-col items-start gap-6 sm:gap-8 md:max-w-sm lg:max-w-md px-5 py-12 md:px-0 md:py-0"
        >
          <h2 className="font-sf text-3xl font-medium leading-tight text-White2 sm:text-3xl lg:text-4xl w-83.25">
            Ready to transform your space?
          </h2>
          <motion.button
            type="button"
            whileHover={shouldReduceMotion ? undefined : { scale: 1.04 }}
            whileTap={shouldReduceMotion ? undefined : { scale: 0.97 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.2 }}
            className="min-h-10 w-full max-w-34.75 cursor-pointer rounded-full bg-White2 px-5 py-2 text-center font-sf text-lg font-medium leading-tight text-black sm:w-auto sm:text-xl"
          >
            Contact us
          </motion.button>
        </motion.div>

        <motion.img
          src={CTAimage}
          alt=""
          aria-hidden="true"
          initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.65, delay: shouldReduceMotion ? 0 : 0.1 }}
        />
      </section>
      <div aria-hidden="true" className="w-full border-t border-Text" />
    </main>
  );
};

export default CTA;
