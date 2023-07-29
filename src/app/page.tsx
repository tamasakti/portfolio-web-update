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
        <div className="flex flex-col w-full h-full justify-center items-center ">
          <h1 className="text-4xl lg:text-6xl text-white font-Poppins font-bold">
            <RunningText />
          </h1>
          <p className="md:text-xl sm:text-lg lg:text-2xl text-white  font-Poppins mt-5 font-semibold">
            {" "}
            Frontend Developer & UI / UX Enthusiast
          </p>
          <p className="text-sm text-white  font-Poppins w-7/12 mt-3 text-center font-normal">
            I design, code and focused on minimal and clean design
          </p>
          <div className="flex flex-row space-x-6 mt-5">
            {" "}
            <Link href="https://facebook.com/gumilang48" target="_blank">
              <BsFacebook className="text-white text-4xl hover:text-blue-900 cursor-pointer" />
            </Link>
            <Link href="https://instagram.com/gumilangtama" target="_blank">
              <RiInstagramFill className="text-white text-4xl hover:text-pink-500 cursor-pointer" />
            </Link>
            <Link href="https://instagram.com/gumilangtama" target="_blank">
              <BsTwitter className="text-white text-4xl hover:text-blue-900" />
            </Link>
          </div>
          <Link href="/cv.pdf" target="_blank">
            <button className="p-4 text-sm text-black bg-white border-2 border-white rounded-lg font-Poppins hover:border-black font-semibold hover:border-2 hover:bg-black hover:text-white hover:duration-200 hover:transition hover:ease-out mt-5">
              {" "}
              Download My CV
            </button>
          </Link>
        </div>
      </div>
      <div className="w-full h-[25rem] mt-2 bg-white flex flex-col items-center justify-center">
        <h1 className="text-4xl text-font-primary font-Poppins font-bold mb-10 underline">
          Summary
        </h1>

        <h2 className="text-font-primary font-semibold lg:text-4xl text-xl text-center">
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
      <h1 className="text-4xl  font-Poppins font-bold text-font-primary text-center mb-7 underline">
        Technical Skills
      </h1>
      <p className="text-xl font-Poppins font-normal text-slate-600 text-center mb-20 w-[30rem] mx-auto">
        Programming skills, or coding skills, are the skills i use to develop
        applications and web app
      </p>
      <div className="flex flex-col space-y-24 mb-32">
        <div className="flex mx-auto lg:gap-0 gap-8 flex-col-reverse lg:flex-row w-10/12 ">
          <div className="flex-1 flex justify-center items-center">
            <CardSkills
              backTitle="Tools & Framework"
              icon={
                <>
                  <CgIfDesign className="text-6xl text-white" />
                </>
              }
              title="Beautify Tools"
              icon1={
                <p className=" text-white font-semibold p-2 rounded-lg">
                  <span>
                    <SiAdobexd className="mx-auto mb-2 text-xl" />
                  </span>
                  <span className="text-md">Adobe XD</span>
                </p>
              }
              icon2={
                <p className=" text-white font-semibold p-2 rounded-lg">
                  <span>
                    <CgFigma className="mx-auto mb-2 text-xl" />
                  </span>
                  <span className="text-md">Figma</span>
                </p>
              }
              icon3={
                <p className=" text-white font-semibold p-2 rounded-lg">
                  <span>
                    <SiAdobephotoshop className="mx-auto mb-2 text-xl" />
                  </span>
                  <span className="text-md">Photoshop</span>
                </p>
              }
              icon4={
                <p className=" text-white font-semibold p-2 rounded-lg">
                  <span>
                    <DiCss3 className="mx-auto mb-2 text-xl" />
                  </span>
                  <span className="text-md">CSS</span>
                </p>
              }
              icon5={
                <p className=" text-white font-semibold p-2 rounded-lg">
                  <span>
                    <SiTailwindcss className="mx-auto mb-2 text-xl" />
                  </span>
                  <span className="text-md">Tailwind</span>
                </p>
              }
            />
          </div>
          <div className="flex-1 flex flex-col justify-center items-center space-y-5">
            <h1 className="text-xl font-semibold font-Poppins text-font-primary">
              Beautify Tools
            </h1>
            <p className="w-9/12 text-lg  font-normal font-Montserrat text-font-primary">
              I design simple content structure, minimal, clean design style, to
              achieve better UI / UX experience
            </p>
          </div>
        </div>

        <div className="flex mx-auto flex-col-reverse lg:gap-0 gap-8 lg:flex-row-reverse w-10/12">
          <div className="flex-1 flex justify-center items-center">
            <CardSkills
              backTitle="Languages"
              icon={
                <>
                  <AiFillCode className="text-6xl text-white" />
                </>
              }
              title="Programming Language"
              icon1={
                <p className=" text-white font-semibold p-2 rounded-lg">
                  <span>
                    <IoLogoJavascript className="mx-auto mb-2 text-xl" />
                  </span>
                  <span className="text-md">Javascript</span>
                </p>
              }
              icon2={
                <p className=" text-white font-semibold p-2 rounded-lg">
                  <span>
                    <FaReact className="mx-auto mb-2 text-xl" />
                  </span>
                  <span className="text-md">React Js</span>
                </p>
              }
              icon3={
                <p className=" text-white font-semibold p-2 rounded-lg">
                  <span>
                    <SiTypescript className="mx-auto mb-2 text-xl" />
                  </span>
                  <span className="text-md">Typescript</span>
                </p>
              }
              icon4={
                <p className=" text-white font-semibold p-2 rounded-lg">
                  <span>
                    <TbBrandNextjs className="mx-auto mb-2 text-xl" />
                  </span>
                  <span className="text-md">Next.Js</span>
                </p>
              }
            />
          </div>
          <div className="flex-1 flex flex-col justify-center items-center space-y-5">
            <h1 className="text-xl font-semibold font-Poppins text-font-primary">
              Programming Languages
            </h1>
            <p className="w-9/12 text-lg  font-normal font-Montserrat text-font-primary">
              I like to code things from scratch, do responsive and enjoy
              bringing ideas to life
            </p>
          </div>
        </div>
        <div className="flex mx-auto lg:gap-0 gap-8 flex-col-reverse lg:flex-row w-10/12 ">
          <div className="flex-1 flex justify-center items-center">
            <CardSkills
              backTitle="State Management & Other Skills"
              icon={
                <>
                  <GiMatterStates className="text-6xl text-white" />
                </>
              }
              title="State Management & Other Skills"
              icon1={
                <p className=" text-white font-semibold p-2 rounded-lg">
                  <span>
                    <GiHook className="mx-auto mb-2 text-xl" />
                  </span>
                  <span className="text-md">React Hooks</span>
                </p>
              }
              icon2={
                <p className=" text-white font-semibold p-2 rounded-lg">
                  <span>
                    <GiPulleyHook className="mx-auto mb-2 text-xl" />
                  </span>
                  <span className="text-md">Context</span>
                </p>
              }
              icon3={
                <p className=" text-white font-semibold p-2 rounded-lg">
                  <span>
                    <SiRedux className="mx-auto mb-2 text-xl" />
                  </span>
                  <span className="text-md">Redux Toolkit</span>
                </p>
              }
              icon4={
                <p className=" text-white font-semibold p-2 rounded-lg">
                  <span>
                    <TbApi className="mx-auto mb-2 text-xl" />
                  </span>
                  <span className="text-md">API Integration</span>
                </p>
              }
            />
          </div>
          <div className="flex-1 flex flex-col justify-center items-center space-y-5">
            <h1 className="text-xl font-semibold font-Poppins text-font-primary">
              State Management & Others
            </h1>
            <p className="w-9/12 text-lg  font-normal font-Montserrat text-font-primary">
              I manage state and process of sharing data across different
              components in React and Next.Js using these tools, also other
              skills such as Integrating Api, Debugging, etc
            </p>
          </div>
        </div>
      </div>

      <div>
        <h1 className="text-4xl  font-Poppins font-bold text-font-primary text-center mb-7  underline">
          Portfolio Design
        </h1>
        <p className="text-xl font-Poppins font-normal text-slate-600 text-center mb-20 w-[30rem] mx-auto">
          Here are my projects Ive worked on. Want to see more?{" "}
          <Link
            className="underline font-semibold text-font-primary"
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
            <div className="absolute w-full h-full bg-font-primary mix-blend-multiply opacity-30 z-0 flex flex-col  justify-center items-center"></div>
            <div className="absolute w-full h-[90%] z-50 flex flex-col  justify-end items-center space-y-3 ">
              <h1 className="text-white text-2xl font-bold">Musiclab - Id</h1>
              <button className="bg-white text-font-primary py-2 font-semibold font-Poppins rounded-lg px-10 p-3 hover:bg-font-primary hover:text-white cursor-pointer">
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
          <button className="bg-font-primary border-2 border-font-primary text-white py-2 px-12 p-5 rounded-lg hover:bg-white hover:text-font-primary hover:border-2 hover:border-font-primary font-Poppins font-semibold">
            <Link href="/work">See More</Link>
          </button>
        </div>
      </div>
      <div className="flex justify-center items-center w-full min-h-screen mt-10 mb-10">
        <div className="w-[100%] h-full flex flex-row rounded-lg">
          <Form />
        </div>
      </div>
    </>
  );
};
export default page;
