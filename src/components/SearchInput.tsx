import { SearchIcon } from "@chakra-ui/icons";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";

const SearchInput = () => {
  return (
    <InputGroup marginX={5}>
      <InputLeftElement pointerEvents="none">
        <SearchIcon />
      </InputLeftElement>
      <Input borderRadius={20} />
    </InputGroup>
  );
};

export default SearchInput;
