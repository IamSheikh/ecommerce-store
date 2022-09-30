import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Select,
  Text,
  Textarea,
} from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import Filebase from 'react-file-base64';
import ProductSlider from '../components/product-slider';
import { ChevronDownIcon } from '@chakra-ui/icons';
import axios from 'axios';

const rooms = [{}, {}, {}, {}, {}, {}, {}, {}];

const Secert = () => {
  const [productName, setProductName] = useState('');
  const [productImgs, setProductImgs] = useState([]);
  const [productCategory, setProductCategory] = useState('Select Category');
  const [productPrice, setProductPrice] = useState(0);
  const [productDescription, setProductDescription] = useState('');
  const [sizesLength, setSizesLength] = useState(0);
  const [sizesInputToGenerate, setSizesInputToGenerate] = useState([]);
  const [size, setSize] = useState([]);
  const [sizes, setSizes] = useState(size);

  useEffect(() => {
    for (let i = 0; i < sizesLength; i++) {
      setSizesInputToGenerate((prev) => [...prev, i]);
    }
  }, [sizesLength]);

  useEffect(() => {
    console.log(size);
  }, [size]);

  const createProduct = async (e) => {
    e.preventDefault();
    console.log('hi');
    let productDetails = {
      productName,
      productImgs,
      category: productCategory,
      categoryBasedProps: [size],
      price: productPrice,
      description: productDescription,
    };
    axios
      .post('/api/product/create', productDetails)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleroom = (e, id) => {
    const { value } = e.target;
    setSize((room) => [...room, value]);
  };

  return (
    <Flex justify='center' alignItems='center' h='110vh' direction='column'>
      <Flex
        onSubmit={createProduct}
        as='form'
        direction='column'
        align='center'
      >
        <Box>
          <Text fontSize='xl' fontWeight='bold'>
            Product Name
          </Text>
          <Input
            type='text'
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            borderWidth={3}
            borderColor='black'
          />
        </Box>
        <Box>
          <Text fontSize='xl' fontWeight='bold'>
            Price
          </Text>
          <Input
            type='text'
            value={productPrice}
            onChange={(e) => setProductPrice(e.target.value)}
            borderWidth={3}
            borderColor='black'
          />
        </Box>
        <Box>
          <Text fontSize='xl' fontWeight='bold'>
            Description
          </Text>
          <Textarea
            type='text'
            value={productDescription}
            onChange={(e) => setProductDescription(e.target.value)}
            borderWidth={3}
            borderColor='black'
            resize='none'
          />
        </Box>
        <Box ml={10}>
          <Text fontSize='xl' fontWeight='bold'>
            Product Image
          </Text>
          <Filebase
            multiple={true}
            onDone={(e) =>
              setProductImgs((prev) => [...prev, e[0].base64.toString()])
            }
          />
        </Box>
        <Box mb={2}>
          <ProductSlider images={productImgs} />
        </Box>
        <Box mb={2}>
          <Select
            placeholder='Select Category'
            value={productCategory}
            onChange={(e) => setProductCategory(e.target.value)}
          >
            <option value='T-Shirt'>T-Shirt</option>
            <option value='Mug'>Mug</option>
          </Select>
        </Box>
        {productCategory === 'T-Shirt' && (
          <Box mb={2}>
            <Text>How much sizes do you want?</Text>
            <Input
              type='number'
              value={sizesLength}
              onChange={(e) => setSizesLength(parseInt(e.target.value))}
              width={200}
            />
            {sizesInputToGenerate.map((_, i) => (
              <Box key={i} mt={2}>
                <Input
                  type='text'
                  placeholder={`Size ${i + 1}`}
                  width={200}
                  ml={2}
                  value={_.room}
                  onBlur={(e) => handleroom(e, i)}
                />
              </Box>
            ))}
          </Box>
        )}
        <Box>
          <Button colorScheme='purple' type='sumbit'>
            Create Product
          </Button>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Secert;
