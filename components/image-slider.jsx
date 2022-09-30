import { Image } from '@chakra-ui/react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

// If you want to use your own Selectors look up the Advancaed Story book examples
const ImageSlider = ({ slides }) => {
  return (
    <Carousel infiniteLoop>
      {slides.map((slide, i) => {
        return (
          <Image
            key={i}
            src={slide.image}
            alt='Loop'
            height='420px'
            width='420px'
          />
        );
      })}
    </Carousel>
  );
};

export default ImageSlider;
