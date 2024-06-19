import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';

const PrivacyPolicy = () => (
  <Box p={4}>
    <Heading as="h1" size="xl" mb={4}>Privacy Policy</Heading>
    <Text mb={4}>
      Your privacy is important to us. This privacy policy explains how we collect, use, and protect your information.
    </Text>
    <Heading as="h2" size="lg" mb={2}>Information Collection</Heading>
    <Text mb={4}>
      We collect information that you provide to us directly, such as when you subscribe to our newsletter.
    </Text>
    <Heading as="h2" size="lg" mb={2}>Use of Information</Heading>
    <Text mb={4}>
      We use the information we collect to send you promotional emails and updates about our products.
    </Text>
    <Heading as="h2" size="lg" mb={2}>Protection of Information</Heading>
    <Text mb={4}>
      We implement security measures to protect your information from unauthorized access.
    </Text>
    <Heading as="h2" size="lg" mb={2}>Contact Us</Heading>
    <Text>
      If you have any questions about this privacy policy, please contact us at support@knockstreetwear.com.
    </Text>
  </Box>
);

export default PrivacyPolicy;