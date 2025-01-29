import { Flex } from "@chakra-ui/react";
import { Link } from "react-router";

import Logo from "./Logo";
import AppLink from "./AppLink";

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
      zIndex={9999}
    >
      <Link to={"/"}>
        <Logo />
      </Link>
      <Flex gap={8} mr={10}>
        <AppLink to="/categories">Categories</AppLink>
        <AppLink to="/account">Account</AppLink>
      </Flex>
    </Flex>
  );
};

export default Navbar;
