import React from "react";
import Logo from "../../public/logo.png";
import Image from "next/image";

function Setting() {
  return (
    <>
      <div className="bg-gray-700  rounded-xl ">
        <div className="flex flex-col rounded-xl bg-gray-900 justify-center items-center gap-2 text-white p-5">
          <Image
            className="rounded-full border border-white bg-white"
            src={Logo}
            width={100}
            alt="logo"
          />
          <h2>noureddine</h2>
          <h3>nouredine@gmail.com</h3>
        </div>
        <div className="p-5 flex flex-col ">
          <ul className="flex flex-col gap-5">
            <li className="flex text-white gap-2 border-0 border-b justify-start items-center cursor-pointer">
              <p>change profile</p>
            </li>
            <li className="flex text-white gap-2 border-0 border-b justify-start items-center cursor-pointer">
              change name
            </li>
            <li className="flex text-white gap-2 border-0 border-b justify-start items-center cursor-pointer">
             change email
            </li>
            <li className="flex text-white gap-2 border-0 border-b justify-start items-center cursor-pointer">
              change password
            </li>
            <li className="flex text-white gap-2 border-0 border-b justify-start items-center cursor-pointer">
              Delete account
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Setting;
