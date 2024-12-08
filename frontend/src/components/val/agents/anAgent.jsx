import React from "react";

const Agent = ({ name, role, roleImage, image }) => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 p-4">
        <div className="bg-[#0f1923] my-8 py-4 rounded-md">
          <h1
            className="uppercase text-[#ece8e1] text-7xl ml-8"
            style={{ fontFamily: "tungsten" }}
          >
            {name}
          </h1>

          <div className="flex flex-wrap ml-8 gap-4 mt-4">
            <div className="w-16 h-16">
              <img className="rounded-full" src={roleImage} alt={role} />
            </div>
          </div>
        </div>
      </div>

      <div className="object-contain w-full pt-8 md:w-1/2 max-h-[620px] p-4hover:bg-[#ff4655] hover:rounded-lg">
        <img src={image} alt={name} />
      </div>
    </div>
  );
};

export default Agent;
