import { Flex, Text, Icon } from "@chakra-ui/react";
import { ShoppingCart } from "lucide-react";

const Logo = () => {
  return (
    <Flex
      marginLeft={10}
      alignItems={"center"}
      gap={2}
      shadow="xl"
      padding={1}
      rounded={"xl"}
    >
      <Icon w={10} h={10} as={ShoppingCart} color="white" />
      <Text fontSize={"2xl"} fontWeight={"bold"} color="white">
        Fake Store
      </Text>
    </Flex>
  );
};

export default Logo;
