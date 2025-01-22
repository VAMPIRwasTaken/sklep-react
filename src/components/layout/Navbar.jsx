import { Flex } from "@chakra-ui/react";

import Logo from "./Logo";

const Navbar = () => {
  return (
    <Flex 
      width="100%"
      alignItems={"center"}
      justifyContent={"space-between"}
      height={"70px"}
      position={"fixed"}
      backgroundColor={"blue.400"}
      shadow={"md"}
      >
        <Logo />
      </Flex>
  );
};

export default Navbar;