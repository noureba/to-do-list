"use client";
import React, {
  createContext,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";
import axios from "axios";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const backendURL = "http://localhost:5000";
  const [login, setLogin] = useState(false);
  const [userData, setUserData] = useState({});
  const [view, setView] = useState("home");
  const [SideBarMenu, setSidBareMenu] = useState(true);
  const [loading, setLoading] = useState(false);
  const [tasks, setTasks] = useState({});
  const [taskView, setTasksView] = useState(false);
  const [modal, setModal] = useState(false);

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

  const user = {
    backendURL,
    userData,
    setUserData,
    login,
    setLogin,
    view,
    setView,
    SideBarMenu,
    setSidBareMenu,
    loading,
    setLoading,
    tasks,
    setTasks,
    taskView,
    setTasksView,
    modal,
    setModal,
  };
  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};
