<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Knock Streetwear - Where style meets resilience. Explore our exclusive collection of streetwear for men and women.">
  <meta name="keywords" content="streetwear, fashion, men's fashion, women's fashion, Knock Streetwear">
  <meta property="og:title" content="Knock Streetwear">
  <meta property="og:description" content="Explore our exclusive collection of streetwear for men and women.">
  <meta property="og:image" content="/images/branding-image.jpg">
  <meta property="og:url" content="https://www.knockstreetwear.com">
  <meta property="og:type" content="website">
  <title>Knock Streetwear</title>
</head>
<body>
  <div id="root"></div>
  <script type="module">
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
    ReactDOM.createRoot(document.getElementById("root")).render(
      <React.StrictMode>
        <ChakraProvider theme={theme}>
          <App />
        </ChakraProvider>
      </React.StrictMode>
    );
  </script>
</body>
</html>