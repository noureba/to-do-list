import React from "react";
import { FaTasks } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { SiGoogleanalytics } from "react-icons/si";



function Services() {
  return (
    <>
      <div className="flex flex-col gap-10 py-20" id="services">
        <div className="flex gap-3 justify-start items-buttom">
          <h3 className="font-bold text-3xl">Services</h3>
          <span className="border border-[#8ECAE6] border-0 border-b-5 w-[150px] mb-2"></span>
        </div>
        <div className="flex flex-wrap justify-between gap-5">
          <div className="flex flex-col gap-5 bg-[#8ECAE6] p-5 rounded-xl md:max-w-[30%]">
            <i className="text-[50px] self-center">
              <FaTasks />
            </i>
            <h3 className="self-center font-bold text-xl">Task Management</h3>
            <p>
              Easily add, edit, and organize your tasks into categories or
              priority levels. Whether it’s a work deadline or a personal
              reminder, we’ve got you covered.
            </p>
          </div>
          <div className="flex flex-col gap-5 bg-[#8ECAE6] p-5 rounded-xl md:max-w-[30%]">
          <i className="text-[50px] self-center">
            <IoIosNotifications />
          </i>
          <h3 className="self-center font-bold text-xl">
            Reminders & Notifications
          </h3>
          <p>
            Stay on top of your tasks with smart reminders that notify you
            exactly when you need them. Never miss a deadline again!
          </p>
        </div>
        <div className="flex flex-col gap-5 bg-[#8ECAE6] p-5 rounded-xl md:max-w-[30%]">
          <i className="text-[50px] self-center">
            <SiGoogleanalytics />
          </i>
          <h3 className="self-center font-bold text-xl">Progress Tracking</h3>
          <p>
            Visualize your success with progress indicators that show how much
            you've accomplished. Celebrate your small wins and stay motivated to
            achieve more!
          </p>
        </div>
        </div>
        
      </div>
    </>
  );
}

export default Services;
