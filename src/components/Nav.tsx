import {
  HStack,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Switch,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

const Nav = () => {
  return (
    <HStack>
      <Image
        borderRadius="10px"
        boxSize="35px"
        src="https://bit.ly/dan-abramov"
      />
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <SearchIcon color="gray.300" />
        </InputLeftElement>
        <Input borderRadius="80px" placeholder="Basic usage"></Input>
      </InputGroup>
      <HStack>
        <Switch id="darkMode" size="md"></Switch>
        <p>Dark Mode</p>
      </HStack>
    </HStack>
  );
};

export default Nav;
