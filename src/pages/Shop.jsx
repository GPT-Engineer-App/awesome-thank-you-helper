import { Container, Text, VStack, Heading, Box, Image, Button, SimpleGrid } from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";
import galleryImage1 from '../../public/images/gallery-image-1.jpg';
import galleryImage2 from '../../public/images/gallery-image-2.jpg';
import galleryImage3 from '../../public/images/gallery-image-3.jpg';
import galleryImage4 from '../../public/images/gallery-image-4.jpg';
import galleryImage5 from '../../public/images/gallery-image-5.jpg';
import logoSleeve from '../../public/images/logo-sleeve.png';

const Shop = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" bg="gray.900" color="white" p={{ base: 4, md: 8 }} m={{ base: 4, md: 8 }}>
      <VStack spacing={6}>
        <header>
          <Heading as="h1" size="2xl" textAlign="center" color="teal.300">Shop Knock Streetwear</Heading>
        </header>
        <Text fontSize="lg" textAlign="center">Discover our exclusive collection of streetwear.</Text>
        <Box boxSize={{ base: "xs", md: "sm" }}>
          <Image src="/images/shop-image.jpg" alt="Knock Streetwear Shop" borderRadius="md" />
        </Box>
        <Button leftIcon={<FaShoppingCart />} colorScheme="teal" variant="solid" size="lg">
          Start Shopping
        </Button>
      </VStack>

      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} mt={10}>
        <Box>
          <Heading as="h2" size="lg" color="teal.300">Hoodies</Heading>
          <Box boxSize="sm" bg="gray.700" borderRadius="md" mt={4} p={4} position="relative">
            <Image src={galleryImage1} alt="Hoodies" borderRadius="md" />
            <Image src={logoSleeve} alt="Logo on Sleeve" position="absolute" bottom="10px" right="10px" boxSize="1in" />
          </Box>
        </Box>
        <Box>
          <Heading as="h2" size="lg" color="teal.300">Pants</Heading>
          <Box boxSize="sm" bg="gray.700" borderRadius="md" mt={4} p={4} position="relative">
            <Image src={galleryImage2} alt="Pants" borderRadius="md" />
            <Image src={logoSleeve} alt="Logo on Sleeve" position="absolute" bottom="10px" right="10px" boxSize="1in" />
          </Box>
        </Box>
        <Box>
          <Heading as="h2" size="lg" color="teal.300">Shirts</Heading>
          <Box boxSize="sm" bg="gray.700" borderRadius="md" mt={4} p={4} position="relative">
            <Image src={galleryImage3} alt="Shirts" borderRadius="md" />
            <Image src={logoSleeve} alt="Logo on Sleeve" position="absolute" bottom="10px" right="10px" boxSize="1in" />
          </Box>
        </Box>
        <Box>
          <Heading as="h2" size="lg" color="teal.300">Jerseys</Heading>
          <Box boxSize="sm" bg="gray.700" borderRadius="md" mt={4} p={4} position="relative">
            <Image src={galleryImage4} alt="Jerseys" borderRadius="md" />
            <Image src={logoSleeve} alt="Logo on Sleeve" position="absolute" bottom="10px" right="10px" boxSize="1in" />
          </Box>
        </Box>
        <Box>
          <Heading as="h2" size="lg" color="teal.300">Accessories</Heading>
          <Box boxSize="sm" bg="gray.700" borderRadius="md" mt={4} p={4} position="relative">
            <Image src={galleryImage5} alt="Accessories" borderRadius="md" />
            <Image src={logoSleeve} alt="Logo on Sleeve" position="absolute" bottom="10px" right="10px" boxSize="1in" />
          </Box>
        </Box>
      </SimpleGrid>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          "name": "Knock Streetwear Products",
          "image": [
            "https://www.knockstreetwear.com/images/gallery-image-1.jpg",
            "https://www.knockstreetwear.com/images/gallery-image-2.jpg",
            "https://www.knockstreetwear.com/images/gallery-image-3.jpg",
            "https://www.knockstreetwear.com/images/gallery-image-4.jpg",
            "https://www.knockstreetwear.com/images/gallery-image-5.jpg"
          ],
          "description": "Discover our exclusive collection of streetwear.",
          "brand": {
            "@type": "Brand",
            "name": "Knock Streetwear"
          }
        })}
      </script>
    </Container>
  );
};

export default Shop;