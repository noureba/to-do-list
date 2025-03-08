import React from "react";

function About() {
  return (
    <>
      <div className="flex flex-col gap-10 py-20" id="about">
        <div className="flex gap-3 justify-start items-buttom">
          <h3 className="font-bold text-3xl">About</h3>
          <span className="border border-[#8ECAE6] border-0 border-b-5 w-[150px] mb-2"></span>
        </div>
        <div>
          <p className="text-lg">
            we believe in the power of simplicity to unlock productivity. Our
            mission is to help you organize your tasks, stay focused, and
            accomplish more with less effort. Whether you’re managing daily
            to-dos or working on long-term goals, our app is designed to fit
            seamlessly into your routine, empowering you to work smarter not
            harder.
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
