"use client";
import React, { useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import styled from "styled-components";

const Links = styled.a`
  box-shadow: inset 0 0 0 0 #0f1523;
  color: #0f1523;
  margin: 0 -0.25rem;
  padding: 0.75rem;
  transition: color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

  &:hover {
    box-shadow: inset 100px 0 0 0 #0f1523;
    color: white;
    padding: 0.75rem;
  }
`;

const Navbar = () => {
  const pathname = usePathname();

  return (
    <React.Fragment>
      <div className="max-w-7xl mx-auto h-[9rem] ">
        <div className="flex flex-row w-full h-full ">
          <div className="flex items-center flex-1 ml-10 lg:flex">
            <Image
              src="/logo-tama.webp"
              alt="logo tamasakti"
              width={80}
              height={80}
            />
          </div>
          <div className="flex-1">
            <ul className="flex-row items-center justify-end  lg:w-10/12 h-full lg:space-x-10 space-x-5 font-semibold cursor-pointer flex font-Poppins">
              <li>
                <Links
                  href="/"
                  className={`${
                    pathname === "/"
                      ? "bg-slate-200 px-4 py-2 text-white rounded-lg"
                      : ""
                  }`}
                >
                  Home
                </Links>
              </li>
              <li>
                <Links
                  href="/work"
                  className={`${
                    pathname === "/work"
                      ? "bg-slate-200 px-4 py-2 text-white rounded-lg"
                      : ""
                  }`}
                >
                  Portfolio
                </Links>
              </li>
              <li></li>
            </ul>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Navbar;
