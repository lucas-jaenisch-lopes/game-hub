import { Switch, Text, HStack, useColorMode } from "@chakra-ui/react";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <HStack>
      <Switch
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      ></Switch>
      <Text whiteSpace="nowrap" justifyContent="space-between" padding="10px">
        Dark Mode
      </Text>
    </HStack>
  );
};

export default ColorModeSwitch;
