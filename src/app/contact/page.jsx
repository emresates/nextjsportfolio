"use client";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../../variants";
import Map from "../../../components/map";
import emailjs from "@emailjs/browser";

function Contact() {
  const ref = useRef();
  const [success, setSuccess] = useState();
  console.log(ref.current);
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_jh8jdmc",
        "template_msf4xso",
        ref.current,
        "uQKHaO308olUzpUHl",
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
        },
        (error) => {
          console.log(error.text);
          setSuccess(false);
        },
      );
  };
  console.log(success);
  return (
    <div className="bg-primary/30 h-full">
      <div className="flex h-full xl:text-left">
        <div className="flex h-screen w-2/3 flex-col items-center justify-center pl-28">
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="mb-12 text-center text-5xl"
          >
            Let's <span className="text-red-500">Connect.</span>
          </motion.h2>
          <form
            ref={ref}
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 text-2xl"
          >
            <div className="flex w-full gap-x-6">
              <input
                type="text"
                placeholder="Name"
                name="name"
                className="rounded-lg border-2 border-solid border-red-700 bg-transparent px-3 py-2 shadow shadow-red-700 outline-none"
              />
              <input
                type="text"
                placeholder="Email"
                name="email"
                className="rounded-lg border-2 border-solid border-red-700 bg-transparent px-3 py-2 shadow shadow-red-700 outline-none"
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              name="subject"
              className="rounded-lg border-2 border-solid border-red-700 bg-transparent px-3 py-2 shadow shadow-red-700 outline-none"
            />
            <textarea
              placeholder="Message"
              name="message"
              className="h-32 resize-none rounded-lg border-2 border-solid border-red-700 bg-transparent p-3 shadow shadow-red-700 outline-none"
            />
            <button
              type="submit"
              className="float-right w-20 rounded-md border-red-700 px-3 py-1 shadow-lg shadow-red-700"
            >
              Send
            </button>
            {success && "Successful"}
          </form>
        </div>
        <div className="flex w-2/3 flex-col">
          <Map />
        </div>
      </div>
    </div>
  );
}

export default Contact;
