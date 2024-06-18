import { Container, Text, VStack, Heading, Box, Image, SimpleGrid } from "@chakra-ui/react";

const Shop = () => {
  return (
    <Container centerContent maxW="container.md" minHeight="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" bg="gray.900" color="white" p={{ base: 4, md: 8 }} m={{ base: 4, md: 8 }}>
      <VStack spacing={6}>
        <header>
          <Heading as="h1" size="2xl" textAlign="center" color="teal.300">Shop Knock Streetwear</Heading>
        </header>
        <Text fontSize="lg" textAlign="center">Discover our exclusive collection of streetwear.</Text>
        <Box boxSize={{ base: "xs", md: "sm" }}>
          <Image src="/images/shop-image.jpg" alt="Knock Streetwear Shop" borderRadius="md" />
        </Box>
      </VStack>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} mt={10}>
        <Box>
          <Heading as="h2" size="lg" textAlign="center" color="teal.300">Hoodies</Heading>
          <Box mt={4} p={4} bg="gray.800" borderRadius="md">
            <Text textAlign="center">Placeholder for hoodies images and descriptions.</Text>
          </Box>
        </Box>
        <Box>
          <Heading as="h2" size="lg" textAlign="center" color="teal.300">Pants</Heading>
          <Box mt={4} p={4} bg="gray.800" borderRadius="md">
            <Text textAlign="center">Placeholder for pants images and descriptions.</Text>
          </Box>
        </Box>
        <Box>
          <Heading as="h2" size="lg" textAlign="center" color="teal.300">Shirts</Heading>
          <Box mt={4} p={4} bg="gray.800" borderRadius="md">
            <Text textAlign="center">Placeholder for shirts images and descriptions.</Text>
          </Box>
        </Box>
        <Box>
          <Heading as="h2" size="lg" textAlign="center" color="teal.300">Jerseys</Heading>
          <Box mt={4} p={4} bg="gray.800" borderRadius="md">
            <Text textAlign="center">Placeholder for jerseys images and descriptions.</Text>
          </Box>
        </Box>
      </SimpleGrid>
    </Container>
  );
};

export default Shop;