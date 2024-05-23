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
} from "@chakra-ui/react";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const ContinentsPieChart = () => {
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

  const continents = data.reduce((acc, species) => {
    if (acc[species.continent]) {
      acc[species.continent] += 1;
    } else {
      acc[species.continent] = 1;
    }
    return acc;
  }, {});

  const chartData = {
    labels: Object.keys(continents),
    datasets: [
      {
        label: "Species per Continent",
        data: Object.values(continents),
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
    <Card overflowX='auto' w='100%' minH='405px'>
      <CardHeader>
        <Heading size='md'>Species per Continent</Heading>
      </CardHeader>
      <CardBody>
        <Pie data={chartData} />
      </CardBody>
    </Card>
  );
};

export default ContinentsPieChart;
