import React, { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import {
  controllers,
  initiators,
  duelists,
  sentinels,
} from "../../assets/agentsdata";
import Agent from "./anAgent";
import omenwallpaper from "../../assets/valo/omenwallpaper.png";
import gekkowallpaper from "../../assets/valo/gekkowallpaper.jpg";
import isowallpaper from "../../assets/valo/isowallpaper.png";
import cypherwallpaper from "../../assets/valo/cypherwallpaper.jpg";

const AgentsList = () => {
  const [activeRole, setActiveRole] = useState(null);

  const toggleRole = (role) => {
    setActiveRole(activeRole === role ? null : role);
  };

  const renderAgents = (agents, roleImage) => {
    return agents.map((agent) => (
      <div key={agent.id} className="mb-4">
        <Agent
          name={agent.name}
          role={agent.role}
          roleImage={roleImage}
          image={agent.image}
        />
      </div>
    ));
  };

  return (
    <div className="p-4 bg-[#ece8e1]">
      <div className="mb-4">
        <h1
          className="text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl text-[#0f1923] text-center break-words"
          style={{
            fontFamily: "tungsten, sans-serif",
          }}
        >
          AGENTS
        </h1>
      </div>

      <div
        className="mb-4 mx-0 md:mx-8 bg-cover bg-center h-[100px] md:h-[150px]"
        style={{
          backgroundImage: `url(${omenwallpaper})`,
          backgroundSize: "cover",
          backgroundPosition: "10% 25%",
        }}
      >
        <h2
          onClick={() => toggleRole("Controllers")}
          className="text-[#f2ffff] pl-4 md:py-5 py-8 tracking-wide md:tracking-normal text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl cursor-pointer flex items-center"
          style={{ fontFamily: "tungsten" }}
        >
          Controllers{" "}
          <img
            src={controllers[0].roleImage}
            alt="Controllers"
            className="w-8 h-8 md:w-16 md:h-16 ml-4 bg-[#00314c] rounded-full"
          />
          <RiArrowDropDownLine className="inline-block text-[#00314c]" />
        </h2>
      </div>
      {activeRole === "Controllers" && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-4">
          {renderAgents(controllers, controllers[0].roleImage)}
        </div>
      )}

      <div
        className="mb-4 mx-0 md:mx-8 bg-cover bg-center h-[100px] md:h-[150px]"
        style={{
          backgroundImage: `url(${gekkowallpaper})`,
          backgroundSize: "cover",
          backgroundPosition: "10% 8%",
        }}
      >
        <h2
          onClick={() => toggleRole("Initiators")}
          className="text-[#8139e9] pl-4 md:py-5 py-8 tracking-wide md:tracking-normal text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl cursor-pointer flex items-center"
          style={{ fontFamily: "tungsten" }}
        >
          Initiators{" "}
          <img
            src={initiators[0].roleImage}
            alt="Initiators"
            className="w-8 h-8 md:w-16 md:h-16 ml-4 bg-[#c7f459] rounded-full"
          />
          <RiArrowDropDownLine className="inline-block text-[#8139e9]" />
        </h2>
      </div>
      {activeRole === "Initiators" && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-4">
          {renderAgents(initiators, initiators[0].roleImage)}
        </div>
      )}

      <div
        className="mb-4 mx-0 md:mx-8 bg-cover bg-center h-[100px] md:h-[150px]"
        style={{
          backgroundImage: `url(${isowallpaper})`,
          backgroundSize: "cover",
          backgroundPosition: "10% 5%",
        }}
      >
        <h2
          onClick={() => toggleRole("Duelists")}
          className="text-[#020224] pl-4 md:py-5 py-8 tracking-wide md:tracking-normal text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl cursor-pointer flex items-center"
          style={{ fontFamily: "tungsten" }}
        >
          Duelists{" "}
          <img
            src={duelists[0].roleImage}
            alt="Duelists"
            className="w-8 h-8 md:w-16 md:h-16 ml-4 bg-[#0f1923] rounded-full"
          />
          <RiArrowDropDownLine className="inline-block text-[#020224]" />
        </h2>
      </div>
      {activeRole === "Duelists" && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-4">
          {renderAgents(duelists, duelists[0].roleImage)}
        </div>
      )}

      <div
        className="mb-4 mx-0 md:mx-8 bg-cover bg-center h-[100px] md:h-[150px]"
        style={{
          backgroundImage: `url(${cypherwallpaper})`,
          backgroundSize: "cover",
          backgroundPosition: "10% 25%",
        }}
      >
        <h2
          onClick={() => toggleRole("Sentinels")}
          className="text-[#eeb36c] pl-4 md:py-5 py-8 tracking-wide md:tracking-normal text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl cursor-pointer flex items-center"
          style={{ fontFamily: "tungsten" }}
        >
          Sentinels{" "}
          <img
            src={sentinels[0].roleImage}
            alt="Sentinels"
            className="w-8 h-8 md:w-16 md:h-16 ml-4 bg-[#2b0f03] rounded-full"
          />
          <RiArrowDropDownLine className="inline-block text-[#eeb36c]" />
        </h2>
      </div>
      {activeRole === "Sentinels" && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-4">
          {renderAgents(sentinels, sentinels[0].roleImage)}
        </div>
      )}
    </div>
  );
};

export default AgentsList;
