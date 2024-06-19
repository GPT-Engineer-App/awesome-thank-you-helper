import { Container, Text, VStack, Heading, Box, Image, Button } from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";

const Mens = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" bg="gray.900" color="white" p={{ base: 4, md: 8 }} m={{ base: 4, md: 8 }}>
      <VStack spacing={6}>
        <header>
          <Heading as="h1" size="2xl" textAlign="center" color="teal.300">Men's Collection</Heading>
        </header>
        <Text fontSize="lg" textAlign="center">Explore our exclusive collection of men's streetwear.</Text>
        <Box boxSize={{ base: "xs", md: "sm" }}>
          <Image src="/images/mens-placeholder.jpg" alt="Men's Collection" borderRadius="md" />
        </Box>
        <Button leftIcon={<FaShoppingCart />} colorScheme="teal" variant="solid" size="lg">
          Shop Men's
        </Button>
      </VStack>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          "name": "Men's Collection",
          "image": "https://www.knockstreetwear.com/images/mens-placeholder.jpg",
          "description": "Explore our exclusive collection of men's streetwear.",
          "brand": {
            "@type": "Brand",
            "name": "Knock Streetwear"
          }
        })}
      </script>
    </Container>
  );
};

export default Mens;