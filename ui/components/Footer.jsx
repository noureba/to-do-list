'use client';
import React from "react";
import Link from "next/link";
import Logo from "../public/logo.png";
import Image from "next/image";

function Footer() {
  return (
    <>
      <footer className="bg-[#8ECAE6]  px-10 w-full mt-10">
        <div className="flex flex-wrap py-10 justify-between items-start gap-5">
          <div className="flex flex-col gap-2 md:w-[40%] w-[100%]">
            <div>
              <Image
              src={Logo}
              width={150}
              alt="logo"
              />
            </div>
            <p>
              powerful to-do list app designed to help you stay organized and
              productive. Focus on what matters, track your progress, and
              achieve your goals with ease.
            </p>
          </div>
          <div className="md:w-[25%] w-[100%]">
            <h3 className="font-bold py-5">Quick Links</h3>
            <ul className="flex flex-col gap-5">
              <li className="underline">
                <Link href="/"> Home</Link>
              </li>
              <li className="underline">
                <Link href="/#services"> Services</Link>
              </li>
              <li className="underline">
                <Link href="/#about"> About us</Link>
              </li>
            </ul>
          </div>
          <div className="md:w-[25%] w-[100%]">
            <h3 className="font-bold py-5">Quick Links</h3>
            <ul className="flex flex-col gap-5">
              <li className="underline">
                <Link href="/#contact"> Contact Us</Link>
              </li>
              <li className="underline">
                <Link href="/privacy-policy"> Privacy Policy</Link>
              </li>
              <li className="underline">
                <Link href="/terms-of-service"> Terms of Service</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center py-5 border border-0 border-t-1 border-gray-500 ">
          <p className="">
            By <span className="font-bold">Noureddine Bachikh</span>
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
