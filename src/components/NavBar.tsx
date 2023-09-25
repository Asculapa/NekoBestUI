import neko from "../assets/neko.jpg";
import SearchInput from "./SearchInput";
import DarkModeSwitch from "./DarkModeSwitch";
import { HStack, Image } from "@chakra-ui/react";

const NavBar = () => {
  return (
    <HStack>
      <Image src={neko} boxSize="64px" />
      <SearchInput />
      <DarkModeSwitch />
    </HStack>
  );
};

export default NavBar;
