import React from "react";
import "./Items.css";
import { Link } from 'react-router-dom';

const Item = ({ id, name, image, price }) => {
  return (
    <div className="item bg-white rounded-lg shadow-md overflow-hidden">
      <Link to={`/product/${id}`}>
        <img src={image} alt={name} className="w-full h-48 object-cover" />
      </Link> 
      <div className="w-[85%] h-20 break-words p-4">
        <p className="text-lg font-bold" style={{ fontFamily: "marga" }}>
          {name}
        </p>
      </div>
      <div className="text-lg font-semibold p-4">{price}</div>
    </div>
  );
};

export default Item;
