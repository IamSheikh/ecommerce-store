import {
  Box,
  Text,
  Flex,
  Input,
  Heading,
  Image,
  Radio,
  RadioGroup,
  Button,
} from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const Product = ({ product }) => {
  const [sizes, setSizes] = useState(product.categoryBasedProps[0][0]);
  const [color, setColor] = useState('Black');
  const [quantity, setQuantity] = useState(1);
  const [nameToPrint, setNameToPrint] = useState('');
  const router = useRouter();

  useEffect(() => {
    console.log(sizes);
  }, [sizes]);

  console.log(product);

  const buyNow = () => {
    localStorage.setItem(
      'currentCart',
      JSON.stringify({
        quantity,
        productName: product.productName,
        productImgs: product.productImgs[0],
        price: product.price * quantity,
        sizes: sizes,
        nameToPrint,
      })
    );

    router.push('/cart');
  };

  return (
    <Flex justify='center' align='center' h='100vh'>
      <Image
        src={product.productImgs[0]}
        alt={product.produtName}
        width={500}
        height={500}
        rounded='3xl'
        mr={100}
      />
      <Flex justify='center' direction='column'>
        <Heading>{product.productName}</Heading>
        <Text fontSize='xl' color='gray.700' fontWeight='bold'>
          Rs.{product.price}
        </Text>
        {/* <Text width={300}>{product.description}</Text> */}
        <Flex direction='column' mt={5}>
          <Text fontSize='lg' fontWeight='bold'>
            Name to print
          </Text>
          <Input
            type='text'
            mt={2}
            borderColor='gray.800'
            borderWidth={1}
            borderStyle='solid'
            _hover={{ borderWidth: 1, borderColor: 'black', outline: 'none' }}
            _focus={{
              borderWidth: 1,
              borderColor: 'black',
              outlineColor: 'none',
            }}
            _active={{
              borderWidth: 1,
              borderColor: 'black',
              outlineColor: 'none',
            }}
            rounded='sm'
            py={5}
            value={nameToPrint}
            onChange={(e) => setNameToPrint(e.target.value)}
          />
        </Flex>
        {/* <Flex direction='column' mt={5}>
          <Text fontSize='lg' fontWeight='bold'>
            Select Color
            <RadioGroup onChange={setColor} value={color}>
              {product.colors.map((color, i) => (
                <Radio value={color.color} key={i} ml={2}>
                  {color.color}
                </Radio>
              ))}
            </RadioGroup>
          </Text>
        </Flex> */}
        <Flex direction='column' mt={5}>
          <Text fontSize='lg' fontWeight='bold'>
            Select Size
          </Text>
          <RadioGroup onChange={(e) => setSizes(e)} value={sizes}>
            {product.categoryBasedProps[0].map((size, i) => (
              <Radio key={i} ml={2} value={size}>
                {size}
              </Radio>
            ))}
          </RadioGroup>
        </Flex>

        <Flex mb={5} mt={5}>
          <Button onClick={() => setQuantity((prev) => prev - 1)}>-</Button>
          <Input
            width={50}
            type='number'
            p={1}
            textAlign='center'
            value={quantity}
            onChange={(e) => setQuantity(parseInt(e.target.value))}
          />
          <Button onClick={() => setQuantity((prev) => prev + 1)}>+</Button>
        </Flex>

        <Button onClick={buyNow} colorScheme='purple'>
          Buy Now
        </Button>
      </Flex>
    </Flex>
  );
};

export default Product;
