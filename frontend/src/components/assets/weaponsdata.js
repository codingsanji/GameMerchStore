import ares from "./valo/machine_guns/ares.png";
import odin from "./valo/machine_guns/odin.png";

import melee from "./valo/melee/melee.png";

import bulldog from "./valo/rifles/bulldog.png";
import guardian from "./valo/rifles/guardian.png";
import phantom from "./valo/rifles/phantom.png";
import vandal from "./valo/rifles/vandal.png";

import bucky from "./valo/shotguns/bucky.png";
import judge from "./valo/shotguns/judge.png";

import classic from "./valo/sidearms/classic.png";
import ghost from "./valo/sidearms/ghost.png";
import frenzy from "./valo/sidearms/frenzy.png";
import shorty from "./valo/sidearms/shorty.png";
import sheriff from "./valo/sidearms/sheriff.png";

import spectre from "./valo/smgs/spectre.png";
import stinger from "./valo/smgs/stinger.png";

import marshal from "./valo/sniper_rifles/marshal.png";
import outlaw from "./valo/sniper_rifles/outlaw.png";
import operator from "./valo/sniper_rifles/operator.png";

let weapondata = [
  {
    category: "Machine Guns",
    items: [
      { id: 1, name: "Default Ares", image: ares },
      { id: 2, name: "Default Odin", image: odin },
    ],
  },
  {
    category: "Melee",
    items: [{ id: 3, name: "Default Knife", image: melee }],
  },
  {
    category: "Rifles",
    items: [
      { id: 4, name: "Default Bulldog", image: bulldog },
      { id: 5, name: "Default Guardian", image: guardian },
      { id: 6, name: "Default Phantom", image: phantom },
      { id: 7, name: "Default Vandal", image: vandal },
    ],
  },
  {
    category: "Shotguns",
    items: [
      { id: 8, name: "Default Bucky", image: bucky },
      { id: 9, name: "Default Judge", image: judge },
    ],
  },
  {
    category: "Sidearms",
    items: [
      { id: 10, name: "Default Classic", image: classic },
      { id: 11, name: "Default Ghost", image: ghost },
      { id: 12, name: "Default Frenzy", image: frenzy },
      { id: 13, name: "Default Shorty", image: shorty },
      { id: 14, name: "Default Sheriff", image: sheriff },
    ],
  },
  {
    category: "SMGs",
    items: [
      { id: 15, name: "Default Spectre", image: spectre },
      { id: 16, name: "Default Stinger", image: stinger },
    ],
  },
  {
    category: "Sniper Rifles",
    items: [
      { id: 17, name: "Default Marshal", image: marshal },
      { id: 18, name: "Default Outlaw", image: outlaw },
      { id: 19, name: "Default Operator", image: operator },
    ],
  },
];

// exporting the entire weaponsdata array
export { weapondata };

// exporting individual categories
export const machineGuns = weapondata.find(
  (category) => category.category === "Machine Guns"
).items;

export const melees = weapondata.find(
  (category) => category.category === "Melee"
).items;

export const rifles = weapondata.find(
  (category) => category.category === "Rifles"
).items;

export const shotguns = weapondata.find(
  (category) => category.category === "Shotguns"
).items;

export const sidearms = weapondata.find(
  (category) => category.category === "Sidearms"
).items;

export const smgs = weapondata.find(
  (category) => category.category === "SMGs"
).items;

export const sniperRifles = weapondata.find(
  (category) => category.category === "Sniper Rifles"
).items;
