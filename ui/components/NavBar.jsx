"use client";
import React, { useContext, useState, useLayoutEffect } from "react";
import Link from "next/link";
import { UserContext } from "../contexts/userContext";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import Image from "next/Image";
import { FaBars } from "react-icons/fa6";
import { IoIosCloseCircleOutline } from "react-icons/io";
import Logo from "../public/logo.png";

function NavBar() {
  const router = useRouter();
  const { userData, backendURL, setUserData, login , setLogin } = useContext(UserContext);
  const [menu, setMenu] = useState(false);

  const logoutHandler = async () => {
    try {
      const { data } = await axios.post(
        backendURL + "/api/auth/logout",
        {},
        {
          withCredentials: true,
        }
      );
      if (data.success) {
        toast.success(data.message);
        setLogin(false);
        setUserData({});
        router.push("/login");
      } else {
        toast.error(data.success);
      }
    } catch (error) {
      return toast.error(error.message);
    }
  };

  const mobileMenuHandler = () => {
    setMenu(true);
  };
  const closeMobileMenuHandler = () => {
    setMenu(false);
  };

  useLayoutEffect(() => {
    const test = async () => {
      const { data } = await axios.get(backendURL + "/api/user/data", {
        withCredentials: true,
      });
      if (data.success) {
        setUserData(data);
        setLogin(true)
      }else{
        setUserData({})
        setLogin(false)
      }
     
    };
    test();
  }, [login]);

  return (
    <>
      <header className="flex justify-between items-center py-5 px-10" id="home">
        <div>
          <Link href="/">
            <Image src={Logo} width={100} height={100} alt="Logo" />
          </Link>
        </div>
        <div>
          <ul className="flex hidden gap-5 md:flex ">
            <li>
              <Link href="/" className="underline text-base">
                Home
              </Link>
            </li>
            <li>
              <Link className=" text-base" href="/#about">ABOUT</Link>
            </li>
            <li>
              <Link className=" text-base" href="/#services">SERVICES</Link>
            </li>
            <li>
              <Link className=" text-base" href="/#contact">CONTACT</Link>
            </li>
          </ul>
        </div>
        {userData.success ? (
          <div className="flex flex-col  md:block hidden">
            <p className="flex justify-center items-center gap-2">
              Hi, <span className="undeline"> {userData.user.name}</span>
              <Image
                className="rounded"
                src={userData.user.photo}
                width={30}
                height={30}
                alt="profile photo"
              />
            </p>
            <button className="" onClick={logoutHandler}>
              Log out
            </button>
          </div>
        ) : (
          <div className="flex justify-center items-center gap-5 md:block hidden">
            <Link href="/login" className="underline decoration-[#8ECAE6] px-5">
              Sing in
            </Link>
            <button className="bg-[#8ECAE6] py-2 px-3 rounded-xl">
              <Link href="/register">Sing up</Link>
            </button>
          </div>
        )}        
        <div className="md:hidden">
          <button onClick={mobileMenuHandler}>
            <FaBars className="text-2xl" />
          </button>
          <div
            className={`md:hidden ${
              menu ? "fixed" : "hidden"
            } bg-blue-100 inset-0 flex flex-col gap-10 `}
          >
            <button
              className="absolute -right-0 p-5"
              onClick={closeMobileMenuHandler}
            >
              <IoIosCloseCircleOutline className="text-2xl text-red-500" />
            </button>
            <div className="bg-blue-200 py-10">
              {userData.success ? (
                <div className="flex flex-col">
                  <p className="flex justify-center items-center gap-2">
                    Hi, <span className="undeline"> {userData.user.name}</span>
                    <Image
                      className="rounded"
                      src={userData.user.photo}
                      width={30}
                      height={30}
                      alt="profile photo"
                    />
                  </p>
                  <button className="" onClick={logoutHandler}>
                    Log out
                  </button>
                </div>
              ) : (
                <div className="flex justify-around items-center gap-5">
                  <Link
                    href="/login"
                    className="underline mx-2 decoration-[#8ECAE6]"
                    onClick={closeMobileMenuHandler}
                  >
                    Sing in
                  </Link>
                  <button
                    className="bg-[#8ECAE6] py-2 px-3 rounded-xl"
                    onClick={closeMobileMenuHandler}
                  >
                    <Link href="/register">Sing up</Link>
                  </button>
                </div>
              )}
            </div>
            <ul className="flex flex-col gap-5 p-10">
              <li>
                <Link
                  href="/"
                  className="underline"
                  onClick={closeMobileMenuHandler}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#about" onClick={closeMobileMenuHandler}>
                  ABOUT
                </Link>
              </li>
              <li>
                <Link href="/#services" onClick={closeMobileMenuHandler}>
                  SERVICES
                </Link>
              </li>
              <li>
                <Link href="/contact" onClick={closeMobileMenuHandler}>
                  CONTACT
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
}

export default NavBar;
