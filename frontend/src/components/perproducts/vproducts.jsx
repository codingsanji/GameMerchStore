import React from "react";
import { valodata as data_product } from "../assets/valodata";
import Item from "../Items/Items";

const VProducts = () => {
  return (
    <div className="bg-[#ff4655] min-h-screen flex flex-col items-center py-4">
      <div className="flex flex-col items-center justify-center w-full">
        <div className="mt-10">
          <h1
            className="text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl text-[#ece8e1] text-center break-words"
            style={{
              fontFamily: "tungsten, sans-serif",
            }}
          >
            AVAILABLE PRODUCTS
          </h1>
        </div>
        <div className="w-full p-8 mt-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8">
            {data_product.map((item) => (
              <Item
                key={item.id}
                id={item.id}
                name={
                  <span
                    className="text-[16px] font-[600] uppercase leading-[26px] text-[#0f1923]"
                    style={{
                      fontFamily: "'Radio Canada Big', sans-serif",
                    }}
                  >
                    {item.name}
                  </span>
                }
                image={item.image}
                price={
                  <span
                    className="text-[#0f1923] font-[400]"
                    style={{
                      fontFamily: "'Radio Canada Big', sans-serif",
                    }}
                  >
                    ${item.price}
                  </span>
                }
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VProducts;
