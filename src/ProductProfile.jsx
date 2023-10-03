import React, { useState } from "react";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import img1 from "../im1.jpg";

const ProductProfile = () => {
  const [activeSection, setActiveSection] = useState("specifications");
  const handleSectionChange = (section) => {
    setActiveSection(section);
  };
  return (
    <div className="px-20">
      <div className="flex">
        <div className="flex-1 w-2/5 flex flex-col justify-center">
          <img src={img1} />
        </div>
        <div className="flex-1 w-3/5 p-4 flex flex-col gap-4">
          <div className="flex justify-end p-2">
            <AiOutlineHeart
              size={22}
              className=" hover:text-red-700 cursor-pointer "
            />
          </div>
          <div>
            <h1 className="mb-2 font-medium text-xl text-gray-800">
              Havit laptop Cooling PAD HV-F2081
            </h1>
          </div>
          <div className="pl-6">
            <ul className="list-disc list-inside text-gray-800">
              <li>
                Fashionable and colorful appearance. Iron mesh + plastic
                material, which is durable and perfect in heat dissipation
                performance
              </li>
              <li>Dual USB charging supported</li>
              <li>Ergonomic design; Flat structure.</li>
              <li>Multi-height settings to fulfill different preferences</li>
              <li>
                Compatible for the cooling requirement of all series of laptops
                in 17 inches and less.
              </li>
            </ul>
          </div>
          <div>
            <h1 className="mb-2 font-medium text-xl text-gray-800">
              Rs 2,500.00
            </h1>
          </div>

          <div className="flex w-1/2 gap-1 items-center justify-center rounded-md cursor-pointer bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
            <AiOutlineShoppingCart size={26} />
            Add to cart
          </div>
        </div>
      </div>
      <div className="flex gap-2">
        <div
          onClick={() => handleSectionChange("specifications")}
          className={`flex gap-1 items-center justify-center rounded-md cursor-pointer bg-slate-900 px-5 py-2.5 text-white ${
            activeSection === "specifications" ? "bg-blue-500" : ""
          }`}
        >
          <AiOutlineShoppingCart size={26} />
          Specifications
        </div>
        <div
          onClick={() => handleSectionChange("description")}
          className={`flex gap-1 items-center justify-center rounded-md cursor-pointer bg-slate-900 px-5 py-2.5 text-white ${
            activeSection === "description" ? "bg-blue-500" : ""
          }`}
        >
          <AiOutlineShoppingCart size={26} />
          Description
        </div>
        <div
          onClick={() => handleSectionChange("review")}
          className={`flex gap-1 items-center justify-center rounded-md cursor-pointer bg-slate-900 px-5 py-2.5 text-white ${
            activeSection === "review" ? "bg-blue-500" : ""
          }`}
        >
          <AiOutlineShoppingCart size={26} />
          Reviews & Rating
        </div>
      </div>
      {activeSection === "specifications" && (
        <div className="p-6">
          <h3>No Specifications</h3>
        </div>
      )}
      {activeSection === "description" && (
        <div className="p-6">
          <div className="pl-6">
            <ul className="list-disc list-inside text-gray-800">
              <li>
                Fashionable and colorful appearance. Iron mesh + plastic
                material, which is durable and perfect in heat dissipation
                performance
              </li>
              <li>Dual USB charging supported</li>
              <li>Ergonomic design; Flat structure.</li>
              <li>Multi-height settings to fulfill different preferences</li>
              <li>
                Compatible for the cooling requirement of all series of laptops
                in 17 inches and less.
              </li>
            </ul>
          </div>
        </div>
      )}
      {activeSection === "review" && (
        <div className="p-6">This is Review Part..</div>
      )}
    </div>
  );
};

export default ProductProfile;
