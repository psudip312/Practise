import React, { useState } from "react";
import { navLinks } from "../constants";
import { GiHamburgerMenu } from "react-icons/gi";

const Nav = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div>
      <header className="sm:px-16 px-8 py-8 w-full bg-slate-300">
        <nav>
          <div className="max-w-7xl mx-auto">
            <div className="flex mx-auto justify-between w-5/6 ">
              <div className="flex items-center gap-16 my-2">
                <div className="hidden lg:flex gap-8 ">
                  <ul className=" flex justify-center items-center gap-16 max-lg:hidden">
                    {navLinks.map((item) => (
                      <li key={item.label}>
                        <a href={item.href} className="leading-normal text-lg ">
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="lg:hidden flex items-center">
                <button onClick={() => setToggleMenu(!toggleMenu)}>
                  <GiHamburgerMenu className="h-6" />
                </button>
              </div>
            </div>
          </div>
          {/* mobile navigation */}
          <div
            className={`fixed z-40 w-full  bg-gray-100 overflow-hidden flex flex-col lg:hidden gap-12  origin-top duration-700 ${
              !toggleMenu ? "h-0" : "h-full"
            }`}
          >
            <div className="px-8">
              <div className="flex flex-col gap-8 font-bold tracking-wider">
                <a href="#" className="border-l-4 border-gray-600">
                  Home
                </a>
                <a href="#">Products</a>
                <a href="#">About Us</a>
                <a href="#">Contact Us</a>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Nav;
