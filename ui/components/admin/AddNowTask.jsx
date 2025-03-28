'use client';
import React, { useContext, useState, useLayoutEffect } from "react";
import axios from "axios";
import { UserContext } from "../../contexts/userContext";
import { toast } from "react-toastify";

function AddNowTask() {
  const { backendURL, taskView, setTasksView } = useContext(UserContext);
  const [task, setNewTask] = useState({
    title: "",
    desc: "",
    categorie: "",
    date: "",
  });
  const [categoriesData, setCategoryData] = useState([]);

  useLayoutEffect(() => {
    const Data = async () => {
      try {
        const { data } = await axios.get(backendURL + "/api/user/categories", {
          withCredentials: true,
        });
        if (data.success) {
          setCategoryData(data.categories);
        } else {
          toast.error(data.message);
        }
      } catch (error) {
        toast.error(error.message);
      }
    };
    Data();
  }, []);

  const addNewTaskHandler = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(
        backendURL + "/api/task/add-new-task",
        task,
        {
          withCredentials: true,
        }
      );
      if (data.success) {
        toast.success(data.message);
        setNewTask({
          title: "",
          desc: "",
          categorie: "",
          date: "",
        });
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(data.message);
    }
  };
  return (
    <>
      <div className="flex gap-3 justify-start items-buttom">
        <h3 className="font-bold text-3xl">Add now Tasks</h3>
        <span className="border border-[#8ECAE6] border-0 border-b-5 w-[150px] mb-2"></span>
      </div>
      <div className="border rounded py-10 px-5">
        <form
          className="flex flex-col gap-5"
          action=""
          onSubmit={addNewTaskHandler}
        >
          <div className="flex flex-col">
            <label htmlFor="title">Title *</label>
            <input
              className="border rounded px-2 py-1"
              type="text"
              name="title"
              value={task.title}
              onChange={(e) => setNewTask({ ...task, title: e.target.value })}
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="desc">Desciption</label>
            <textarea
              className="border rounded px-2 py-1"
              name="desc"
              id="desc"
              value={task.desc}
              onChange={(e) => setNewTask({ ...task, desc: e.target.value })}
            ></textarea>
          </div>
          <div className="flex justify-around items-center">
            <div className="flex flex-flex gap-3 items-center">
              <label htmlFor="Categories">Categories</label>
              <select
                className="border rounded px-2 py-1"
                name="Categories"
                id="Categories"
                value={task.categorie}
                onChange={(e) =>
                  setNewTask({ ...task, categorie: e.target.value })
                }
              >
                {categoriesData.map((category, index) => (
                  <option value={category.title} key={index}>
                    {category.title}
                  </option>
                ))}
                {categoriesData && categoriesData.length > 0 ? (
                  categoriesData.map((category, index) => (
                    <option value={category.title} key={index}>
                      {category.title}
                    </option>
                  ))
                ) : (
                  <option colSpan="2" className="text-center py-4">
                    No categories found
                  </option>
                )}
              </select>
            </div>
            <div className="flex flex-flex gap-3 items-center">
              <label htmlFor="date">Date</label>
              <input
                className="border rounded px-2 py-1"
                type="time"
                name="date"
                value={task.date}
                onChange={(e) => setNewTask({ ...task, date: e.target.value })}
              />
            </div>
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
    </>
  );
}

export default AddNowTask;
