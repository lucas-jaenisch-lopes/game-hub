import {
  HStack,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import ColorModeSwitch from "./ColorModeSwitch";

const Nav = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image
        borderRadius="10px"
        boxSize="40px"
        src="https://via.placeholder.com/40"
      />
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <SearchIcon color="gray.300" />
        </InputLeftElement>
        <Input borderRadius="80px" placeholder="Basic usage"></Input>
      </InputGroup>
      <ColorModeSwitch />
    </HStack>
  );
};

export default Nav;
