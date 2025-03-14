import React, { useContext, useState } from "react";
import { UserContext } from "../../contexts/userContext";
import Image from "next/image";
import Logo from "../../public/logo.png";
import { FaBookOpen } from "react-icons/fa";
import { FaTasks } from "react-icons/fa";
import { MdOutlineTaskAlt } from "react-icons/md";
import { MdOutlineAddTask } from "react-icons/md";
import { GrTasks } from "react-icons/gr";
import { IoIosSettings } from "react-icons/io";
import { IoLogOutSharp } from "react-icons/io5";

function SideBar() {
  const { backendURL, userData, setView, SideBarMenu, setSidBareMenu } =
    useContext(UserContext);

  return (
    <>
      <div className="bg-gray-700  rounded-xl">
        <div className="p-2 text-center">
          <button onClick={() => setSidBareMenu(!SideBarMenu)}>
            <FaBookOpen className="text-white text-3xl" />
          </button>
        </div>
        <div className="flex flex-col rounded-xl bg-gray-900 justify-center items-center gap-2 text-white p-5 ">
          <Image
            className="rounded-full border border-white bg-white"
            src={userData.user.photo? backendURL + "/"+userData.user.photo: Logo}
            width={`${SideBarMenu ? 70 : 100}`}
            height={50}
            alt="logo"
          />
          {!SideBarMenu ? (
            <div>
              <h2>{userData.user.name}</h2>
              <h3>{userData.user.email}</h3>
            </div>
          ) : null}
        </div>
        <div className="p-5 flex flex-col">
          <ul className="flex flex-col gap-5">
            <li
              className="flex text-white gap-2 border-0 border-b justify-start items-center cursor-pointer"
              onClick={() => setView("Tasks")}
            >
              <i>
                <FaTasks className="text-3xl" />
              </i>
              {!SideBarMenu ? <p>Tasks</p> : null}
            </li>
            <li
              className="flex text-white gap-2 border-0 border-b justify-start items-center cursor-pointer"
              onClick={() => setView("Complet tasks")}
            >
              <i>
                <MdOutlineTaskAlt className="text-3xl" />
              </i>

              {!SideBarMenu ? <p>Complet tasks</p> : null}
            </li>
            <li
              className="flex text-white gap-2 border-0 border-b justify-start items-center cursor-pointer"
              onClick={() => setView("Add new task")}
            >
              <i>
                <MdOutlineAddTask className="text-3xl" />
              </i>

              {!SideBarMenu ? <p>Add new task</p> : null}
            </li>
            <li
              className="flex text-white gap-2 border-0 border-b justify-start items-center cursor-pointer"
              onClick={() => setView("Task categories")}
            >
              <i>
                <GrTasks className="text-3xl" />
              </i>

              {!SideBarMenu ? <p>Task categories</p> : null}
            </li>
            <li
              className="flex text-white gap-2 border-0 border-b justify-start items-center cursor-pointer"
              onClick={() => setView("Settings")}
            >
              <i>
                <IoIosSettings className="text-3xl" />
              </i>

              {!SideBarMenu ? <p>Settings</p> : null}
            </li>
          </ul>
          <div className="flex text-white gap-2 justify-start items-center mt-10 cursor-pointer">
            <i>
              <IoLogOutSharp className="text-3xl" />
            </i>
            {!SideBarMenu ? <p>Logout</p> : null}
          </div>
        </div>
      </div>
    </>
  );
}

export default SideBar;
