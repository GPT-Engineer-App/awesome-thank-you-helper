import React, { useState } from 'react';
import { Box, Button, FormControl, FormLabel, Input, Checkbox, Text } from '@chakra-ui/react';

const SubscribeForm = () => {
  const [email, setEmail] = useState('');
  const [consent, setConsent] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!consent) {
      setMessage('You must agree to the privacy policy.');
      return;
    }

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setMessage('Thank you for subscribing!');
        setEmail('');
        setConsent(false);
      } else {
        setMessage('Subscription failed. Please try again.');
      }
    } catch (error) {
      setMessage('An error occurred. Please try again.');
    }
  };

  return (
    <Box as="form" onSubmit={handleSubmit} p={4} borderWidth={1} borderRadius="md" boxShadow="md">
      <FormControl id="email" isRequired>
        <FormLabel>Email address</FormLabel>
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormControl>
      <FormControl id="consent" isRequired mt={4}>
        <Checkbox
          isChecked={consent}
          onChange={(e) => setConsent(e.target.checked)}
        >
          I agree to the <a href="/privacy-policy" target="_blank" rel="noopener noreferrer">privacy policy</a>.
        </Checkbox>
      </FormControl>
      <Button type="submit" colorScheme="teal" mt={4}>Subscribe</Button>
      {message && <Text mt={4}>{message}</Text>}
    </Box>
  );
};

export default SubscribeForm;