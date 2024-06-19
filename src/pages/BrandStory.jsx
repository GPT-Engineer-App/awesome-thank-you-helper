import { Box, Text, Heading, VStack, Image } from '@chakra-ui/react';

const BrandStory = () => (
  <Box p={4}>
    <VStack spacing={4} align="start">
      <Heading as="h1" size="xl">Our Story</Heading>
      <Text fontSize="lg">
        Knock Streetwear was born out of a desire to create clothing that not only looks good but also stands for something. Our founder, Jane Doe, started the brand in 2020 with a vision to combine style and resilience.
      </Text>
      <Text fontSize="lg">
        From humble beginnings, we have grown into a brand that is recognized for its innovative designs and commitment to sustainability. Our journey has been fueled by a passion for creativity and a dedication to making a positive impact on the world.
      </Text>
      <Text fontSize="lg">
        We believe that fashion should be a force for good, and we are committed to using our platform to promote positive change. Thank you for being a part of our story.
      </Text>
      <Image src="/images/branding-image.jpg" alt="Knock Streetwear Branding" borderRadius="md" />
    </VStack>
  </Box>
);

export default BrandStory;