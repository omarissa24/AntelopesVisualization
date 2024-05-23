import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";

export const requestSort = (key, sortConfig, setSortConfig) => {
  let direction = "ascending";
  if (sortConfig.key === key && sortConfig.direction === "ascending") {
    direction = "descending";
  }
  setSortConfig({ key, direction });
};

export const renderSortIcon = (key, sortConfig) => {
  if (sortConfig.key === key) {
    if (sortConfig.direction === "ascending") {
      return <ChevronDownIcon />;
    } else {
      return <ChevronUpIcon />;
    }
  }
  return null;
};
