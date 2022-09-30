import { Flex, Text, Image, Box, Button } from '@chakra-ui/react';

const CartProduct = ({
  productName,
  productImg,
  productPrice,
  productQuantity,
}) => {
  return (
    <Flex ml={5} mt={5} justifyCotent='center' alignItems='center'>
      <Image
        src={productImg}
        alt={productName}
        width={100}
        height={100}
        rounded='md'
      />
      <Flex direction='column'>
        <Text fontSize='2xl' fontWeight='bold' ml={2}>
          {productName}
        </Text>
        <Text ml={2}>Rs. {productPrice}</Text>
      </Flex>
    </Flex>
  );
};

export default CartProduct;
