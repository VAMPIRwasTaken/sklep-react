import useSWR from "swr";
import { Flex, Spinner, Alert, SimpleGrid } from "@chakra-ui/react";
import { createListCollection } from "@chakra-ui/react";
import { useState } from "react";

import ProductCard from "@/components/ProductCard";
import {
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectRoot,
  SelectTrigger,
  SelectValueText,
} from "@/components/ui/select";

const Home = () => {
  const [currentLimit, setCurrentLimit] = useState([4]);
  const [sortOrder, setSortOrder] = useState(["asc"]);
  const {
    data: products,
    error,
    isLoading,
  } = useSWR(`/products?sort=${sortOrder}&limit=${currentLimit}`);

  const productLimit = createListCollection({
    items: [
      { label: "4", value: "4" },
      { label: "8", value: "8" },
      { label: "16", value: "16" },
    ],
  });

  const sortingOrder = createListCollection({
    items: [
      { label: "Ascending", value: "asc" },
      { label: "Descending", value: "desc" },
    ],
  });

  return (
    <Flex
      justifyContent={"center"}
      alignItems={"center"}
      flexDirection={"column"}
      gap={6}
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
      <Flex gap={4} direction="row">
        <SelectRoot
          collection={productLimit}
          size="sm"
          width="320px"
          value={currentLimit}
          onValueChange={(event) => setCurrentLimit(event.value)}
        >
          <SelectLabel>Select product limit on page </SelectLabel>
          <SelectTrigger>
            <SelectValueText placeholder="Select limit" />
          </SelectTrigger>
          <SelectContent>
            {productLimit.items.map((limit) => (
              <SelectItem item={limit} key={limit.value}>
                {limit.label}
              </SelectItem>
            ))}
          </SelectContent>
        </SelectRoot>

        <SelectRoot
          collection={sortingOrder}
          size="sm"
          width="320px"
          value={sortOrder}
          onValueChange={(value) => setSortOrder(value)}
        >
          <SelectLabel>Choose selecting order</SelectLabel>
          <SelectTrigger>
            <SelectValueText placeholder="Choose selecting order" />
          </SelectTrigger>
          <SelectContent>
            {sortingOrder.items.map((order) => (
              <SelectItem item={order} key={order.value}>
                {order.label}
              </SelectItem>
            ))}
          </SelectContent>
        </SelectRoot>
      </Flex>
      <SimpleGrid columns={4} gap={8}>
        {products?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </SimpleGrid>
    </Flex>
  );
};

export default Home;
