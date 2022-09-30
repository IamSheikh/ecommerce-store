import Page from '../layouts/page.jsx';
import { Text, Box, Flex, Heading } from '@chakra-ui/react';

const OrderComplete = () => {
  return (
    <Page title='Order Complete'>
      <Flex justifyContent='center' alignItems='center' h='70vh'>
        <Box
          backgroundColor='green.300'
          width={500}
          color='white'
          rounded='lg'
          p={3}
          textAlign='center'
        >
          <Heading size='lg'>Order Completed Sucessfully</Heading>
        </Box>
      </Flex>
    </Page>
  );
};

export default OrderComplete;
