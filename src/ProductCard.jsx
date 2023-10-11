import React from "react";
import { AiOutlineShoppingCart } from "react-icons/Ai";

const ProductCard = (props) => {
  const { imageSrc, title, price, discountedPrice, rating, category } = props;

  return (
    <div className="relative m-2 w-full max-w-xs flex  flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-xl">
      <a
        className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl"
        href="#"
      >
        <img
          className="object-cover w-full"
          src={imageSrc}
          alt="product image"
        />
        <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">
          39% OFF
        </span>
      </a>
      <div className="mt-4 px-5 pb-5 ">
        <div>
          <h5 className="text-xs text-center mb-2 tracking-tight text-slate-900">
            {category}
          </h5>
        </div>
        <div>
          <h5 className="text-xl tracking-tight text-slate-900 h-10 mb-4">
            {title}
          </h5>
        </div>
        <div className="mt-2 mb-5 flex items-center justify-between">
          <p>
            <span className="text-3xl font-bold text-slate-900">{price}</span>
            <span className="text-sm text-slate-900 line-through">
              {discountedPrice}
            </span>
          </p>
          <div className="flex items-center">
            <span className="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">
              {rating}
            </span>
          </div>
        </div>
        <div className="flex gap-1 items-center justify-center rounded-md cursor-pointer bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
          <AiOutlineShoppingCart size={26} />
          Add to cart
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
