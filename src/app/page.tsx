import React from "react";
import { list, list2 } from "./about/styling";
import { BsFacebook } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import { BsTwitter } from "react-icons/bs";
import RunningText from "@/components/RunningText";
import CardSkills from "./about/CardSkills";
import { CgIfDesign } from "react-icons/cg";
import { CgFigma } from "react-icons/cg";
import { SiAdobexd } from "react-icons/si";
import { SiAdobephotoshop } from "react-icons/si";
import { DiCss3 } from "react-icons/di";
import { SiTailwindcss } from "react-icons/si";
import { AiFillCode } from "react-icons/ai";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { GiHook } from "react-icons/gi";
import { GiPulleyHook } from "react-icons/gi";
import { SiRedux } from "react-icons/si";
import { GiMatterStates } from "react-icons/gi";
import { TbApi } from "react-icons/tb";
import Link from "next/link";
import Form from "./contact/Form";

const page = () => {
  return (
    <>
      <div style={list}>
        <div className="flex flex-col items-center justify-center w-full h-full ">
          <h1 className="text-4xl font-bold text-white lg:text-6xl font-Poppins">
            <RunningText />
          </h1>
          <p className="mt-5 font-semibold text-white md:text-xl sm:text-lg lg:text-2xl font-Poppins">
            {" "}
            Frontend Developer & UI / UX Enthusiast
          </p>
          <p className="w-7/12 mt-3 text-sm font-normal text-center text-white font-Poppins">
            I design, code and focused on minimal and clean design
          </p>
          <div className="flex flex-row mt-5 space-x-6">
            {" "}
            <Link href="https://facebook.com/gumilang48" target="_blank">
              <BsFacebook className="text-4xl text-white cursor-pointer hover:text-blue-900" />
            </Link>
            <Link href="https://instagram.com/gumilangtama" target="_blank">
              <RiInstagramFill className="text-4xl text-white cursor-pointer hover:text-pink-500" />
            </Link>
            <Link href="https://instagram.com/gumilangtama" target="_blank">
              <BsTwitter className="text-4xl text-white hover:text-blue-900" />
            </Link>
          </div>
          <Link href="/cv.pdf" target="_blank">
            <button className="p-4 mt-5 text-sm font-semibold text-black bg-white border-2 border-white rounded-lg font-Poppins hover:border-black hover:border-2 hover:bg-black hover:text-white hover:duration-200 hover:transition hover:ease-out">
              {" "}
              Download My CV
            </button>
          </Link>
        </div>
      </div>
      <div className="w-full h-[25rem] mt-2 bg-white flex flex-col items-center justify-center">
        <h1 className="mb-10 text-4xl font-bold underline text-font-primary font-Poppins">
          Summary
        </h1>

        <h2 className="text-xl font-semibold text-center text-font-primary lg:text-4xl">
          Hi, i’m Tamasakti, nice to meet u
        </h2>
        <p className="text-center  w-10/12 lg:w-[70rem] lg:text-xl text-sm mt-10 text-font-primary font-normal">
          Since beginning my journey as a Graphic Designer more than 3 years in
          college, involved in various events and organization agenda. I’m also
          learning programming last 6 months, focused on front-end developing
          and UI/UX fields Eventually graduated from coding bootcamp and had
          experienced of building couple of projects using HTML, CSS,
          Javascript, React, and Typescript programming language
        </p>
      </div>
      <h1 className="text-4xl font-bold text-center underline font-Poppins text-font-primary mb-7">
        Technical Skills
      </h1>
      <p className="text-xl font-Poppins font-normal text-slate-600 text-center mb-20 w-[30rem] mx-auto">
        Programming skills, or coding skills, are the skills i use to develop
        applications and web app
      </p>
      <div className="flex flex-col mb-32 space-y-24">
        <div className="flex flex-col-reverse w-10/12 gap-8 mx-auto lg:gap-0 lg:flex-row ">
          <div className="flex items-center justify-center flex-1">
            <CardSkills
              backTitle="Tools & Framework"
              icon={
                <>
                  <CgIfDesign className="text-6xl text-white" />
                </>
              }
              title="Beautify Tools"
              icon1={
                <p className="p-2 font-semibold text-white rounded-lg ">
                  <span>
                    <SiAdobexd className="mx-auto mb-2 text-xl" />
                  </span>
                  <span className="text-md">Adobe XD</span>
                </p>
              }
              icon2={
                <p className="p-2 font-semibold text-white rounded-lg ">
                  <span>
                    <CgFigma className="mx-auto mb-2 text-xl" />
                  </span>
                  <span className="text-md">Figma</span>
                </p>
              }
              icon3={
                <p className="p-2 font-semibold text-white rounded-lg ">
                  <span>
                    <SiAdobephotoshop className="mx-auto mb-2 text-xl" />
                  </span>
                  <span className="text-md">Photoshop</span>
                </p>
              }
              icon4={
                <p className="p-2 font-semibold text-white rounded-lg ">
                  <span>
                    <DiCss3 className="mx-auto mb-2 text-xl" />
                  </span>
                  <span className="text-md">CSS</span>
                </p>
              }
              icon5={
                <p className="p-2 font-semibold text-white rounded-lg ">
                  <span>
                    <SiTailwindcss className="mx-auto mb-2 text-xl" />
                  </span>
                  <span className="text-md">Tailwind</span>
                </p>
              }
            />
          </div>
          <div className="flex flex-col items-center justify-center flex-1 space-y-5">
            <h1 className="text-xl font-semibold font-Poppins text-font-primary">
              Beautify Tools
            </h1>
            <p className="w-9/12 text-lg font-normal font-Montserrat text-font-primary">
              I design simple content structure, minimal, clean design style, to
              achieve better UI / UX experience
            </p>
          </div>
        </div>

        <div className="flex flex-col-reverse w-10/12 gap-8 mx-auto lg:gap-0 lg:flex-row-reverse">
          <div className="flex items-center justify-center flex-1">
            <CardSkills
              backTitle="Languages"
              icon={
                <>
                  <AiFillCode className="text-6xl text-white" />
                </>
              }
              title="Programming Language"
              icon1={
                <p className="p-2 font-semibold text-white rounded-lg ">
                  <span>
                    <IoLogoJavascript className="mx-auto mb-2 text-xl" />
                  </span>
                  <span className="text-md">Javascript</span>
                </p>
              }
              icon2={
                <p className="p-2 font-semibold text-white rounded-lg ">
                  <span>
                    <FaReact className="mx-auto mb-2 text-xl" />
                  </span>
                  <span className="text-md">React Js</span>
                </p>
              }
              icon3={
                <p className="p-2 font-semibold text-white rounded-lg ">
                  <span>
                    <SiTypescript className="mx-auto mb-2 text-xl" />
                  </span>
                  <span className="text-md">Typescript</span>
                </p>
              }
              icon4={
                <p className="p-2 font-semibold text-white rounded-lg ">
                  <span>
                    <TbBrandNextjs className="mx-auto mb-2 text-xl" />
                  </span>
                  <span className="text-md">Next.Js</span>
                </p>
              }
            />
          </div>
          <div className="flex flex-col items-center justify-center flex-1 space-y-5">
            <h1 className="text-xl font-semibold font-Poppins text-font-primary">
              Programming Languages
            </h1>
            <p className="w-9/12 text-lg font-normal font-Montserrat text-font-primary">
              I like to code things from scratch, do responsive and enjoy
              bringing ideas to life
            </p>
          </div>
        </div>
        <div className="flex flex-col-reverse w-10/12 gap-8 mx-auto lg:gap-0 lg:flex-row ">
          <div className="flex items-center justify-center flex-1">
            <CardSkills
              backTitle="State Management & Other Skills"
              icon={
                <>
                  <GiMatterStates className="text-6xl text-white" />
                </>
              }
              title="State Management & Other Skills"
              icon1={
                <p className="p-2 font-semibold text-white rounded-lg ">
                  <span>
                    <GiHook className="mx-auto mb-2 text-xl" />
                  </span>
                  <span className="text-md">React Hooks</span>
                </p>
              }
              icon2={
                <p className="p-2 font-semibold text-white rounded-lg ">
                  <span>
                    <GiPulleyHook className="mx-auto mb-2 text-xl" />
                  </span>
                  <span className="text-md">Context</span>
                </p>
              }
              icon3={
                <p className="p-2 font-semibold text-white rounded-lg ">
                  <span>
                    <SiRedux className="mx-auto mb-2 text-xl" />
                  </span>
                  <span className="text-md">Redux Toolkit</span>
                </p>
              }
              icon4={
                <p className="p-2 font-semibold text-white rounded-lg ">
                  <span>
                    <TbApi className="mx-auto mb-2 text-xl" />
                  </span>
                  <span className="text-md">API Integration</span>
                </p>
              }
            />
          </div>
          <div className="flex flex-col items-center justify-center flex-1 space-y-5">
            <h1 className="text-xl font-semibold font-Poppins text-font-primary">
              State Management & Others
            </h1>
            <p className="w-9/12 text-lg font-normal font-Montserrat text-font-primary">
              I manage state and process of sharing data across different
              components in React and Next.Js using these tools, also other
              skills such as Integrating Api, Debugging, etc
            </p>
          </div>
        </div>
      </div>

      <div>
        <h1 className="text-4xl font-bold text-center underline font-Poppins text-font-primary mb-7">
          Portfolio Design
        </h1>
        <p className="text-xl font-Poppins font-normal text-slate-600 text-center mb-20 w-[30rem] mx-auto">
          Here are my projects Ive worked on. Want to see more?{" "}
          <Link
            className="font-semibold underline text-font-primary"
            href="https://github.com/tamasakti"
          >
            See My Github Repository{" "}
          </Link>
        </p>
        <div className="w-10/12 mx-auto flex flex-col lg:flex-row justify-center items-center h-[50] lg:h-[30rem] ">
          <div className="w-10/12 lg:w-4/12 h-[25rem] flex justify-center items-center flex-col z-0 hover:z-20 hover:scale-110 bg-white border-2 border-font-primary shadow-lg">
            <h1>U Movies</h1>
            <p>Movie Database Website</p>
          </div>
          <div
            className="w-10/12 lg:w-4/12 h-[25rem] z-10 shadow-lg hover:z-10 scale-105 relative"
            style={list2}
          >
            <div className="absolute z-0 flex flex-col items-center justify-center w-full h-full bg-font-primary mix-blend-multiply opacity-30"></div>
            <div className="absolute w-full h-[90%] z-50 flex flex-col  justify-end items-center space-y-3 ">
              <h1 className="text-2xl font-bold text-white">Musiclab - Id</h1>
              <button className="p-3 px-10 py-2 font-semibold bg-white rounded-lg cursor-pointer text-font-primary font-Poppins hover:bg-font-primary hover:text-white">
                <Link href="https://musiclab-id.vercel.app/" target="_blank">
                  View Demo
                </Link>
              </button>
            </div>
          </div>
          <div className="w-10/12 lg:w-4/12 h-[25rem] flex justify-center items-center flex-col z-0 hover:z-20 hover:scale-110 bg-white border-2 border-font-primary shadow-lg">
            <h1>Stay App</h1>
            <p>Hotel Book Website</p>
          </div>
        </div>
        <div className="flex w-full h-[8rem] justify-center items-center">
          <button className="p-5 px-12 py-2 font-semibold text-white border-2 rounded-lg bg-font-primary border-font-primary hover:bg-white hover:text-font-primary hover:border-2 hover:border-font-primary font-Poppins">
            <Link href="/work">See More</Link>
          </button>
        </div>
      </div>
    </>
  );
};
export default page;
