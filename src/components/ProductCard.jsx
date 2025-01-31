/* eslint-disable react/prop-types */
import { Link } from "react-router";
import { Card, Image, Text, Button } from "@chakra-ui/react";
import { Wallet, ShoppingCart } from "lucide-react";

const ProductCard = ({ product }) => {
  return (
    <Link key={product.id} to={`/products/${product.id}`}>
      <Card.Root
        maxW="sm"
        overflow="hidden"
        backgroundColor={"white"}
        cursor={"pointer"}
        h={700}
        _hover={{
          shadow: "md",
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
        <Card.Body gap="2" backgroundColor="whitesmoke">
          <Card.Title color="black">{product.title}</Card.Title>
          <Card.Description color="black">
            {product.description?.length > 400
              ? `${product.description.slice(0, 400)}(...)`
              : product.description}
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
            <Wallet />
            Buy now
          </Button>
          <Button variant="subtle" colorPalette={"blue"}>
            <ShoppingCart />
            Add to cart
          </Button>
        </Card.Footer>
      </Card.Root>
    </Link>
  );
};

export default ProductCard;
