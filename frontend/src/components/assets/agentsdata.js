// Importing agent images
import brimstone from "./valo/agents/brimstone.png";
import omen from "./valo/agents/omen.png";
import viper from "./valo/agents/viper.png";
import astra from "./valo/agents/astra.png";
import harbor from "./valo/agents/harbor.png";
import clove from "./valo/agents/clove.png";

import sova from "./valo/agents/sova.png";
import breach from "./valo/agents/breach.png";
import skye from "./valo/agents/skye.png";
import kayo from "./valo/agents/kayo.png";
import fade from "./valo/agents/fade.png";
import gekko from "./valo/agents/gekko.png";

import jett from "./valo/agents/jett.png";
import phoenix from "./valo/agents/phoenix.png";
import reyna from "./valo/agents/reyna.png";
import raze from "./valo/agents/raze.png";
import yoru from "./valo/agents/yoru.png";
import neon from "./valo/agents/neon.png";
import iso from "./valo/agents/iso.png";

import sage from "./valo/agents/sage.png";
import cypher from "./valo/agents/cypher.png";
import killjoy from "./valo/agents/killjoy.png";
import chamber from "./valo/agents/chamber.png";
import deadlock from "./valo/agents/deadlock.png";

import controllerRoleImage from "./valo/roles/controller.png";
import initiatorRoleImage from "./valo/roles/initiator.png";
import duelistRoleImage from "./valo/roles/duelist.png";
import sentinelRoleImage from "./valo/roles/sentinel.png";

const agentsdata = [
  {
    category: "Controllers",
    agents: [
      { id: 1, name: "Brimstone", role: "Controller", image: brimstone, roleImage: controllerRoleImage },
      { id: 2, name: "Viper", role: "Controller", image: viper, roleImage: controllerRoleImage },
      { id: 3, name: "Omen", role: "Controller", image: omen, roleImage: controllerRoleImage },
      { id: 4, name: "Astra", role: "Controller", image: astra, roleImage: controllerRoleImage },
      { id: 5, name: "Harbor", role: "Controller", image: harbor, roleImage: controllerRoleImage },
      { id: 6, name: "Clove", role: "Controller", image: clove, roleImage: controllerRoleImage },
    ],
  },
  {
    category: "Initiators",
    agents: [
      { id: 7, name: "Sova", role: "Initiator", image: sova, roleImage: initiatorRoleImage },
      { id: 8, name: "Breach", role: "Initiator", image: breach, roleImage: initiatorRoleImage },
      { id: 9, name: "Skye", role: "Initiator", image: skye, roleImage: initiatorRoleImage },
      { id: 10, name: "KAY/O", role: "Initiator", image: kayo, roleImage: initiatorRoleImage },
      { id: 11, name: "Fade", role: "Initiator", image: fade, roleImage: initiatorRoleImage },
      { id: 12, name: "Gekko", role: "Initiator", image: gekko, roleImage: initiatorRoleImage },
    ],
  },
  {
    category: "Duelists",
    agents: [
      { id: 13, name: "Jett", role: "Duelist", image: jett, roleImage: duelistRoleImage },
      { id: 14, name: "Phoenix", role: "Duelist", image: phoenix, roleImage: duelistRoleImage },
      { id: 15, name: "Reyna", role: "Duelist", image: reyna, roleImage: duelistRoleImage },
      { id: 16, name: "Raze", role: "Duelist", image: raze, roleImage: duelistRoleImage },
      { id: 17, name: "Yoru", role: "Duelist", image: yoru, roleImage: duelistRoleImage },
      { id: 18, name: "Neon", role: "Duelist", image: neon, roleImage: duelistRoleImage },
      { id: 19, name: "Iso", role: "Duelist", image: iso, roleImage: duelistRoleImage },
    ],
  },
  {
    category: "Sentinels",
    agents: [
      { id: 20, name: "Sage", role: "Sentinel", image: sage, roleImage: sentinelRoleImage },
      { id: 21, name: "Cypher", role: "Sentinel", image: cypher, roleImage: sentinelRoleImage },
      { id: 22, name: "Killjoy", role: "Sentinel", image: killjoy, roleImage: sentinelRoleImage },
      { id: 23, name: "Chamber", role: "Sentinel", image: chamber, roleImage: sentinelRoleImage },
      { id: 24, name: "Deadlock", role: "Sentinel", image: deadlock, roleImage: sentinelRoleImage },
    ],
  },
];

export { agentsdata };

export const controllers = agentsdata.find(
  (category) => category.category === "Controllers"
).agents;
export const initiators = agentsdata.find(
  (category) => category.category === "Initiators"
).agents;
export const duelists = agentsdata.find(
  (category) => category.category === "Duelists"
).agents;
export const sentinels = agentsdata.find(
  (category) => category.category === "Sentinels"
).agents;
