import { Container, Text, VStack, Heading, Box, Image, Button } from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" bg="gray.900" color="white" p={{ base: 4, md: 8 }} m={{ base: 4, md: 8 }}>
      <VStack spacing={6}>
        <header>
          <Heading as="h1" size="2xl" textAlign="center" color="teal.300">Knock Streetwear</Heading>
        </header>
        <Text fontSize="lg" textAlign="center">Welcome to the School of Hard Knocks. Where style meets resilience.</Text>
        <Box boxSize={{ base: "xs", md: "sm" }}>
          <Image src="/images/branding-image.jpg" alt="Knock Streetwear Branding" borderRadius="md" />
        </Box>
        <Button leftIcon={<FaShoppingCart />} colorScheme="teal" variant="solid" size="lg">
          Shop Now
        </Button>
      </VStack>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Knock Streetwear",
          "url": "https://www.knockstreetwear.com",
          "logo": "https://www.knockstreetwear.com/images/logo.png",
          "sameAs": [
            "https://www.facebook.com/knockstreetwear",
            "https://www.instagram.com/knockstreetwear",
            "https://www.twitter.com/knockstreetwear"
          ]
        })}
      </script>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          "name": "Knock Streetwear T-Shirt",
          "image": "https://www.knockstreetwear.com/images/tshirt.jpg",
          "description": "High-quality streetwear t-shirt from Knock Streetwear.",
          "sku": "12345",
          "brand": {
            "@type": "Brand",
            "name": "Knock Streetwear"
          },
          "offers": {
            "@type": "Offer",
            "url": "https://www.knockstreetwear.com/shop/tshirt",
            "priceCurrency": "USD",
            "price": "29.99",
            "itemCondition": "https://schema.org/NewCondition",
            "availability": "https://schema.org/InStock"
          }
        })}
      </script>
    </Container>
  );
};

export default Index;