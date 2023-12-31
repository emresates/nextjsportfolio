"use client";
import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

//* Components
import Map from "../map";
import { fadeIn } from "../../variants";

//* ICONS
import { BiMailSend } from "react-icons/bi";
import { AiOutlineLoading } from "react-icons/ai";

function ContactForm() {
  const ref = useRef();
  const [success, setSuccess] = useState("");

  useEffect(() => {
    if (success === "successful") {
      const timeout = setTimeout(() => {
        setSuccess("");
        ref.current.reset();
      }, 3000);

      return () => clearTimeout(timeout);
    }
  }, [success]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = ref.current.name.value;
    const email = ref.current.email.value;
    const subject = ref.current.subject.value;
    const message = ref.current.message.value;

    if (name === "" || email === "" || subject === "" || message === "") {
      setSuccess("warning");
      return;
    } else {
      setSuccess("sending");
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
            setSuccess("successful");
          },
          (error) => {
            console.log(error.text);
            setSuccess("error");
          },
        );
    }
  };
  return (
    <div className="bg-primary/30 h-full overflow-hidden">
      <div className="h-full xl:flex xl:text-left">
        <div className="flex h-screen w-screen flex-col items-center justify-center px-8 pt-20 xl:w-2/3 xl:pl-28">
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="mb-12 text-center text-5xl"
          >
            Let's <span className="text-red-500">Connect.</span>
          </motion.h2>
          <motion.form
            ref={ref}
            onSubmit={handleSubmit}
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex w-full flex-col gap-4 text-2xl sm:w-auto"
          >
            <div className="flex w-full flex-col gap-4 sm:flex-row sm:gap-x-6">
              <input
                type="text"
                placeholder="Name"
                name="name"
                className="w-full rounded-lg border-2 border-solid border-red-700 bg-transparent px-3 py-2 shadow shadow-red-700 outline-none"
              />
              <input
                type="text"
                placeholder="Email"
                name="email"
                className="w-full rounded-lg border-2 border-solid border-red-700 bg-transparent px-3 py-2 shadow shadow-red-700 outline-none"
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              name="subject"
              className="w-full rounded-lg border-2 border-solid border-red-700 bg-transparent px-3 py-2 shadow shadow-red-700 outline-none"
            />
            <textarea
              placeholder="Message"
              name="message"
              className="h-32 w-full resize-none rounded-lg border-2 border-solid border-red-700 bg-transparent p-3 shadow shadow-red-700 outline-none"
            />
            <div className="flex flex-row-reverse justify-between">
              <button
                type="submit"
                className="relative float-right flex h-10 w-20 items-center justify-center rounded-md border-red-700 px-3 py-1 shadow-lg shadow-red-700"
              >
                {success === "successful" ? (
                  <BiMailSend />
                ) : success === "sending" ? (
                  <AiOutlineLoading className="animate-spin text-center" />
                ) : (
                  <>
                    <span className="absolute right-0 top-0">
                      <span className="relative right-0 top-0 flex h-3 w-3">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
                        <span className="relative inline-flex h-3 w-3 rounded-full bg-red-500"></span>
                      </span>
                    </span>
                    <span>Send</span>
                  </>
                )}
              </button>
              {success === "warning"
                ? "Please fill in all fields."
                : success === "error"
                ? "Something went wrong."
                : success === "successful"
                ? "Mail has been sent successfully."
                : ""}
            </div>
          </motion.form>
        </div>
        <motion.div
          variants={fadeIn("left", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex w-screen flex-col xl:w-2/3"
        >
          <Map />
        </motion.div>
      </div>
    </div>
  );
}

export default ContactForm;
