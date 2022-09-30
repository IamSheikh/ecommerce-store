import { Box, Text, Flex, Link } from '@chakra-ui/react';
import collection from '../products';
import Image from 'next/image';
import NextLink from 'next/link';
import axios from 'axios';
import { useState, useEffect } from 'react';

const ShopByCollection = ({ products }) => {
  console.log(products);
  return (
    <Flex wrap='wrap' gap={5} justifyContent='center'>
      {products.map((product, i) => (
        <Link key={i}>
          <NextLink href={`/products/${product._id}`}>
            <Flex
              direction='column'
              width={250}
              height={250}
              textAlign='center'
            >
              <Image
                src={product.productImgs[0]}
                alt={product.productName}
                width={250}
                height={250}
              />
              <Text>{product.productName}</Text>
            </Flex>
          </NextLink>
        </Link>
      ))}
    </Flex>
  );
};

export default ShopByCollection;
