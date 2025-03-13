import React, { useContext, useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import { UserContext } from "../../contexts/userContext";
import axios from "axios";
import { FaCamera } from "react-icons/fa";
import { toast } from "react-toastify";
import { FaRegSave } from "react-icons/fa";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";
import { AiOutlineNumber } from "react-icons/ai";

function Setting() {
  const fileInputRef = useRef(null);
  const {
    userData,
    backendURL,
    setUserData,
    login,
    setLogin,
    profile,
    setProfile,
    taskView,
    setTasksView,
  } = useContext(UserContext);

  const [newName, setNewName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [otp, setOtp] = useState("");

  useLayoutEffect(() => {
    const test = async () => {
      const { data } = await axios.get(backendURL + "/api/user/data", {
        withCredentials: true,
      });
      if (data.success) {
        setUserData(data);
        setLogin(true);
      } else {
        setUserData({});
        setLogin(false);
      }
    };
    test();
  }, [login, taskView]);

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  const handelFileChange = (e) => {
    const file = e.target.files[0];
    if (file.type.startsWith("image/")) {
      setProfile(file);
    } else {
      toast.error("Please upload an image");
    }
  };

  const handelProfile = () => {
    const formData = new FormData();
    formData.append("file", profile);
    axios
      .post(backendURL + "/api/user/profile", formData, {
        withCredentials: true,
      })
      .then((res) => {
        setTasksView(!taskView);
        toast.success(res.data.message);
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  const handelNewName = () => {
    if (newName) {
      axios
        .post(
          backendURL + "/api/user/change-name",
          { newName },
          {
            withCredentials: true,
          }
        )
        .then((res) => {
          setTasksView(!taskView);
          setNewName("");
          toast.success(res.data.message);
        })
        .catch((err) => {
          toast.error(err.message);
        });
    } else {
      toast.error("please add you name");
    }
  };

  const handelNewEmail = () => {
    if (newEmail) {
      axios
        .post(
          backendURL + "/api/user/change-email",
          { newEmail },
          {
            withCredentials: true,
          }
        )
        .then((res) => {
          setTasksView(!taskView);
          setNewEmail("");
          toast.success(res.data.message);
        })
        .catch((err) => {
          toast.error(err.message);
        });
    } else {
      toast.error("please add you email");
    }
  };
  const handelVerify = () => {};

  const hnadelSendEmailVerification = async () => {
    try {
      const { data } = await axios.post(
        backendURL + "/api/auth/send-verification-email-otp",
        {},
        {
          withCredentials: true,
        }
      );
      if (data.success) {
        toast.success(data.message);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      return toast.error(error.message);
    }
  };

  return (
    <>
      <div className="bg-gray-700  rounded-xl ">
        <div className="flex flex-col rounded-xl bg-gray-900 justify-center items-center gap-2 text-white p-5">
          <Image
            className="rounded-full border border-white bg-white"
            src={backendURL + "/" + userData.user.photo}
            width={100}
            height={100}
            alt="profile"
          />
          <input
            className="hidden"
            type="file"
            ref={fileInputRef}
            accept="image/*"
            onChange={handelFileChange}
          />
          <div className="flex gap-3 flex-wrap">
            <button
              className="flex gap-2 bg-white p-2 justify-center items-center text-gray-900 rounded cursor-pointer"
              onClick={triggerFileInput}
            >
              <FaCamera />
              <p>change profile</p>
            </button>
            {profile ? (
              <button
                className="flex gap-2 bg-green-500 p-2 justify-center items-center text-gray-900 rounded cursor-pointer"
                onClick={handelProfile}
              >
                <FaRegSave />
                <p>Save</p>
              </button>
            ) : null}
          </div>

          <h2>{userData.user.name}</h2>
          <h3>{userData.user.email}</h3>
        </div>
        <div className="p-5 flex flex-col ">
          <ul className="flex flex-col gap-5">
            <li className="flex text-white gap-2 border-0 border-b justify-start items-center cursor-pointer">
              <h3 className="text-xl">Change name : </h3>
              <div className="bg-white text-gray-900 flex gap-2 border rounded justify-start items-center p-1">
                <i className="text-xl">
                  <MdDriveFileRenameOutline />
                </i>
                <input
                  className="outline-hidden text-lg w-[100%] "
                  type="text"
                  placeholder="New Name"
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                  required
                />
                <button
                  className="flex gap-2 bg-green-500 p-2 justify-center items-center text-gray-900 rounded cursor-pointer"
                  onClick={handelNewName}
                >
                  <FaRegSave />
                  <p>Save</p>
                </button>
              </div>
            </li>
            <li className="flex text-white gap-2 border-0 border-b justify-start items-center cursor-pointer">
              <h3 className="text-xl">Change email : </h3>
              <div className="bg-white text-gray-900 flex gap-2 border rounded justify-start items-center p-1">
                <i className="text-xl">
                  <MdOutlineEmail />
                </i>
                <input
                  className="outline-hidden text-lg w-[100%] "
                  type="email"
                  placeholder="New email"
                  value={newEmail}
                  onChange={(e) => setNewEmail(e.target.value)}
                  required
                />
                <button
                  className="flex gap-2 bg-green-500 p-2 justify-center items-center text-gray-900 rounded cursor-pointer"
                  onClick={handelNewEmail}
                >
                  <FaRegSave />
                  <p>Save</p>
                </button>
              </div>
            </li>
            <li className="flex text-white gap-2 border-0 border-b justify-start items-center cursor-pointer">
              <div>
                <h3 className="text-xl">Verify email : </h3>
                <p
                  className="underline text-blue-500"
                  onClick={hnadelSendEmailVerification}
                >
                  Send email verification
                </p>
              </div>
              <div className="bg-white text-gray-900 flex gap-2 border rounded justify-start items-center p-1">
                <i className="text-xl">
                  <AiOutlineNumber />
                </i>
                <input
                  className="outline-hidden text-lg w-[100%] "
                  type="number"
                  placeholder="OTP"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  required
                />
                <button
                  className="flex gap-2 bg-green-500 p-2 justify-center items-center text-gray-900 rounded cursor-pointer"
                  onClick={handelVerify}
                >
                  <FaRegSave />
                  <p>Verify</p>
                </button>
              </div>
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
