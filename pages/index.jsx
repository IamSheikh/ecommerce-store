import { Text, Button, Box } from '@chakra-ui/react';
import Page from '../layouts/page';
import MainSlider from '../components/main-slider';
import useAuth from '../hooks/use-auth';
import { useEffect } from 'react';
import ShopByCollection from '../components/shop-by-collection';
import Product from '../models/Product';
import dbConnect from '../utils/dbConnect';

export default function Home({ products }) {
  const { user } = useAuth();

  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <Page title='Home'>
      <Box>
        <MainSlider />
        <ShopByCollection products={JSON.parse(products)} />
      </Box>
    </Page>
  );
}

export const getServerSideProps = async () => {
  await dbConnect();

  const allProducts = await Product.find().lean();

  console.log(typeof allProducts);

  return {
    props: {
      products: JSON.stringify(allProducts),
    },
  };
};
