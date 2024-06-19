import { Box, Flex, Heading, Link, Stack, IconButton, useDisclosure } from "@chakra-ui/react";
import { FaBars, FaTimes, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { Route, BrowserRouter as Router, Routes, Link as RouterLink } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Shop from "./pages/Shop.jsx";
import Mens from "./pages/Mens.jsx";
import Womens from "./pages/Womens.jsx";
import BackgroundMusic from "./components/BackgroundMusic.jsx"; // Import BackgroundMusic component

const NavBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box bg="teal.500" px={4} py={2}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Heading as="h1" size="lg" color="white">Knock Streetwear</Heading>
        <IconButton
          size="md"
          icon={isOpen ? <FaTimes /> : <FaBars />}
          aria-label="Open Menu"
          display={{ md: "none" }}
          onClick={isOpen ? onClose : onOpen}
        />
        <Flex alignItems="center" display={{ base: "none", md: "flex" }}>
          <Link as={RouterLink} to="/" px={2} color="white">Home</Link>
          <Link as={RouterLink} to="/about" px={2} color="white">About</Link>
          <Link as={RouterLink} to="/shop" px={2} color="white">Shop</Link>
          <Link as={RouterLink} to="/mens" px={2} color="white">Men's</Link>
          <Link as={RouterLink} to="/womens" px={2} color="white">Women's</Link>
          <Flex alignItems="center">
            <Link href="https://www.facebook.com" isExternal px={2} color="white">
              <FaFacebook size="24px" />
            </Link>
            <Link href="https://www.instagram.com" isExternal px={2} color="white">
              <FaInstagram size="24px" />
            </Link>
            <Link href="https://www.twitter.com" isExternal px={2} color="white">
              <FaTwitter size="24px" />
            </Link>
          </Flex>
        </Flex>
      </Flex>

      {isOpen ? (
        <Box pb={4} display={{ md: "none" }}>
          <Stack as="nav" spacing={4}>
            <Link as={RouterLink} to="/" onClick={onClose}>Home</Link>
            <Link as={RouterLink} to="/about" onClick={onClose}>About</Link>
            <Link as={RouterLink} to="/shop" onClick={onClose}>Shop</Link>
            <Link as={RouterLink} to="/mens" onClick={onClose}>Men's</Link>
            <Link as={RouterLink} to="/womens" onClick={onClose}>Women's</Link>
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
};

function App() {
  return (
    <Router>
      <NavBar />
      <BackgroundMusic /> {/* Add BackgroundMusic component */}
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/mens" element={<Mens />} />
        <Route path="/womens" element={<Womens />} />
      </Routes>
    </Router>
  );
}

export default App;