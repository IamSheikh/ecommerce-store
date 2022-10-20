import { Flex, Box, Text, Heading, Link } from '@chakra-ui/react';
import NextLink from 'next/link';

const Footer = () => {
  return (
    <Flex
      backgroundColor='black'
      color='white'
      px={8}
      py={5}
      justify='center'
      mt={2}
    >
      <Text fontSize='lg' fontWeight='semibold'>
        Copyright &copy; 2022-23 Babyset Developers{' '}
      </Text>
    </Flex>
  );
};

export default Footer;
