import ImageSlider from './image-slider';
import { Box } from '@chakra-ui/react';
import { useMemo } from 'react';

const MainSlider = () => {
  const images = useMemo(
    () => [{ image: '/slider-1.png' }, { image: 'slider-2.png' }],
    []
  );
  return (
    <Box>
      <ImageSlider slides={images} />
    </Box>
  );
};

export default MainSlider;
