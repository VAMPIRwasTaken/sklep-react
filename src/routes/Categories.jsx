import {
  Flex,
  Spinner,
  Alert,
  Box,
  Card,
  Image,
  SimpleGrid,
} from "@chakra-ui/react";
import useSWR from "swr";
import { Link } from "react-router";

import { categoryImages } from "@/data/category";

const Categories = () => {
  const { data: categories, error, isLoading } = useSWR("/products/categories");

  return (
    <Flex
      gap={5}
      flexDir={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      paddingTop={10}
      paddingBottom={10}
    >
      {isLoading && <Spinner size="2xl" />}

      {error && (
        <Alert.Root status="error" maxWidth={"30%"}>
          <Alert.Indicator />
          <Alert.Content>
            <Alert.Title>Server Error</Alert.Title>
            <Alert.Description>Sorry for that...</Alert.Description>
          </Alert.Content>
        </Alert.Root>
      )}

      {categories?.length > 0 && (
        <SimpleGrid columns={2} gap={19}>
          {categories?.map((category) => (
            <Link key={category} to={`/categories/${category}`}>
              <Card.Root
                flexDirection="row"
                width="xl"
                shadow={"md"}
                border="none"
                _hover={{
                  transform: "scale(1.05)",
                  cursor: "pointer",
                }}
                transition={"all ease-in-out 0.3s"}
              >
                <Image
                  objectFit="cover"
                  maxWidth="200px"
                  src={categoryImages?.[category]}
                  alt="category image"
                />
                <Box>
                  <Card.Body backgroundColor={"white"}>
                    <Card.Title color="black" marginBottom="2" fontSize={"xl"}>
                      {category.toUpperCase()}
                    </Card.Title>
                    <Card.Description color="gray.500">
                      Cras et tempus magna. Phasellus accumsan lorem id pretium
                      gravida. Sed ante nisl, faucibus condimentum tincidunt no.
                    </Card.Description>
                  </Card.Body>
                </Box>
              </Card.Root>
            </Link>
          ))}
        </SimpleGrid>
      )}
    </Flex>
  );
};

export default Categories;

// useEffect(() => {
//   axios
//     .get("https://fakestoreapi.com/products/categories")
//     .then((response) => {
//       console.log(response.status);
//       setCategories(response.data);
//     })
//     .catch((error) => {
//       setError(true);
//     })
//     .finally(() => {
//       setLoading(false);
//     });
// }, []);

// useEffect(() => {
//   const fetchCategories = async () => {
//     try {
//       const response = await axios.get(
//         "https://fakestoreapi.com/products/categories"
//       );

//       setCategories(response.data);
//     } catch (error) {
//       setError(true);
//     } finally {
//       setLoading(false);
//     }
//   };

//   fetchCategories();
// }, []);

// useEffect(() => {
//   const interval = setInterval(() => {
//     console.log("TEST Interval");
//   }, 200);

//   const timeout = setTimeout(() => {
//     console.log("TEST Timeout");
//   }, 200);

//   return () => {
//     clearInterval(interval);
//     clearTimeout(timeout);
//   };
// }, []);

//   return (
//     <Flex gap={5} flexDir={"column"}>
//       {loading && <Spinner size="xl" />}
//       {error && <Text color="red">{"Error"}</Text>}
//       {categories.map((category) => (
//         <Text key={category}>{category}</Text>
//       ))}
//     </Flex>
//   );
// };
