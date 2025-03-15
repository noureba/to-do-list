'use client';
import axios from "axios";
import React, { useContext, useLayoutEffect, useState } from "react";
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import { toast } from "react-toastify";
import { UserContext } from "../../contexts/userContext";
import { IoMdCloseCircleOutline } from "react-icons/io";

function Home() {
  const { backendURL, tasks, taskView, setTasksView, modal, setModal, setUserData, setLogin, login } =
    useContext(UserContext);

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
    }, [login]);

  const [edit, setNewEdite] = useState({
    postId: sessionStorage.getItem("taskId"),
    title: "",
    desc: "",
    categorie: "",
    date: "",
  });

  const handleDelete = async (taskId) => {
    try {
      const { data } = await axios.delete(
        backendURL + "/api/task/delete-task",
        {
          data: { postId: taskId },
          withCredentials: true,
        }
      );
      if (data.success) {
        toast.success("Task delete");
        setTasksView(!taskView);
      } else {
        toast.error("task not delete");
      }
    } catch (error) {
      toast.error(error.messae);
    }
  };

  const handleEdite = (id) => {
    sessionStorage.setItem("taskId", id);
    setModal(true);
  };

  const editeHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.put(
        backendURL + "/api/task/edit-task",
        edit,
        {
          withCredentials: true,
        }
      );
      if (data.success) {
        toast.success(data.message);
        setNewEdite({
          postId: sessionStorage.getItem("taskId"),
          title: "",
          desc: "",
          categorie: "",
          date: "",
        });
        setModal(false);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(data.message);
    }
  };

  const closeModalHandler = () => {
    setModal(false);
  };

  const checkboxHandler = async (postId)=>{
    try {
      const {data} = await axios.put(backendURL+"/api/task/add-complete-task",{postId},{
        withCredentials: true
      })
      if(data.success){
        toast.success(data.message)
        setTasksView(!taskView);
      }else{
        toast.error(data.message)
      }
    } catch (error) {
      return toast.error(error.messae)
    }
  }

  return (
    <>
      <div className="flex gap-3 justify-start items-buttom">
        <h3 className="font-bold text-3xl">Hi, noureddine</h3>
        <span className="border border-[#8ECAE6] border-0 border-b-5 w-[150px] mb-2"></span>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2 border border-gray-300"></th>
              <th className="px-4 py-2 border border-gray-300">Tasks</th>
              <th className="px-4 py-2 border border-gray-300">Categorie</th>
              <th className="px-4 py-2 border border-gray-300">Date</th>
              <th className="px-4 py-2 border border-gray-300">Others</th>
            </tr>
          </thead>
          <tbody>
            <React.Suspense fallback="loading ...">
              {tasks ? tasks
                .filter((task) => task.status === "new")
                .map((task, index) => (
                  <tr className="hover:bg-gray-100" key={index}>
                    <td className="px-4 py-2 border border-gray-300">
                      <input type="checkbox" onChange={()=> checkboxHandler(task._id)}/>
                    </td>
                    <td className="px-4 py-2 border border-gray-300">
                      {task.title}
                    </td>
                    <td className="px-4 py-2 border border-gray-300">
                      {task.categorie}
                    </td>
                    <td className="px-4 py-2 border border-gray-300">
                      {task.date}
                    </td>
                    <td className="flex justify-around items-center gap-2 px-2 py-2 border border-gray-300">
                      <button
                        className="flex justify-around items-center bg-green-600 text-white px-2 py-1 rounded gap-2"
                        onClick={() => handleEdite(task._id)}
                      >
                        <i>
                          <CiEdit className="text-white" />
                        </i>
                        <p className="text-white">Edit</p>
                      </button>
                      <button
                        className="flex justify-around items-center bg-red-600 text-white px-2 py-1 rounded gap-2"
                        onClick={() => handleDelete(task._id)}
                      >
                        <i>
                          <MdDeleteOutline className="text-white" />
                        </i>
                        <p className="text-white">Delete</p>
                      </button>
                    </td>
                  </tr>
                )): null}
            </React.Suspense>
          </tbody>
        </table>
      </div>
      {modal ? (
        <div>
          <div className="absolute inset-0 bg-gray-800 opacity-60"></div>
          <div className="absolute  top-[20%] md:left-[35%] left-[10%] bg-white rounded">
            <div className="border rounded py-10 px-5 w-[400px]">
              <button
                className="absolute right-0 top-[-2px]"
                onClick={closeModalHandler}
              >
                <IoMdCloseCircleOutline className="text-red-500 text-3xl" />
              </button>
              <form
                className="flex flex-col gap-5"
                action=""
                onSubmit={editeHandler}
              >
                <div className="flex flex-col">
                  <label htmlFor="title">Title *</label>
                  <input
                    className="border rounded px-2 py-1"
                    type="text"
                    name="title"
                    value={edit.title}
                    onChange={(e) =>
                      setNewEdite({ ...edit, title: e.target.value })
                    }
                    required
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="desc">Desciption</label>
                  <textarea
                    className="border rounded px-2 py-1"
                    name="desc"
                    id="desc"
                    value={edit.desc}
                    onChange={(e) =>
                      setNewEdite({ ...edit, desc: e.target.value })
                    }
                  ></textarea>
                </div>
                <div className="flex flex-flex gap-3 items-center">
                  <label htmlFor="Categories">Categories</label>
                  <select
                    className="border rounded px-2 py-1"
                    name="Categories"
                    id="Categories"
                    value={edit.categorie}
                    onChange={(e) =>
                      setNewEdite({ ...edit, categorie: e.target.value })
                    }
                  >
                    <option value="work">work</option>
                    <option value="sport">Sport</option>
                    <option value="home">home</option>
                  </select>
                </div>
                <div className="flex flex-flex gap-3 items-center">
                  <label htmlFor="date">Date</label>
                  <input
                    className="border rounded px-2 py-1"
                    type="time"
                    name="date"
                    value={edit.date}
                    onChange={(e) =>
                      setNewEdite({ ...edit, date: e.target.value })
                    }
                  />
                </div>
                <div className="text-center">
                  <input
                    className="px-5 py-2 bg-[#8ECAE6] rounded "
                    type="submit"
                    value="Add task"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default Home;
