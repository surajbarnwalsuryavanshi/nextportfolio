"use client";

import { useMemo } from "react";
import AnimationWrapper from "../animation-wrapper";
import { motion } from "framer-motion";
import Image from "next/image";
import aboutMeImage from "../../../app/assets/about-image.png";

function variants() {
  return {
    offscreen: {
      y: 150,
      opacity: 0,
    },
    onscreen: ({ duration = 2 } = {}) => ({
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration,
      },
    }),
  };
}

const skillItemVariant = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export default function ClientAboutView({ data }) {
  console.log(data, "aboutdata");

  const setVariants = useMemo(() => variants(), []);

  const aboutDataInfo = [
    {
      label: "Client",
      value: data?.noofclients || 0,
    },
    {
      label: "Project",
      value: data?.noofprojects || 0,
    },
    {
      label: "Experience",
      value: data?.yearofexperience || 0,
    },
  ];

  const headingText = "Why Hire Me For Your Next Project ?";

  return (
    <>
      <div
        className="max-w-screen-xl mt-24 mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto"
        id="about"
      >
        <div className="w-full flex">
          <AnimationWrapper
            className={
              "rounded-lg w-full grid-flow-row grid grid-cols-1 sm:grid-cols-3 py-9 divide-y-2 sm:divide-y-0 sm:divide-x-2 divide-green-500 bg-transparent z-10"
            }
          >
            {aboutDataInfo.map((infoItem, index) => (
              <motion.div
                key={index}
                className={`flex items-center justify-start 
              ${
                index === 0
                  ? "sm:justify-start"
                  : index === 1
                  ? "sm:justify-center"
                  : "sm:justify-end"
              } py-4 sm:py-6 w-8/12 px-4 sm:w-auto mx-auto sm:mx-0
               `}
                custom={{ duration: 2 + index }}
                variants={setVariants}
              >
                <div className="flex m-0 w-40 sm:w-auto">
                  <div className="flex flex-col">
                    <p className="text-[50px] !text-green-500 font-bold">
                      {infoItem.value}+
                    </p>
                    <p className="text-[25px] font-bold text-[#000]">
                      {infoItem.label}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimationWrapper>
        </div>
        <AnimationWrapper className={"pt-6"}>
          <div className="flex flex-col justify-center items-center row-start-2 sm:row-start-1 ">
            <h1 className="leading-[70px] mb-4 text-3xl lg:text-4xl xl:text-5xl font-medium">
              {headingText.split(" ").map((item, index) => (
                <span
                  key={index}
                  className={`${
                    index === 6 ? "text-green-500" : "text-[#000]"
                  }`}
                >
                  {item}{" "}
                </span>
              ))}
            </h1>
            <p className="text-[#000] mt-4 mb-8 font-bold">{data?.aboutme}</p>
          </div>
        </AnimationWrapper>
        <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8">
          <AnimationWrapper className={"flex w-full relative"}>
            <motion.div variants={setVariants} className="h-full w-full p-4">
              <Image
                src={aboutMeImage}
                alt="My About Me Image"
                layout="responsive"
                height={414}
                width={508}
                quality={100}
                className="hover:scale-110 transition-all ease-in-out duration-1000"
              />
            </motion.div>
          </AnimationWrapper>
          <AnimationWrapper className="flex items-center w-full p-4">
            <motion.div
              variants={setVariants}
              className="grid gap-4 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 w-full"
            >
              {data?.skills.split(",").map((skill, index) => (
                <motion.div
                  key={index}
                  className="w-full flex justify-center items-center"
                  variants={skillItemVariant}
                >
                  <button
                    className="
            whitespace-nowrap text-ellipsis overflow-hidden
            py-3 px-4
            w-[120px] text-xs
            sm:w-[140px] sm:text-sm
            md:w-[160px] md:text-lg
            border-[2px] border-green-500
            bg-[#fff] text-[#000]
            font-semibold rounded-lg tracking-widest
            cursor-pointer transition-all outline-none
            hover:shadow-[5px_5px_0px_rgba(0,0,0,1)]
          "
                  >
                    {skill}
                  </button>
                </motion.div>
              ))}
            </motion.div>
          </AnimationWrapper>
        </div>
      </div>
    </>
  );
}
