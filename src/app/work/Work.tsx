"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiFillMinusSquare } from "react-icons/ai";
import { GrReactjs } from "react-icons/gr";
import { SiTypescript } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { AiOutlineArrowRight } from "react-icons/ai";
import { MdConstruction } from "react-icons/md";

const Work = () => {
  const [active, setActive] = useState(false);

  function handleClick() {
    setActive((prevState) => !prevState);
    console.log(active);
  }

  return (
    <>
      <div className="flex flex-col  w-[90%] mx-auto h-full justify-center items-start">
        <h1 className="w-[90%] mx-auto text-4xl text-font-primary font-bold mt-10 font-Poppins underline">
          Portfolio Projects
        </h1>
        <p className="w-[90%] mx-auto text-lg text-font-primary font-normal mt-5 font-Poppins mb-10">
          in this page will include web app, mobile app, and figma design
          projects
        </p>
        <div className="w-full lg:w-[90%] grid grid-cols-1 lg:grid-cols-2 mx-auto gap-16">
          <div className="flex flex-row justify-center items-center w-[22rem] lg:w-[30rem] h-[25rem] lg:h-[25rem] shadow-lg hover:scale-110 bg-white gap-6">
            <div
              className={`${
                !active
                  ? "  justify-center space-y-7 items-center hidden"
                  : "flex flex-col justify-center space-y-7 items-center w-[40%] lg:w-[50%]"
              }`}
            >
              <h1 className="text-xl font-bold tracking-tight text-font-primary font-Poppins">
                MusicLab - Id
              </h1>
              <Image
                src="/undraw_more_music_w70e.webp"
                alt="icon-logo"
                width={300}
                height={300}
              />
              <button className="px-8 py-2 text-lg text-white transition duration-200 ease-in-out border-2 rounded-lg border-font-primary bg-font-primary hover:bg-white hover:text-font-primary">
                <Link href="https://musiclab-id.vercel.app" target="_blank">
                  View Demo
                </Link>
              </button>
            </div>
            <div
              className={`${
                !active
                  ? "w-full  transition-all duration-300 ease-in h-full flex justify-start items-center bg-font-primary relative"
                  : "w-[1%] transition-all h-full duration-300 ease-out flex justify-start items-center"
              }`}
            >
              <div className="flex flex-row w-full h-full">
                <div className="flex items-center">
                  {!active ? (
                    <AiFillMinusSquare
                      className="z-10 text-2xl font-semibold text-white cursor-pointer font-Poppins"
                      onClick={handleClick}
                    />
                  ) : (
                    <h1
                      className="z-10 text-2xl font-semibold cursor-pointer font-Poppins"
                      onClick={handleClick}
                    >
                      +
                    </h1>
                  )}
                </div>
                <div
                  className={`${
                    !active
                      ? "w-full text-white font-semibold font-Poppins flex justify-center flex-col text-md"
                      : "hidden"
                  }`}
                >
                  <h2
                    className={`${
                      !active ? "text-lg w-10/12 mx-auto" : "hidden"
                    }`}
                  >
                    Musiclab-Id
                  </h2>
                  <p
                    className={`${
                      !active
                        ? "text-md w-10/12 mx-auto font-normal font-Montserrat mt-3"
                        : "hidden"
                    }`}
                  >
                    Description :
                  </p>
                  <p
                    className={`${
                      !active
                        ? "w-10/12 mx-auto text-sm mt-1 font-normal  font-Poppins"
                        : "hidden"
                    }`}
                  >
                    MusicLab is an online web app that is used by a user to find
                    a music teacher. Many genres and instruments will be
                    available in this web app
                  </p>
                  <p
                    className={
                      !active
                        ? "w-10/12 mx-auto text-lg font-normal font-Poppins mt-3"
                        : "hidden"
                    }
                  >
                    Tech Stack :
                  </p>
                  <div className="grid w-10/12 grid-cols-2 gap-2 mx-auto mt-3">
                    <p className="w-full space-y-2">
                      <span className="flex justify-start w-full ">
                        ReactJS
                      </span>
                      <span className="flex justify-start w-full">
                        <GrReactjs className="text-xl " />
                      </span>
                    </p>
                    <p className="w-full space-y-2">
                      <span className="flex justify-start w-full ">
                        Typescript
                      </span>
                      <span className="flex justify-start w-full">
                        <SiTypescript className="text-xl " />
                      </span>
                    </p>
                    <p className="w-full space-y-2">
                      <span className="flex justify-start w-full ">
                        Tailwind
                      </span>
                      <span className="flex justify-start w-full">
                        <SiTailwindcss className="text-xl " />
                      </span>
                    </p>
                  </div>
                  <div className="w-10/12 mx-auto mt-5">
                    <Link
                      href="https://musiclab-id.vercel.app/"
                      target="_blank"
                    >
                      <button className="flex flex-row items-center gap-5">
                        View Demo{" "}
                        <span>
                          <AiOutlineArrowRight />
                        </span>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center w-[22rem] lg:w-[30rem] h-[25rem] lg:h-[25rem] shadow-lg hover:scale-110 bg-white gap-6">
            <h1 className="text-2xl">U Movies</h1>
            <p>
              <MdConstruction className="text-2xl" />
            </p>
            <p className="text-xl">On Progress</p>
          </div>
          <div className="flex flex-col justify-center items-center w-[22rem] lg:w-[30rem] h-[25rem] lg:h-[25rem] shadow-lg hover:scale-110 bg-white gap-6">
            <h1 className="text-2xl">StayApp</h1>
            <p>
              <MdConstruction className="text-xl" />
            </p>
            <p className="text-xl">On Progress</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Work;
