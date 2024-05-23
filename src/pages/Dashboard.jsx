import AntelopeTable from "../components/AntelopeTable";
import ContinentsPieChart from "../components/ContinentsPieChart";
import HornsDoughnutChart from "../components/HornsDoughnutChart";

import { Flex, Box } from "@chakra-ui/react";

const Dashboard = () => {
  return (
    <Box h='100%' w='100%'>
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
          direction='column'
          gap={6}
          h='90vh'
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
