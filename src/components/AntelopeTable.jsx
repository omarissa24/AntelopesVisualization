import { useAntelopeData } from "../context/AntelopeDataContext";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Spinner,
  Avatar,
  Card,
  CardHeader,
  CardBody,
  Heading,
  useDisclosure,
  Flex,
} from "@chakra-ui/react";

import { css } from "@emotion/react";

import { requestSort, renderSortIcon } from "../utils/tables";

import { useState } from "react";

import PictureModal from "./PictureModal";

const AntelopeTable = () => {
  const { data, loading, error } = useAntelopeData();

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [modalPicture, setModalPicture] = useState("");
  const [modalTitle, setModalTitle] = useState("Antelope Species");

  const [sortConfig, setSortConfig] = useState({
    key: "",
    direction: "ascending",
  });

  let sortedData = [...data];
  if (sortConfig.key) {
    sortedData.sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === "ascending" ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === "ascending" ? 1 : -1;
      }
      return 0;
    });
  }

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

  const hoverAnimation = css`
    &:hover {
      background-color: #f5f5f5;
      transform: scale(1.02);
      transition: transform 0.2s, background-color 0.2s;
    }
  `;

  return (
    <Card h='100%'>
      <CardHeader>
        <Heading size='md'>Antelope Species</Heading>
      </CardHeader>
      <CardBody>
        <TableContainer h='75vh' overflowY='scroll'>
          <Table variant='simple' size='sm'>
            <Thead pos='sticky' top='0' bg='white' zIndex='10'>
              <Tr>
                <Th
                  onClick={() => requestSort("name", sortConfig, setSortConfig)}
                  cursor='pointer'
                >
                  Name {renderSortIcon("name", sortConfig)}
                </Th>
                <Th
                  onClick={() =>
                    requestSort("continent", sortConfig, setSortConfig)
                  }
                  cursor='pointer'
                >
                  Continent {renderSortIcon("continent", sortConfig)}
                </Th>
                <Th
                  onClick={() =>
                    requestSort("weight", sortConfig, setSortConfig)
                  }
                  cursor='pointer'
                >
                  Weight (lb) {renderSortIcon("weight", sortConfig)}
                </Th>
                <Th
                  onClick={() =>
                    requestSort("height", sortConfig, setSortConfig)
                  }
                  cursor='pointer'
                >
                  Height (in) {renderSortIcon("height", sortConfig)}
                </Th>
                <Th
                  onClick={() =>
                    requestSort("horns", sortConfig, setSortConfig)
                  }
                  cursor='pointer'
                >
                  Horns {renderSortIcon("horns", sortConfig)}
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              {sortedData.map((species) => (
                <>
                  <Tr
                    cursor='pointer'
                    key={species.name}
                    onClick={() => {
                      setModalPicture(species.picture);
                      setModalTitle(species.name);
                      onOpen();
                    }}
                    css={hoverAnimation}
                  >
                    <Td>
                      <Flex alignItems='center' gap={4}>
                        <Avatar
                          name={species.name}
                          src={species.picture}
                        ></Avatar>
                        {species.name}
                      </Flex>
                    </Td>
                    <Td>{species.continent}</Td>
                    <Td>{species.weight}</Td>
                    <Td>{species.height}</Td>
                    <Td>{species.horns}</Td>
                  </Tr>
                </>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
        <PictureModal
          picture={modalPicture}
          title={modalTitle}
          isOpen={isOpen}
          onClose={onClose}
        />
      </CardBody>
    </Card>
  );
};

export default AntelopeTable;
