import React from "react";
import ProductCard from "./ProductCard";
import image1 from "./ssd.jpg";
import image2 from "./monitor.jpg";
import image3 from "./bluetoothheadphones-2048px-6109-2x1-1.webp";
import image4 from "./gaming.webp";
import image5 from "./deliovery.webp";

const Hero = () => {
  const products = [
    {
      img: image1,
      title: "1TB NVME SSD SX6000 Pro XPG",
      price: "14,000.00",
      discountedPrice: "20,000.00",
      rating: "5",
      category: "SSD Drive",
    },
    {
      img: image2,
      title: "27-inch 4K UHD Monitor",
      price: "450.00",
      discountedPrice: "550.00",
      rating: "4.8",
      category: "Monitor",
    },
    {
      img: image3,
      title: "Wireless Bluetooth Headphones",
      price: "80.00",
      discountedPrice: "100.00",
      rating: "4.5",
      category: "Headphones",
    },
    {
      img: image4,
      title: "Gaming Laptop - RTX 3080",
      price: "2,500.00",
      discountedPrice: "3,000.00",
      rating: "4.9",
      category: "Laptop",
    },
  ];

  return (
    <div className="flex flex-wrap">
      {/* Product Cards */}
      <div className="w-full md:w-3/4">
        <div className="text-center">
          <p className="text-lg font-semibold text-gray-600">New Arrivals</p>
        </div>
        <div className="flex flex-wrap">
          {products.map((product, index) => (
            <div key={index} className="w-full md:w-1/2 lg:w-1/4 p-2">
              <ProductCard
                imageSrc={product.img}
                title={product.title}
                price={product.price}
                discountedPrice={product.discountedPrice}
                rating={product.rating}
                category={product.category}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Image */}
      <div className="w-full md:w-1/4 mt-5 md:mt-0">
        <div className="mt-10">
          <img className="rounded-lg" src={image5} alt="Delivery" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
