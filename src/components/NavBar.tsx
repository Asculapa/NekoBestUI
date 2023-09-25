import neko from "../assets/neko.jpg";
import SearchInput from "./SearchInput";
import DarkModeSwitch from "./DarkModeSwitch";
import { Box, HStack, Image } from "@chakra-ui/react";

interface Props {
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack>
      <Image src={neko} boxSize="64px" />
      <Box width="100%" marginX={5}>
        <SearchInput onSearch={onSearch} />
      </Box>
      <DarkModeSwitch />
    </HStack>
  );
};

export default NavBar;
