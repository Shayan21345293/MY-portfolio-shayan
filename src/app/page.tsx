"use client";

import React from "react";
import Typewriter from "typewriter-effect";
import Image from "next/image";

export default function Page() {
  return (
    <div>
      <div className="relative w-full bg-black">
        

        {/* Hero Section */}
        <div className="flex flex-col md:flex-row items-center justify-between mt-16 mx-5">
          {/* Text Section */}
          <div className="font-bold text-white text-5xl">
            <h1>MY NAME IS SHAYAN</h1>
            <h2 className="mt-3">I AM A</h2>
            <h2 className="mt-6 text-blue-500">
              <Typewriter
                options={{
                  strings: [
                    "GRAPHIC DESIGNER",
                    "PROGRAMMER",
                    "HACKER",
                    "VIDEO EDITOR",
                    "WEB DEVELOPER",
                    "FREELANCER",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h2>
          </div>

          {/* Image Section */}
          <div className="mt-8 bg-black md:mt-0 md:ml-10">
            <Image
              src="/logo.png"
              alt="shayan"
              height={200}
              width={450}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
