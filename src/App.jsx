import Main from "./layouts/Main";
import Header from "./layouts/Header";
import { Box } from "@chakra-ui/react";

function App() {
  return (
    <Box bg='gray.50' minH='100vh'>
      <Header />
      <Main />
    </Box>
  );
}

export default App;
