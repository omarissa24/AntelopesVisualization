import { useAntelopeData } from "../context/AntelopeDataContext";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Card,
  CardHeader,
  CardBody,
  Spinner,
  Heading,
  Box,
} from "@chakra-ui/react";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const HornsDoughnutChart = () => {
  const { data, loading, error } = useAntelopeData();

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return (
      <Alert status='error'>
        <AlertIcon />
        <AlertTitle mr={2}>Error!</AlertTitle>
        <AlertDescription>{error.message}</AlertDescription>
      </Alert>
    );
  }

  const horns = data.reduce((acc, species) => {
    if (acc[species.horns]) {
      acc[species.horns] += 1;
    } else {
      acc[species.horns] = 1;
    }
    return acc;
  }, {});

  const chartData = {
    labels: Object.keys(horns),
    datasets: [
      {
        label: "Horns per Species",
        data: Object.values(horns),
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 2,
      },
    ],
  };

  return (
    <Card overflowX='auto' w='100%'>
      <CardHeader>
        <Heading size='md'>Horns per Species</Heading>
      </CardHeader>
      <CardBody>
        <Box h='100%' w='100%'>
          <Doughnut data={chartData} />
        </Box>
      </CardBody>
    </Card>
  );
};

export default HornsDoughnutChart;
