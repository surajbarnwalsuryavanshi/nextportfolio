"use client";

import { Typewriter } from "react-simple-typewriter";

import React from "react";

const Bottom = () => {
  return (
    <div
      className="text-center m-8 mb-4 sm:mb-10 text-green-700 font-bold text-xl cursor-pointer"
      onClick={() => {
        window.location.href = "mailto:surajbarnwalsuryavanshi@gmail.com";
      }}
    >
      <Typewriter
        words={["@surajbarnwalsuryavanshi"]}
        loop={0}
        cursor
        cursorStyle="_"
        typeSpeed={80}
        deleteSpeed={50}
        delaySpeed={2000}
      />
    </div>
  );
};

export default Bottom;
