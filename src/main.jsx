import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
};

const theme = extendTheme({ colors });

document.title = "Knock Streetwear";
document.head.insertAdjacentHTML(
  "beforeend",
  `
  <meta name="description" content="Knock Streetwear - Where style meets resilience. Discover our exclusive collection of streetwear.">
  <meta name="keywords" content="streetwear, fashion, men's fashion, women's fashion, Knock Streetwear">
  <meta property="og:title" content="Knock Streetwear">
  <meta property="og:description" content="Discover our exclusive collection of streetwear.">
  <meta property="og:image" content="/images/branding-image.jpg" alt="Knock Streetwear Branding Image">
  <meta property="og:url" content="https://www.knockstreetwear.com">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="Knock Streetwear">
  <meta name="twitter:description" content="Discover our exclusive collection of streetwear.">
  <meta name="twitter:image" content="/images/branding-image.jpg" alt="Knock Streetwear Branding Image">
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Store",
    "name": "Knock Streetwear",
    "description": "Where style meets resilience. Discover our exclusive collection of streetwear.",
    "url": "https://www.knockstreetwear.com",
    "logo": "/images/branding-image.jpg",
    "sameAs": [
      "https://www.facebook.com/knockstreetwear",
      "https://www.instagram.com/knockstreetwear",
      "https://www.twitter.com/knockstreetwear"
    ],
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://www.knockstreetwear.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  }
  </script>
  `
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);