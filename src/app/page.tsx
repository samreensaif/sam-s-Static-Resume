"use client";
import React from "react";

import Typewriter from 'typewriter-effect';
import { buttonVariants } from "@/components/ui/button";
import Icons from "./icons/icons";
import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <div className=" md:flex md:justify-center overflow-hidden  md:flex-row md:flex-wrap">
        <div id="left" className=" w-full md:w-1/2 h-screen flex justify-center sm:place-items-center md:place-items-start flex-col gap-10 text-5xl text-black bg-teal-500">
        <h2 className="ml-11">Hi,</h2>
        <h2 className="ml-11">I&apos;m <strong className="text-red-800">Samreen Saif</strong></h2>
          <h2 className="ml-11">
            <Typewriter
              options={{
                strings: ['A skilled Web Developer', 'A Coding Enthusiast', 'A Problem Solver'],
                autoStart: true, // Automatically start typing
                loop: true, // Loop through the strings
                deleteSpeed: 50, // Adjust the delete speed if needed
              }}
            />
          </h2>
          <div className="flex gap-8 m-10">
          <Link
            href={"/Resume/index.html"} target="_blank"
            className={`${buttonVariants({
              variant: "outline",
            })} text-lg font-bold transition-colors duration-300 hover:bg-red-800 hover:text-white active:scale-90`}
          >
            Download CV
          </Link>
          <Link
            href={"/contact"}
            className={`${buttonVariants({
              variant: "outline",
            })} text-lg font-bold transition-colors duration-300 hover:bg-red-800 hover:text-white active:scale-90`}
          >
            Hire me
          </Link>
        </div>
          <Icons/>

        </div>
        <div id="right" className=" w-full md:w-1/2  bg-yellow-400 flex justify-center items-center">
          <Image src="/assets/whatsappAvatar.webp" alt="WhatsApp Avatar" width={500} height={500} className="rounded-full mt-8 mb-10 w-3/4 md:w-auto md:mt-5 border-none shadow transition-all duration-1000 hover:shadow-2xl hover:shadow-red-800 hover:animate-pulse" />
        </div>
      </div>
    </>
  );
}
