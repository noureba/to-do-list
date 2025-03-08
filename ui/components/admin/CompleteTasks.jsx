import React, { useContext } from "react";
import { UserContext } from "../../contexts/userContext";
import { MdDeleteOutline } from "react-icons/md";
import axios from "axios";
import { toast } from "react-toastify";


function CompleteTasks() {
    const { backendURL, tasks,taskView, setTasksView } =
      useContext(UserContext);

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
  return (
    <>
      <div className="flex gap-3 justify-start items-buttom">
        <h3 className="font-bold text-3xl">Complete Tasks</h3>
        <span className="border border-[#8ECAE6] border-0 border-b-5 w-[150px] mb-2"></span>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse border border-gray-300">
          <thead>
          <tr className="bg-gray-200">
              <th className="px-4 py-2 border border-gray-300">Tasks</th>
              <th className="px-4 py-2 border border-gray-300">Categorie</th>
              <th className="px-4 py-2 border border-gray-300">Date</th>
              <th className="px-4 py-2 border border-gray-300">Others</th>
            </tr>
          </thead>
          <tbody>
            <React.Suspense fallback="loading ...">
              {tasks
                .filter((task) => task.status === "complete")
                .map((task, index) => (
                  <tr className="hover:bg-gray-100" key={index}>
                    <td className="px-4 py-2 border border-gray-300 line-through">
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
                ))}
            </React.Suspense>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default CompleteTasks;
