"use client";
import { sendContactForm } from "@/lib/api";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

type formvalues = {
  name: string;
  email: string;
  message: string;
  subject: string;
};
const Form = () => {
  const form = useForm<formvalues>({
    defaultValues: {
      name: "",
      email: "",
      message: "",
      subject: "",
    },
  });

  const {
    register,
    formState: { errors },
    watch,
    handleSubmit,
    reset,
  } = form;

  function handleSendMessage(data: formvalues) {
    fetch("../api/contact.tsx", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (res.status === 200) {
          alert("Thanks for reaching me out");
        } else {
          alert("Email/password is invalid");
        }
      })
      .catch((e) => {
        console.log(e);
        reset();
      });
  }
  return (
    <div className="w-[80%] shadow-lg mx-auto flex flex-row justify-center items-center rounded-lg bg-slate-50">
      <div className="w-10/12 lg:w-[85%] bg-slate-50 h-[40rem] flex flex-col justify-center lg:ml-20">
        <h1 className="text-4xl text-font-primary font-bold font-Poppins">
          Contact Me
        </h1>
        <p className="w-10/12 lg:w-6/12 font-normal font-Poppins mt-3">
          Feel free to contact me any time. We will get back to you as soon as i
          can
        </p>
        <form
          className="flex flex-col mt-5 space-y-3 10/12 lg:w-8/12"
          onSubmit={handleSubmit(handleSendMessage)}
          method="POST"
        >
          <label className="font-Poppins font-normal">Name</label>
          <input
            type="text"
            {...register("name", {
              required: {
                value: true,
                message: "Please tell me your name",
              },
            })}
            className="border-2 border-font-primary rounded-lg  py-2 mt-2 p-2"
          />
          <label>Email</label>
          <input
            type="email"
            {...register("email", {
              pattern: {
                value:
                  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                message: "Please put valid email format with (@)",
              },
            })}
            className="border-2 border-font-primary rounded-lg  py-2 mt-2 p-2"
          />
          <label className="font-Poppins font-normal">Subject</label>
          <input
            type="text"
            {...register("subject", {
              required: {
                value: true,
                message: "Please tell me your subject",
              },
            })}
            className="border-2 border-font-primary rounded-lg  py-2 mt-2 p-2"
          />
          <label>Message</label>
          <textarea
            {...register("message", {
              required: {
                value: true,
                message: "Please tell your intention",
              },
            })}
            className="border-2 border-font-primary rounded-lg  py-8 mt-2 p-2"
          ></textarea>
          <button
            type="submit"
            className="bg-font-primary text-white border-2 border-font-primary p-3 font-Poppins font-semibold hover:bg-white hover:text-font-primary rounded-lg"
          >
            SEND
          </button>
        </form>
      </div>
      <div className=" hidden lg:w-[15%] bg-font-primary h-[40rem] transition-all duration-300 ease-in-out"></div>
    </div>
  );
};

export default Form;
