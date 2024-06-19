import { Box, Text, Heading, VStack, Image } from '@chakra-ui/react';

const About = () => (
  <Box p={4}>
    <VStack spacing={4} align="start">
      <Heading as="h1" size="xl">About Knock Streetwear</Heading>
      <Text fontSize="lg">
        Knock Streetwear is where style meets resilience. Our mission is to provide high-quality, fashionable streetwear that empowers individuals to express their unique identities.
      </Text>
      <Text fontSize="lg">
        Our vision is to become a leading brand in the streetwear industry, known for our innovative designs and commitment to sustainability.
      </Text>
      <Text fontSize="lg">
        Our values include creativity, authenticity, and sustainability. We believe in creating clothing that not only looks good but also makes a positive impact on the world.
      </Text>
      <Image src="/images/branding-image.jpg" alt="Knock Streetwear Branding" borderRadius="md" />
    </VStack>
  </Box>
);

export default About;