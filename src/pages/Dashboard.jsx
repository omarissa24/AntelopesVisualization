import AntelopeTable from "../components/AntelopeTable";
import ContinentsPieChart from "../components/ContinentsPieChart";
import HornsDoughnutChart from "../components/HornsDoughnutChart";

import { Flex, Box } from "@chakra-ui/react";

const Dashboard = () => {
  return (
    <Box h='100%' w='100%' px={{ base: 4, md: 8 }} py={5}>
      <Flex
        gap={6}
        wrap='wrap'
        h='100%'
        w='100%'
        alignItems='flex-start'
        justifyContent='center'
        flexDir={{ xs: "column", md: "row" }}
      >
        <AntelopeTable />
        <Flex
          flexDir={{ base: "column", md: "row", xl: "column" }}
          gap={6}
          justifyContent='space-between'
        >
          <HornsDoughnutChart />
          <ContinentsPieChart />
        </Flex>
      </Flex>
    </Box>
  );
};

export default Dashboard;
