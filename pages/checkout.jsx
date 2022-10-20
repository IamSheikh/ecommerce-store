import Page from '../layouts/page.jsx';
import { Heading, Flex, Box, Input, Text, Button } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import axios from 'axios';
import { useState, useEffect } from 'react';

const Checkout = () => {
  const [name, setName] = useState('');
  const [mobileNumber, setMobileNumber] = useState(0);
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [city, setCity] = useState('');
  const [currentCart, setCurrentCart] = useState({})
  const router = useRouter();

  useEffect(() => {
    console.table({currentCart})
  }, [currentCart])
  
  useEffect(() => {
    if (localStorage !== undefined) {
      let cc = localStorage.getItem('currentCart')
      setCurrentCart(JSON.parse(cc))
    }
  }, [])

  const confirmOrder = () => {
    const { quantity, productName, productImgs, price, sizes, nameToPrint } = currentCart
    const fields = {
      name,
      mobileNumber,
      deliveryAddress,
      city,
      productQuantity: quantity,
      productName,
      productImg: productImgs,
      productNameToPrint: nameToPrint,
      size: sizes,   
      price
    };
    axios
      .post('/api/order/new-order', fields)
      .then((response) => {
        router.push('/order-complete');
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <Page title='Checkout'>
      <Heading>Checkout</Heading>

      <Flex as='form' direction='column' align='center' ml={5}>
        <Box mb={2}>
          <Text fontSize='2xl' fontWeight='semibold'>
            Name <span style={{ color: 'red' }}>*</span>
          </Text>
          <Input
            type='text'
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Box>
        <Box mb={2}>
          <Text fontSize='2xl' fontWeight='semibold'>
            Mobile number <span style={{ color: 'red' }}>*</span>
          </Text>
          <Input
            type='tel'
            required
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
          />
        </Box>
        <Box mb={2}>
          <Text fontSize='2xl' fontWeight='semibold'>
            Delivery Address <span style={{ color: 'red' }}>*</span>
          </Text>
          <Input
            type='tel'
            required
            width={300}
            value={deliveryAddress}
            onChange={(e) => setDeliveryAddress(e.target.value)}
          />
        </Box>
        <Box mb={2}>
          <Text fontSize='2xl' fontWeight='semibold'>
            City <span style={{ color: 'red' }}>*</span>
          </Text>
          <Input
            type='text'
            required
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </Box>
        <Button onClick={confirmOrder} colorScheme='purple'>
          Confirm Order
        </Button>
      </Flex>
    </Page>
  );
};

export default Checkout;
