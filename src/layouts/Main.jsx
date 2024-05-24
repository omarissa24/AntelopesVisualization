import { AntelopeDataProvider } from "../context/AntelopeDataContext";
import Dashboard from "../pages/Dashboard";
import { Box } from "@chakra-ui/react";

function Main() {
  return (
    <AntelopeDataProvider>
      <Box
        display='flex'
        justifyContent='center'
        alignItems='center'
        w={{ xs: "100%", md: "80%" }}
        h='100%'
      >
        <Dashboard />
      </Box>
    </AntelopeDataProvider>
  );
}

export default Main;
