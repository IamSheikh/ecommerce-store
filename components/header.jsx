import { Text, Box, Flex, Input, Link, Button } from '@chakra-ui/react';
import { FaUserAstronaut, FaShoppingCart, FaSearch } from 'react-icons/fa';
import Image from 'next/image';
import NextLink from 'next/link';
import { auth } from '../firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react';

const Header = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        if (user.displayName) {
          console.log(user.displayName);
          setUser(user.displayName);
        }
      } else {
        setUser(null);
      }
    });
  }, [user]);
  return (
    <Flex
      justifyContent='space-between'
      backgroundColor='yellow.400'
      p={6}
      alignItems='center'
    >
      <Flex as='form'>
        <Input
          type='text'
          placeholder='Search Products'
          backgroundColor='white'
        />
        <Button
          bg='none'
          _hover={{ bg: 'none' }}
          _focus={{ bg: 'none', outline: 'none' }}
        >
          <FaSearch />
        </Button>
      </Flex>

      <NextLink href='/' passHref>
        <Link as='a'>
          <Image src='/logo.png' alt='Babyset Store' width={170} height={100} />
        </Link>
      </NextLink>

      <Flex>
        <NextLink href='/login' passHref>
          <Link>
            <Box display='flex'>
              <FaUserAstronaut fontSize='2rem' />
              <Text fontSize='xl' ml={2}>
                {user}
              </Text>
            </Box>
          </Link>
        </NextLink>
        <FaShoppingCart fontSize='2rem' />
      </Flex>
    </Flex>
  );
};

export default Header;
