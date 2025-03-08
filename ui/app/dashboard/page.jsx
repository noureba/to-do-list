"use client";
import React, { useEffect, useContext, useState, useLayoutEffect } from "react";
import { useRouter, redirect } from "next/navigation";
import { UserContext } from "../../contexts/userContext";
import SideBar from "../../components/admin/SideBar";
import Home from "../../components/admin/Home";
import AddNowTasks from "../../components/admin/AddNowTask";
import CompleteTasks from "../../components/admin/CompleteTasks";
import Settings from "../../components/admin/Setting";
import TaskCategories from "../../components/admin/TaskCategories";
import axios from  "axios"
import { toast } from "react-toastify";

function page() {
  const router = useRouter();
  const {
    backendURL,
    userData,
    view,
    setView,
    SideBarMenu,
    setSidBareMenu,
    loading,
    setLoading,
    login, setLogin,setTasks, tasks, taskView, setTasksVies, modal, 
  } = useContext(UserContext);



  useEffect(() => {
    const test = async () => {
      const { data } = await axios.get(backendURL + "/api/user/data", {
        withCredentials: true,
      });
      if (data.success) {
        setLoading(true)
      }else{
        router.push("/login")
        setLoading(false)
      }
     
    };
    test();
  }, []);


  useLayoutEffect(() => {
    const taskList = async () => {
      try {
        const { data } = await axios.get(backendURL + "/api/user/tasks", {
          withCredentials: true,
        });
        if (data.success) {
          setTasks(data.tasks);
        } else {
          toast(data.message);
        }
      } catch (error) {
        toast.error(error.message);
      }
    };
    taskList();
  }, [taskView, view, modal]);



  const renderComponent = () => {
    switch (view) {
      case "Tasks":
        return <Home />;
      case "Complet tasks":
        return <CompleteTasks />;
      case "Add new task":
        return <AddNowTasks />;
      case "Task categories":
        return <TaskCategories />;
      case "Settings":
        return <Settings />;
      default:
        return <Home />;
    }
  };

  return (
    <>
      {loading ? (
        <div className="flex gap-10">
          <div
            className={`${
              SideBarMenu ? "md:w-[5%] w-[100px]" : "md:w-[30%] w-[300px]"
            }`}
          >
            <SideBar />
          </div>
          <div className={`${SideBarMenu ? "w-[90%]" : "w-[65%]"}`}>
            {renderComponent()}
          </div>{" "}
        </div>
      ) : (
        <div className="text-center">
          <h1 className="text-3xl">loading...</h1>
        </div>
      )}
    </>
  );
}

export default page;
