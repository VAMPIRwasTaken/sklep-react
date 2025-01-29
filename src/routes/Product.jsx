import { useParams } from "react-router";
import useSWR from "swr";
import {
  Flex,
  Spinner,
  Center,
  Alert,
  Text,
  Image,
  Button,
} from "@chakra-ui/react";

const Product = () => {
  const { productId } = useParams();
  const {
    data: productData,
    error,
    isLoading,
  } = useSWR(productId ? `/products/${productId}` : null);

  if (isLoading) {
    return (
      <Center>
        <Spinner size="xl" />
      </Center>
    );
  }

  // Renderowanie komunikatu o błędzie, jeśli coś poszło nie tak
  if (error) {
    return (
      <Center>
        <Alert status="error">
          <Alert.Icon />
          <Text>There was an error processing your request</Text>
        </Alert>
      </Center>
    );
  }

  // Renderowanie szczegółów produktu, jeśli dane są dostępne
  return (
    <Flex
      flexDirection="column"
      padding={8}
      maxWidth="800px"
      margin="auto"
      boxShadow="lg"
      borderRadius="lg"
      backgroundColor="white"
    >
      <Image
        src={productData.image}
        alt={productData.title}
        width="100%"
        maxWidth="400px"
        height="auto"
        objectFit="contain"
        margin="auto"
        padding={4}
        borderRadius="md"
        boxShadow="md"
        marginBottom={6}
      />

      <Text
        fontSize="2xl"
        fontWeight="bold"
        marginBottom={2}
        textAlign="center"
      >
        {productData.title}
      </Text>
      <Text
        color="gray.500"
        lineHeight="1.6"
        marginBottom={4}
        textAlign="center"
      >
        {productData.description}
      </Text>
      <Text
        fontSize="3xl"
        fontWeight="extrabold"
        color="green.500"
        textAlign="center"
        marginBottom={4}
      >
        {`$${productData.price}`}
      </Text>

      <Button variant="solid" colorPalette={"green"}>
        Buy now
      </Button>
      <Button variant="subtle" colorPalette={"blue"}>
        Add to cart
      </Button>
    </Flex>
  );

  // Domyślny return (fallback), jeśli dane nie są gotowe
};

export default Product;
