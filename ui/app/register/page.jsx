"use client";
import React, { useContext, useState, useLayoutEffect } from "react";
import ListImage from "../../public/List.png";
import Image from "next/Image";
import Link from "next/link";
import { CgProfile } from "react-icons/cg";
import { MdOutlineMail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { UserContext } from "../../contexts/userContext";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

function page() {
  const { backendURL, loading, setLoading } = useContext(UserContext);
  const router = useRouter();
  const [info, setInfo] = useState({
    name: "",
    email: "",
    password: "",
  });
  const registerHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        backendURL + "/api/auth/register",
        info,
        {
          withCredentials: true,
        }
      );
      if (data.success) {
        toast.success(data.message);
        router.push("/login");
      }else{
        toast.success(data.message);

      }
    } catch (error) {
      return toast.error(error.message);
    }
  };

  useLayoutEffect(() => {
    const test = async () => {
      const { data } = await axios.get(backendURL + "/api/user/data", {
        withCredentials: true,
      });
      console.log(data);

      if (data.success) {
        router.push("/dashboard");
        setLoading(false)
      } else {
        setLoading(true)
      }
    };
    test();
  }, []);
  return (
    <>
      {loading? <div className="flex flex-wrap justify-around items-center py-10">
        <div>
          <Image
            src={ListImage}
            width={600}
            height={600}
            alt="Picture of the author"
          />
        </div>
        <div className="bg-[#8ECAE6] flex flex-col gap-10 py-5 px-5 rounded md:w-[30%] w-[90%]">
          <h3 className="text-center font-bold text-3xl">Sing up</h3>
          <form className="flex flex-col gap-5">
            <div className="bg-white flex gap-3 border rounded justify-start items-center p-2">
              <i className=" text-xl">
                <CgProfile />
              </i>
              <input
                className="outline-hidden text-lg"
                type="text"
                placeholder="Full name"
                value={info.name}
                onChange={(e) => setInfo({ ...info, name: e.target.value })}
                required
              />
            </div>
            <div className="bg-white flex gap-3 border rounded justify-start items-center p-2">
              <i className=" text-xl">
                <MdOutlineMail />
              </i>
              <input
                className="outline-hidden text-lg"
                type="email"
                placeholder="Email"
                value={info.email}
                onChange={(e) => setInfo({ ...info, email: e.target.value })}
                required
              />
            </div>
            <div className="bg-white flex gap-3 border rounded justify-start items-center p-2">
              <i className=" text-xl">
                <RiLockPasswordFill />
              </i>
              <input
                className="outline-hidden text-lg"
                type="password"
                placeholder="Password"
                value={info.password}
                onChange={(e) => setInfo({ ...info, password: e.target.value })}
                required
              />
            </div>
            <div className="text-center">
              <input
                className="bg-white border py-2 px-6 rounded"
                type="submit"
                value="Sing up"
                onClick={registerHandler}
              />
            </div>
          </form>
          <p>
            I have account{" "}
            <Link className="underline text-blue" href="/login">
              Sing in
            </Link>
          </p>
        </div>
      </div>: <h2>Loading ...</h2>}
    </>
  );
}

export default page;
