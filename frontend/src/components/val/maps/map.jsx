import React from "react";

const Map = () => {
  return (
    <div className="bg-[#ff4655] p-8">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
        <div className="flex flex-col mb-8 md:mb-0">
          <h1
            className="text-[#ece8e1] text-7xl md:text-8xl lg:text-9xl"
            style={{ fontFamily: "tungsten" }}
          >
            MAPS
          </h1>
          <p className="text-[#ece8e1] text-lg mt-4">
            You can learn about Maps in Valorant with:
          </p>
          <div className="flex flex-col space-y-4 mt-4">
            <a
              href="https://playvalorant.com/en-us/maps/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#ece8e1] text-[#ff4655] hover:bg-[#0f1923] hover:text-[#ece8e1] py-2 px-4 rounded-md text-center text-2xl"
              style={{ fontFamily: "tungsten" }}
            >
              Valorant Official Page
            </a>
            <a
              href="https://valorant.fandom.com/wiki/Maps"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#ece8e1] text-[#ff4655] hover:bg-[#0f1923] hover:text-[#ece8e1] py-2 px-4 rounded-md text-center text-2xl"
              style={{ fontFamily: "tungsten" }}
            >
              Valorant Wiki
            </a>
          </div>
        </div>
        <iframe
          src="https://www.youtube.com/embed/OtuyLWn5gCI?si=nN24rub-dmqXWeOB"
          title="Valorant Latest Map"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="mt-4 md:mt-0 w-full h-48 mx-auto md:mx-4 sm:w-[300px] sm:h-[169px] md:w-[560px] md:h-[315px]"
        ></iframe>
      </div>
    </div>
  );
};

export default Map;
