import React from "react";
import ContactUs from "../components/Newsletter/Newsletter";
import Footer from "../components/footer/footer";
import Homeval from "../components/val/homeval/homeval";
import Valoguide from "../components/val/valoguide/valoguide";
import AgentsList from "../components/val/agents/agentslist";
import Map from "../components/val/maps/map";
import Weapons from "../components/val/weapons/weapons";
import VProducts from "../components/perproducts/vproducts";

const Valo = () => {
  return (
    <div>
      <Homeval />
      <Valoguide />
      <AgentsList />
      <Map />
      <Weapons />
      <VProducts />
    </div>
  );
};

export default Valo;
