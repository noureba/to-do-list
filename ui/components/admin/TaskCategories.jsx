'use client';
import React, { useState, useContext, useLayoutEffect } from "react";
import { MdDeleteOutline } from "react-icons/md";
import axios from "axios";
import { toast } from "react-toastify";
import { UserContext } from "../../contexts/userContext";

function TaskCategories() {
  const { backendURL, taskView, setTasksView } = useContext(UserContext);
  const [Category, setCategory] = useState({ title: "" });
  const [categoriesData, setCategoryData] = useState({});

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
  }, [taskView]);

  const addCategoryHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        backendURL + "/api/category/add-category",
        Category,
        {
          withCredentials: true,
        }
      );
      if (data.success) {
        toast.success(data.message);
        setCategory({ title: "" });
        setTasksView(!taskView);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      return toast.error(error.message);
    }
  };

  const deletHandler = async (id) => {
    try {
      const { data } = await axios.delete(
        backendURL + "/api/category/delete-category",
        {
          withCredentials: true,
          data: { categoryId: id },
        }
      );
      if (data.success) {
        toast.success(data.message);
        setTasksView(!taskView);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <>
      <div className="flex gap-3 justify-start items-buttom">
        <h3 className="font-bold text-3xl">TaskCategories</h3>
        <span className="border border-[#8ECAE6] border-0 border-b-5 w-[150px] mb-2"></span>
      </div>
      <div className="flex flex-wrap gap-5">
        <div className="md:w-[45%]">
          <form
            className="flex flex-col gap-5"
            action=""
            onSubmit={addCategoryHandler}
          >
            <div className="flex flex-col">
              <label htmlFor="title">Categorie Name *</label>
              <input
                className="border rounded px-2 py-1"
                type="text"
                name="title"
                value={Category.title}
                onChange={(e) => setCategory({ title: e.target.value })}
                required
              />
            </div>
            <div className="text-center">
              <input
                className="px-5 py-2 bg-[#8ECAE6] rounded "
                type="submit"
                value="Add Categorie"
              />
            </div>
          </form>
        </div>
        <div className="md:w-[45%]">
          <table className="min-w-full table-auto border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="px-4 py-2 border border-gray-300">Categories</th>
                <th className="px-4 py-2 border border-gray-300">Others</th>
              </tr>
            </thead>
            {categoriesData && categoriesData.length > 0 ? (
              categoriesData.map((category, index) => (
                <tr className="hover:bg-gray-100" key={index}>
                  <td className="px-4 py-2 border border-gray-300">
                    {category.title}
                  </td>
                  <td className="flex justify-around items-center gap-2 px-2 py-2 border border-gray-300">
                    <button
                      className="flex justify-around items-center bg-red-600 text-white px-2 py-1 rounded gap-2"
                      onClick={() => deletHandler(category._id)}
                    >
                      <i>
                        <MdDeleteOutline className="text-white" />
                      </i>
                      <p className="text-white">Delete</p>
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="2" className="text-center py-4">
                  No categories found
                </td>
              </tr>
            )}
          </table>
        </div>
      </div>
    </>
  );
}

export default TaskCategories;
