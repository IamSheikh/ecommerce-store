import { Flex, Text, Button, Link, Box } from '@chakra-ui/react';
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaEnvelope,
} from 'react-icons/fa/index';
import NextLink from 'next/link';

const SocialLinksHeader = () => {
  return (
    <Flex
      justifyContent={[
        'center',
        'center',
        'center',
        'space-between',
        'space-between',
      ]}
      p={2}
      backgroundColor='black'
      align='center'
    >
      <Flex display={['none', 'none', 'none', 'flex', 'flex']}>
        <Flex ml={10}>
          <Link color='white' fontSize='0.9rem'>
            <NextLink href='/about' passHref>
              About
            </NextLink>
          </Link>
        </Flex>
        <Flex ml={3}>
          <Link color='white' fontSize='0.9rem'>
            <NextLink href='/privacy' passHref>
              Privacy
            </NextLink>
          </Link>
        </Flex>
        <Flex ml={3}>
          <Link color='white' fontSize='0.9rem'>
            <NextLink href='/contact' passHref>
              Contact
            </NextLink>
          </Link>
        </Flex>
      </Flex>
      <Flex mr={[0, 0, 0, 20, 20]}>
        <Text color='white'>بِسمِ اللہِ الرَّحمٰنِ الرَّحِيم</Text>
      </Flex>
      <Flex display={['none', 'none', 'none', 'flex', 'flex']}>
        <Link color='white' href='https://facebook.com'>
          <FaFacebook />
        </Link>
        <Link color='white' ml={5} href='https://twitter.com'>
          <FaTwitter />
        </Link>
        <Link color='white' ml={5} href='https://instagram.com/jungkook.97'>
          <FaInstagram />
        </Link>
        <Link color='white' ml={5}>
          <FaEnvelope />
        </Link>
      </Flex>
    </Flex>
  );
};

export default SocialLinksHeader;
