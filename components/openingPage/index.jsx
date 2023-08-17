"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeIn } from "../../variants";

function OpeningPage() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowIntro(false);
    }, 4000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <AnimatePresence>
        {showIntro && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute left-0 top-0 z-[100] flex h-screen w-screen items-center justify-center overflow-hidden bg-black text-8xl"
          >
            <motion.p
              variants={fadeIn("top", 0.5)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="w-1/2 text-center"
            >
              It is recommended to use dark mode for the best experience.
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default OpeningPage;
