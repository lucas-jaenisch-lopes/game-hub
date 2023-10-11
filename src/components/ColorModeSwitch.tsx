import { Switch, Text, HStack } from "@chakra-ui/react";
import { useState } from "react";

const ColorModeSwitch = () => {
  const [toggleColorMode, colorMode] = useState();

  return (
    <HStack>
      <Switch id="darkMode" size="md"></Switch>
      <Text>Dark Mode</Text>
    </HStack>
  );
};

export default ColorModeSwitch;
