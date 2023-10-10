import React from "react";
import { GiFlatPawPrint } from "react-icons/gi";
import { BiLogoFacebookCircle } from "react-icons/bi";

const Footer = () => {
  // <div className="gap-[5%] grid-cols-4 lg:grid-cols-2 grid">
  //           <img className="" src={footer1} alt="" srcSet="" />
  //           <img className="" src={footer2} alt="" srcSet="" />
  //           <img className="" src={footer3} alt="" srcSet="" />
  //           <img className="" src={footer4} alt="" srcSet="" />
  //         </div>
  const linklst = [
    { id: 1, text: "Home" },

    { id: 2, text: "About" },
    { id: 3, text: "Services" },
    { id: 4, text: "Breeds" },
    { id: 5, text: "Shop" },
    { id: 6, text: "Gallery" },
  ];
  return (
    <div>
      <div className="bg-[#17224D] text-white mt-2">
        <div className=" min-h-[40vh] flex flex-col gap-[5%]  lg:flex-row lg:justify-between px-[5%] py-[4%] text-white">
          <div className="flex flex-col gap-[6%] lg:gap-[25%] basis-[50%]   lg;justify-between ">
            <div className="flex flex-row justify-between items-center gap-[5%] lg:gap-0">
              <div className=" ">
                <GiFlatPawPrint className="text-[5rem] text-white " />
              </div>
              <p className="text-white lg:w-[70%] font-thin ">
                " We strive to help people by providing extraordinary service
                and expert repairs using only the highest quality parts
                available. "
              </p>
            </div>
            <div className="flex flex-row gap-4 md:flex-col lg:gap-5 mt-6 lg:mt-0">
              <div className="flex flex-col">
                <small>Phone Number</small>
                <p className="font-bold ">+977-9861859764</p>
              </div>
              <div className="flex flex-col">
                <small>location</small>
                <p className="font-bold ">Tahachal-Kathmandu</p>
              </div>
            </div>
          </div>
          <div className="flex  flex-col w-[10%] gap-2 mt-6 lg:mt-0">
            <strong className=" ">Menu</strong>
            <div className="flex flex-row flex-wrap lg:flex-col gap-2">
              {linklst.map((item) => {
                return (
                  <span key={item.id} className=" ">
                    {item.text}
                  </span>
                );
              })}
            </div>
          </div>
          <div className="flex flex-col gap-2 mt-6 lg:mt-0">
            <strong>Gallery</strong>
            <div className="flex flex-row flex-wrap lg:flex-col gap-2">
              {linklst.map((item) => {
                return (
                  <span key={item.id} className=" ">
                    {item.text}
                  </span>
                );
              })}
            </div>
          </div>
        </div>

        <section className="lg:ps-[5%] px-[5%] lg:pr-0">
          <hr className="text-white" />
          <div className="flex flex-col gap-3 lg:gap-0 lg:flex-row lg:justify-between py-4">
            <p>
              Copyright © 2023 Fixit Digital Repair Store.| All Rights Reserved
            </p>
            <div className="flex flex-row gap-3 pr-3">
              <div className="bg-white p-2 text-black rounded-md ">
                <BiLogoFacebookCircle />
              </div>
              <div className="bg-white p-2 text-black rounded-md ">
                <BiLogoFacebookCircle />
              </div>
              <div className="bg-white p-2 text-black rounded-md ">
                <BiLogoFacebookCircle />
              </div>
              <div className="bg-white p-2 text-black rounded-md ">
                <BiLogoFacebookCircle />
              </div>
              <div className="bg-white p-2 text-black rounded-md ">
                <BiLogoFacebookCircle />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Footer;
