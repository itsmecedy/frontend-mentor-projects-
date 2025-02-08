import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <div className="max-w-[80rem] mx-auto ">
        <div className="flex items-center flex-col lg:flex-row justify-between py-10 px-2  gap-5">
          <div className="flex justify-center items-center ">
            <p className=" ">Copyright © 2025. All rights are reserved</p>
          </div>
          <div className=" text-3xl  flex flex-row gap-5">
            <a
              href="https://www.facebook.com/hillo.cabello/"
              target="_blank"
              rel="noreferrer"
              className=" hover:text-blue-700"
            >
              <FaFacebook />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/cedrick-mancio/"
              className=" hover:text-blue-500"
            >
              <FaLinkedin />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/itsmecedy"
              className=" hover:text-blue-500"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
