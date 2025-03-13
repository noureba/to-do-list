"use client";
import React, {
  createContext,
  useState,
} from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const backendURL = "http://localhost:5000";
  const [login, setLogin] = useState(false);
  const [userData, setUserData] = useState({});
  const [view, setView] = useState("home");
  const [SideBarMenu, setSidBareMenu] = useState(true);
  const [loading, setLoading] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [taskView, setTasksView] = useState(false);
  const [modal, setModal] = useState(false);
  const [profile, setProfile]= useState(null)

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
    profile, setProfile
  };
  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};
