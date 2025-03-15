'use client';
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { UserProvider } from "../contexts/userContext";
import "./styles/globals.css";
import { ToastContainer } from "react-toastify";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <title>To Do List App</title>
      </head>
      <body className="bg-gradient-to-r from-blue-100 to-gray-100 h-screen">
        <ToastContainer
          position="top-center"
          autoClose={1000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <UserProvider>
          <NavBar />
          <div className="container px-10 m-auto">{children}</div>
          <Footer />
        </UserProvider>
      </body>
    </html>
  );
}
