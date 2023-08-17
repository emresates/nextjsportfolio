import React from "react";
import { motion } from "framer-motion";

const Loader = () => {
  return (
    <motion.div
      style={{ zIndex: 100 }}
      className="bg-dark absolute left-0 top-0 grid h-screen w-full place-content-center"
    >
      <motion.span
        layoutId="loader"
        transition={{ duration: 1 }}
        className="loading"

      >
        I'm prepering
      </motion.span>
    </motion.div>
  );
};

export default Loader;
