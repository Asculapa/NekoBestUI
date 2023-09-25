import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

const DarkModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <HStack>
        <Switch
          colorScheme="blue"
          size="md"
          onChange={toggleColorMode}
          isChecked={colorMode == "dark"}
        />
        <Text whiteSpace="nowrap">Dark Mode</Text>
      </HStack>
    </>
  );
};

export default DarkModeSwitch;
