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
            <Link key={product.id} to={`/products/${product.id}`}>
              <Card.Root
                key={product.id}
                maxW="sm"
                overflow="hidden"
                backgroundColor={"white"}
                cursor={"pointer"}
              >
                <Image
                  src={product.image}
                  alt={product.title}
                  width={400}
                  height={200}
                  objectFit={"contain"}
                  padding={2}
                />
                <Card.Body gap="2" backgroundColor="whitesmoke">
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
                <Card.Footer
                  gap="2"
                  backgroundColor="gray.300"
                  paddingTop={5}
                  cursor={"default"}
                >
                  <Button variant="solid" colorPalette={"green"}>
                    Buy now
                  </Button>
                  <Button variant="subtle" colorPalette={"blue"}>
                    Add to cart
                  </Button>
                </Card.Footer>
              </Card.Root>
            </Link>
          ))}
        </SimpleGrid>
      </Center>
    </Flex>
  );
};

export default Category;
