import React from "react";
import val_logo from "../../assets/valo/val_logo.png";

const Valoguide = () => {
  return (
    <div className="bg-[#ff4655] p-8 text-[#ece8e1]">
      <div className="flex flex-col items-center mb-8">
        <img
          className="w-16 md:w-32 h-auto mb-4"
          src={val_logo}
          alt="Valorant Logo"
        />
        <h1
          className="text-7xl md:text-8xl lg:text-9xl"
          style={{ fontFamily: "tungsten" }}
        >
          VALORANT
        </h1>
      </div>
      <p className="mb-4 text-md md:text-2xl">
        VALORANT is a free-to-play first-person tactical shooter video game
        being developed and published by Riot Games. It was announced on October
        15, 2019 under the codename "Project A", until it was officially
        revealed as VALORANT on March 2, 2020. It was officially released on
        June 2nd, 2020 for PC.
      </p>
      <p className="mb-8 text-md md:text-2xl">
        VALORANT is a competitive tactical shooter from the first-person
        perspective, featuring a cast of characters known as agents that each
        have their own unique set of abilities to create tactical opportunities.
        Ten players are divided into two teams, Attackers and Defenders, with
        the goal of winning the most rounds. The first team to reach 13 rounds
        wins the game.
      </p>
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 justify-center">
        <a
          href="https://playvalorant.com/en-us/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#ece8e1] text-[#ff4655] hover:bg-[#0f1923] hover:text-[#ece8e1] py-2 px-4 rounded-md text-center text-3xl"
          style={{ fontFamily: "tungsten" }}
        >
          Valorant Official Page
        </a>
        <a
          href="https://valorant.fandom.com/wiki/Maps"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#ece8e1] text-[#ff4655] hover:bg-[#0f1923] hover:text-[#ece8e1] py-2 px-4 rounded-md text-center text-3xl"
          style={{ fontFamily: "tungsten" }}
        >
          Valorant Wiki
        </a>
      </div>
    </div>
  );
};

export default Valoguide;
