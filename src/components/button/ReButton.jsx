import React from "react";
import { BsArrowRightCircle } from "react-icons/Bs";

const ReButton = (props) => {
  const { title, color } = props;
  return (
    <div
      className={`w-[160.87px] h-[50px] rounded-[25px] bg-${color} flex gap-6 items-center`}
    >
      <p className="fontinter text-[15px] ml-6 font-[600] leading-[32px]">
        {title}
      </p>
      <div
        className={`flex items-center justify-center w-[32px] h-[32px] rounded-full bg-${color}`}
      >
        <BsArrowRightCircle />
      </div>
    </div>
  );
};

export default ReButton;
