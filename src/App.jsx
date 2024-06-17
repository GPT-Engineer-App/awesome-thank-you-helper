import { Box, Flex, Heading, Link } from "@chakra-ui/react";
import { Route, BrowserRouter as Router, Routes, Link as RouterLink } from "react-router-dom";
import Index from "./pages/Index.jsx";

const NavBar = () => (
  <Box bg="teal.500" px={4} py={2}>
    <Flex h={16} alignItems="center" justifyContent="space-between">
      <Heading as="h1" size="lg" color="white">Knock Streetwear</Heading>
      <Flex alignItems="center">
        <Link as={RouterLink} to="/" px={2} color="white">Home</Link>
        <Link as={RouterLink} to="/about" px={2} color="white">About</Link>
        <Link as={RouterLink} to="/shop" px={2} color="white">Shop</Link>
      </Flex>
    </Flex>
  </Box>
);

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Index />} />
      </Routes>
    </Router>
  );
}

export default App;
