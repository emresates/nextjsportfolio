"use client";
import React, { useRef } from "react";
import Laptop from "./Laptop";
import { motion } from "framer-motion";

function Project({ pid, thumb }) {
  const ProjectRef = useRef(null);

  return (
    <motion.div
      ref={ProjectRef}
      className="Container__ProjectModel h-full w-full cursor-pointer overflow-hidden"
    >
      <div className="relative h-full w-full overflow-hidden ">
        <motion.div
          className="absolute left-0 top-0 h-full w-full overflow-hidden "
          layoutId={`image-${pid}`}
          transition={{ duration: 1, delay: 0.15 }}
        >
          <img
            className="h-full w-full object-cover"
            src={`./projects/${thumb}`}
            alt=""
            draggable={false}
          />
        </motion.div>
      </div>
      <div
        className="ProjectModel absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 transform overflow-hidden opacity-0"
      >
        <Laptop ProjectRef={ProjectRef} pid={pid} />
      </div>
    </motion.div>
  );
}

export default Project;
