import React from "react";
import "./weapons.css";

const Gun = (gun) => {
  return (
    <div className="guns uppercase text-sm text-[#ece8e1] w-full 2xl:m-4 p-4 pb-0 border-[1px] border-[#ece8e1] shadow-md shadow-[#1a1a1a] rounded-sm">
      <img
        className="xl:h-[110px] lg:h-[100px] md:h-[90px] h-[70px] object-contain mx-auto"
        src={gun.image}
        alt={gun.name}
      />
      <span>
        <p style={{ fontFamily: "Arial, san-serif" }}>{gun.name}</p>
      </span>
    </div>
  );
};

export default Gun;
