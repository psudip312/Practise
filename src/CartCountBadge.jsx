import React from "react";

const CartCountBadge = (props) => {
  const { size } = props;
  return (
    <div
      className={`${size} absolute -top-1 -right-3 rounded-full bg-red-600 text-[14px] text-white place-items-center grid`}
    >
      3
    </div>
  );
};

export default CartCountBadge;
