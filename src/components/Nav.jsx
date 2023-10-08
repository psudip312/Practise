import React from "react";
import { navLinks } from "../constants";
import Button from "./button/Button";
import hamburger from "../assets/icons/hamburger.svg";

const Nav = () => {
  return (
    <div>
      <header className="sm:px-16 px-8 py-8 absolute z-10 w-full bg-slate-300">
        <nav className="flex justify-between items-center ">
          <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
            {navLinks.map((item) => (
              <li key={item.label}>
                <a href={item.href} className="leading-normal text-lg ">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24">
            <Button title="Build Your Pc"></Button>
          </div>
          <div className="hidden max-lg:block">
            <img src={hamburger} alt="hamburger icon" width={25} height={25} />
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Nav;
