import React from "react";
import Image from "next/image";
import Link from "next/link";
import ListImage from "../public/List.png";

function Hero() {
  return (
    <>
      <div className="flex flex-wrap-reverse justify-between items-center md:h-screen">
        <div className="flex flex-col gap-10">
          <div>
            <p className="text-5xl font-bold">
              Stay Organized, <span className="text-[#8ECAE6]">Achieve More</span>
            </p>
          </div>
          <p>
            Simplify your life with our powerful, easy-to-use to-do list app.{" "}
            <br />
            Manage tasks, set priorities, and hit your goals — all in one place.
          </p>
          <button className="bg-[#8ECAE6] py-3 px-6 self-start rounded-xl">
            <Link href="/register">Get Started for Free</Link>
          </button>
        </div>
        <div>
          <Image
            src={ListImage}
            width={500}
            height={500}
            alt="Picture of the author"
          />
        </div>
      </div>
    </>
  );
}

export default Hero;
