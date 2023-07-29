import Link from "next/link";
import React from "react";
import { AiFillPhone } from "react-icons/ai";
import { MdMarkEmailRead } from "react-icons/md";

const Footer = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row lg:mt-0 mt-10 lg:mb-0 mb-10 w-[80%] h-[10rem] items-start lg:items-center mx-auto gap-10 text-xl font-bold text-font-primary justify-between">
        <div className="flex flex-row gap-10">
          <Link
            href="https://github.com/tamasakti"
            className="hover:text-blue-800 hover:underline"
            target="_blank"
          >
            Github
          </Link>
          <Link
            href="https://linkedin.com/in/tamasakti"
            className="hover:text-blue-800 hover:underline"
            target="_blank"
          >
            Linkedin
          </Link>
        </div>
        <div className="flex flex-col lg:flex-row gap-5 lg:gap-10">
          <section className="flex flex-row gap-3 items-center">
            <AiFillPhone />
            <p>+62 8979244266</p>
          </section>
          <section className="flex flex-row gap-3 items-center">
            <MdMarkEmailRead />
            <p>gumilangtamasakti@gmail.com</p>
          </section>
        </div>
      </div>
    </>
  );
};

export default Footer;
