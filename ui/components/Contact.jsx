'use client';
import React from "react";
import Link from "next/link";
import { MdOutlineMail } from "react-icons/md";
import { IoMdPhonePortrait } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import { FaMapMarkerAlt } from "react-icons/fa";

function Contact() {
  return (
    <>
      <div className="flex flex-col gap-10 py-20" id="contact">
        <div className="flex gap-3 justify-start items-buttom">
          <h3 className="font-bold text-3xl">Contact</h3>
          <span className="border border-[#8ECAE6] border-0 border-b-5 w-[150px] mb-2"></span>
        </div>
        <div className="flex flex-wrap gap-10 justify-around ">
          <div className="flex flex-col gap-5">
            <div className="border border-[#8ECAE6] border-2 flex justify-start items-center gap-2 py-3 px-10 rounded-">
              <i className="text-[50px] text-[#8ECAE6]">
                <MdOutlineMail />
              </i>
              <div>
                <p className="font-bold">Email</p>
                <Link href="">contact@example.com</Link>
              </div>
            </div>
            <div className="border border-[#8ECAE6] border-2 flex justify-start items-center gap-2 py-3 px-10 rounded-">
              <i className="text-[50px] text-[#8ECAE6]">
                <IoMdPhonePortrait />
              </i>
              <div>
                <p className="font-bold">Phone Support</p>
                <Link href="">+1 (123) 456-7890</Link>
              </div>
            </div>
            <div className="border border-[#8ECAE6] border-2 flex justify-start items-center gap-2 py-3 px-10 rounded-">
              <i className="text-[50px] text-[#8ECAE6]">
                <FaPhone />
              </i>
              <div>
                <p className="font-bold">Fix Phone</p>
                <Link href="">+1 (800) 123-4567</Link>
              </div>
            </div>
            <div className="border border-[#8ECAE6] border-2 flex justify-start items-center gap-2 py-3 px-10 rounded-">
              <i className="text-[50px] text-[#8ECAE6]">
                <FaMapMarkerAlt />
              </i>
              <div>
                <p className="font-bold">Visit Us</p>
                <Link href=""> 123 Productivity Lane, Suite 456</Link>
              </div>
            </div>
          </div>
          <div className="md:w-[500px] w-[90%] border border-[#8ECAE6] rounded-xl border-2 py-10 px-5">
            <form action="" className="flex flex-col gap-5">
              <div className="flex flex-col gap-1">
                <label className="font-bold text-lg" htmlFor="fullName">
                  Full name <span className="text-red">*</span>
                </label>
                <input
                  className="border border-[#8ECAE6] border-2 rounded-xl text-lg py-1 px-3 bg-white"
                  type="text"
                  name="fullName"
                  id="fullName"
                  required
                  placeholder="Jhon D..."
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="font-bold text-lg" htmlFor="fullName">
                  Email <span className="text-red">*</span>
                </label>
                <input
                  className="border border-[#8ECAE6] border-2 rounded-xl text-lg py-1 px-3 bg-white"
                  type="text"
                  name="fullName"
                  id="fullName"
                  required
                  placeholder="contact@example.com"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="font-bold text-lg" htmlFor="fullName">
                  Message
                </label>
                <textarea
                  className="border border-[#8ECAE6] border-2 rounded-xl text-lg py-1 px-3 bg-white"
                  type="text"
                  name="fullName"
                  id="fullName"
                  required
                  placeholder="type here you message ..."
                />
              </div>
              <input className="bg-[#8ECAE6] py-3 px-6 self-start rounded-xl" type="submit" value="Send" />
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
