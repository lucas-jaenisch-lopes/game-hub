import { HStack, Icon, Tooltip } from "@chakra-ui/react";
import { IconType, icons } from "react-icons";
import { AiFillWindows, AiFillApple } from "react-icons/ai";
import {
  BsPlaystation,
  BsAndroid,
  BsXbox,
  BsNintendoSwitch,
  BsGlobe,
} from "react-icons/bs";
import { SiAtari, SiCommodore, SiSega } from "react-icons/si";
import { MdPhoneIphone } from "react-icons/md";
import { ImTux } from "react-icons/im";
import { GiGameConsole } from "react-icons/gi";
import { IoLogoGameControllerA } from "react-icons/io";
import { Platform } from "../hooks/useGames";

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: AiFillWindows,
    playstation: BsPlaystation,
    xbox: BsXbox,
    ios: MdPhoneIphone,
    android: BsAndroid,
    mac: AiFillApple,
    linux: ImTux,
    nintendo: BsNintendoSwitch,
    atari: SiAtari,
    comodoreamiga: SiCommodore,
    sega: SiSega,
    threedo: IoLogoGameControllerA,
    neogeo: GiGameConsole,
    web: BsGlobe,
  };

  return (
    <HStack>
      {platforms.map((platform) => (
        <Tooltip key={platform.id} label={platform.name} placement="top">
          <span>
            <Icon
              key={platform.id}
              as={iconMap[platform.slug]}
              color="gray.500"
            />
          </span>
        </Tooltip>
      ))}
    </HStack>
  );
};

export default PlatformIconList;
