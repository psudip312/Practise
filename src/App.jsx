import "./App.css";
import Nav from "./components/Nav";
import { BsSearch } from "react-icons/Bs";
import { FiUsers } from "react-icons/Fi";
import { AiOutlineShoppingCart } from "react-icons/Ai";
import CartCountBadge from "./CartCountBadge";
import logo from "./assets/logo.png";
import { BsClock, BsTelephoneOutbound } from "react-icons/Bs";

function App() {
  return (
    <>
      <div className="hidden lg:block">
        <div className=" pt-8 flex items-center justify-around">
          {/* Check above line */}
          <a href="/">
            <img
              src={logo}
              alt="logo"
              width={129}
              height={36}
              className="m-0 w-[129px] h-[29px]"
            />
          </a>
          <div className="relative w-full max-w-[500px]">
            <input
              className="bg-[#f2f3f5] w-full outline-none border-none rounded-[30px] px-6 py-3"
              type="text"
              placeholder="Search Products"
            />
            {/*border nome ra outline non check gara pachi..Check above line */}
            <BsSearch
              className="absolute top-0 right-0 mt-4 mr-5 text-gray-500 "
              size={20}
            />
          </div>
          <div className="flex gap-4">
            <div className="p-2 flex justify-center items-center gap-2">
              <div>
                <BsClock size={24} />
              </div>
              <div>
                <h1 className="text-sm font-semibold text-gray-600">
                  STORE TIME
                </h1>
                <h1 className="text-lg font-semibold ">8AM - 6PM</h1>
              </div>
            </div>
            <div className="p-2 flex justify-center items-center gap-2">
              <div>
                <BsTelephoneOutbound size={24} />
              </div>
              <div>
                <h1 className="text-sm font-semibold text-gray-600">
                  NEED HELP?
                </h1>
                <h1 className="text-lg font-semibold ">+977-9868113113</h1>
              </div>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="rounded-full p-2 border border-gray-400 ">
              <FiUsers />
            </div>
            <div className=" relative rounded-full p-2 border border-gray-400 ">
              <AiOutlineShoppingCart />
              <CartCountBadge size="w-[20px] h-[20px]" />
            </div>
          </div>
        </div>
      </div>
      <Nav />
    </>
  );
}

export default App;
