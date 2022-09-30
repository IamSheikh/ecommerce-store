import Page from '../layouts/page';
import { Heading, Button, Flex, Box, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import CartProduct from '../components/cart-product';

const Cart = () => {
  const [currentCart, setCurrentCart] = useState({});
  const router = useRouter();

  useEffect(() => {
    if (localStorage !== undefined) {
      const cart = JSON.parse(localStorage.getItem('currentCart'));

      setCurrentCart(cart);
    }
  }, []);
  return (
    <Page title='Cart'>
      <Flex justifyContent='center' direction='column'>
        <CartProduct
          productName={currentCart.productName}
          productImg={currentCart.productImgs}
          productPrice={currentCart.price}
        />

        <Flex justify='right'>
          <Flex direction='column'>
            <Box>
              <Heading size='lg'>Cart Total</Heading>

              <Text>Total: {currentCart.price}</Text>
            </Box>
            <Box>
              <Button
                colorScheme='purple'
                onClick={() => router.push('/checkout')}
              >
                Next Step
              </Button>
            </Box>
          </Flex>
        </Flex>
      </Flex>
    </Page>
  );
};

export default Cart;
