/* eslint-disable react/prop-types */
import { Link } from "@chakra-ui/react";
import { NavLink } from "react-router";
import { useLocation } from "react-router";

const AppLink = ({ to, children }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      as={NavLink}
      to={to}
      fontSize="xl"
      fontWeight={"bold"}
      cursor={"pointer"}
      _hover={{
        color: "blue.300",
      }}
      _focus={{
        outline: "none",
      }}
      transition={"all ease-in-out 0.3s"}
      textDecoration={"none"}
      color={isActive ? "blue.900" : "white"}
      role="navigation"
    >
      {children}
    </Link>
  );
};

export default AppLink;
