"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeIn } from "../../variants";

function OpeningPage() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    // İlk açılışta 2 saniye sonra intro ekranını gizle
    const timeout = setTimeout(() => {
      setShowIntro(false);
    }, 3000);

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
              variants={fadeIn("top", 0)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="text-center"
            >
              Merhaba, en iyi tecrübe için karanlık modda kullanmanızı tavsiye
              ederiz.
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default OpeningPage;
