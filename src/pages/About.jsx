import { Box, Text, Heading, VStack, Image } from '@chakra-ui/react';

const About = () => (
  <Box p={4}>
    <VStack spacing={6} align="center">
      <Heading as="h1" size="2xl" textAlign="center" color="teal.300">About Knock Streetwear</Heading>
      <Text fontSize="lg" textAlign="center" maxW="800px">
        Welcome to Knock Streetwear, where style meets resilience. Our mission is to empower individuals through fashion, providing high-quality streetwear that embodies strength and confidence.
      </Text>
      <Image src="/images/branding-image.jpg" alt="Knock Streetwear Branding" borderRadius="md" />
      <Heading as="h2" size="lg" textAlign="center" color="teal.300">Our Mission</Heading>
      <Text fontSize="md" textAlign="center" maxW="800px">
        To create a community of empowered individuals who express their unique identities through our resilient and stylish streetwear.
      </Text>
      <Heading as="h2" size="lg" textAlign="center" color="teal.300">Our Vision</Heading>
      <Text fontSize="md" textAlign="center" maxW="800px">
        To be the leading brand in streetwear, known for our commitment to quality, innovation, and the empowerment of our community.
      </Text>
      <Heading as="h2" size="lg" textAlign="center" color="teal.300">Our Values</Heading>
      <Text fontSize="md" textAlign="center" maxW="800px">
        <strong>Resilience:</strong> We believe in the strength and determination of our community.<br />
        <strong>Style:</strong> We are committed to providing fashionable and trendy streetwear.<br />
        <strong>Community:</strong> We strive to create a supportive and inclusive community.<br />
        <strong>Quality:</strong> We are dedicated to delivering high-quality products.
      </Text>
      <Heading as="h2" size="lg" textAlign="center" color="teal.300">Our Story</Heading>
      <Text fontSize="md" textAlign="center" maxW="800px">
        Knock Streetwear was founded with the belief that fashion is more than just clothing; it's a statement of who you are. Our journey began with a passion for streetwear and a desire to create a brand that not only provides stylish apparel but also empowers individuals to express their true selves. Join us on this journey and become a part of the Knock Streetwear community.
      </Text>
    </VStack>
  </Box>
);

export default About;