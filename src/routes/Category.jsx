import { useParams } from "react-router";
import useSWR from "swr";
import {
  Flex,
  Spinner,
  Center,
  Alert,
  Text,
  Card,
  Image,
  Button,
  SimpleGrid,
} from "@chakra-ui/react";
import { Link } from "react-router";

const Category = () => {
  const { category } = useParams();
  const {
    data: categoryData,
    error,
    isLoading,
  } = useSWR(`/products/category/${category}`);

  return (
    <Flex flexDirection="column">
      <Center>
        {isLoading && <Spinner size="xl" />}
        {error && (
          <Alert.Root status="error">
            <Alert.Indicator />
            <Alert.Title>
              There was an error processing your request
            </Alert.Title>
          </Alert.Root>
        )}
        <SimpleGrid columns={3} gap={8}>
          {categoryData?.map((product) => (
            <Card.Root
              key={product.id}
              maxW="sm"
              overflow="hidden"
              backgroundColor={"white"}
              cursor={"pointer"}
              display={"flex"}
              flexDir={"column"}
              height={"100%"}
            >
              <Link
                key={product.id}
                to={`/products/${product.id}`}
                style={{
                  flexGrow: 1,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Image
                  src={product.image}
                  alt={product.title}
                  width={400}
                  height={200}
                  objectFit={"contain"}
                  padding={2}
                />
                <Card.Body
                  backgroundColor="whitesmoke"
                  flexGrow={1}
                  display={"flex"}
                  flexDir={"column"}
                  justifyContent={"flex-start"}
                  padding={4}
                >
                  <Card.Title color="black">{product.title}</Card.Title>
                  <Card.Description color="black">
                    {product.description}
                  </Card.Description>
                  <Text
                    textStyle="2xl"
                    fontWeight="medium"
                    letterSpacing="tight"
                    mt="2"
                    color="black"
                  >
                    {`$${product.price}`}
                  </Text>
                </Card.Body>
              </Link>
              <Card.Footer
                gap="2"
                backgroundColor="gray.300"
                paddingTop={5}
                cursor={"default"}
                display={"flex"}
                justifyContent={"center"}
                mt={"0"}
              >
                <Button variant="solid" colorPalette={"green"}>
                  Buy now
                </Button>
                <Button variant="subtle" colorPalette={"blue"}>
                  Add to cart
                </Button>
              </Card.Footer>
            </Card.Root>
          ))}
        </SimpleGrid>
      </Center>
    </Flex>
  );
};

export default Category;
