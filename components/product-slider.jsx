import { Box, Flex, Image } from '@chakra-ui/react';
import { useState } from 'react';

const ProductSlider = ({ images }) => {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  console.log(images.length);
  const img = images.map((im) => im);

  console.log(img);
  return (
    <>
      <Flex align='center' direction='column' mt={5}>
        <Image src={img[currentImgIndex]} width={250} height={250} />
        <Flex
          justify='center'
          mt={2}
          backgroundColor='black'
          width='100%'
          py={2}
        >
          {images.length > 0 &&
            images.map((_, i) => (
              <Box
                rounded={50}
                width={5}
                height={5}
                backgroundColor='white'
                key={i}
                ml={2}
                cursor='pointer'
                onClick={() => setCurrentImgIndex(i)}
              ></Box>
            ))}
        </Flex>
      </Flex>
    </>
  );
};

export default ProductSlider;
