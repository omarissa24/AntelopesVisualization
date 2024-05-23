import { Flex, Heading } from "@chakra-ui/react";

const Header = () => {
  return (
    <Flex
      as='header'
      align='center'
      justify='space-between'
      w='full'
      h='16'
      px='8'
      mb='8'
      bg='gray.800'
      color='white'
    >
      <Heading as='h1' size='md'>
        Antelopes Madkudu
      </Heading>
    </Flex>
  );
};

export default Header;
