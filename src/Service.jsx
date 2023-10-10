import React from "react";
import repair from "./repair.jpg";
import { BsArrowRightCircle } from "react-icons/Bs";

const Service = () => {
  return (
    <div className="min-h-[30vh] px-3 flex relative rounded-[24px] overflow-hidden">
      <img
        src={repair}
        className="w-full object-cover object-right filter brightness-50"
      />
      <div className="absolute top-[20%] left-[5%]">
        <p className="text-white fontinter text-[20px] font-[600] leading-[32px] mb-4">
          Any Computer Problems ?
        </p>
        <p className="text-white fontnunito lg:text-[34px] font-[900] leading-[32px] mb-12 ">
          "We offer repair many different types of devices including
          computers,tablets."
        </p>
        <div className="w-[160.87px] h-[50px] rounded-[25px] bg-white flex gap-6 items-center">
          <p className="fontinter text-[15px] ml-6 font-[600] leading-[32px] textorange">
            Get Now
          </p>
          <div className=" flex items-center justify-center w-[32px] h-[32px] rounded-full bgorange">
            <BsArrowRightCircle />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
