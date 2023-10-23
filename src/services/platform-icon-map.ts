import { IconType, icons } from "react-icons";
import { AiFillWindows, AiFillApple } from "react-icons/ai";
import {
  BsPlaystation,
  BsAndroid,
  BsXbox,
  BsNintendoSwitch,
  BsGlobe,
} from "react-icons/bs";
import { SiAtari, SiCommodore, SiD3Dotjs, SiSega } from "react-icons/si";
import { MdPhoneIphone } from "react-icons/md";
import { ImTux } from "react-icons/im";
import { GiGameConsole } from "react-icons/gi";

export const platformIconMap: { [key: string]: IconType } = {
  pc: AiFillWindows,
  playstation: BsPlaystation,
  xbox: BsXbox,
  ios: MdPhoneIphone,
  android: BsAndroid,
  mac: AiFillApple,
  linux: ImTux,
  nintendo: BsNintendoSwitch,
  atari: SiAtari,
  "commodore-amiga": SiCommodore, //needfix
  sega: SiSega,
  "3do": SiD3Dotjs,  //needfix
  "neo-geo": GiGameConsole, //needfix
  web: BsGlobe,
};