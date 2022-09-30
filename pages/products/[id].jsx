import Page from '../../layouts/page';
import Product from '../../components/product';
import dbConnect from '../../utils/dbConnect';
import ProductModel from '../../models/Product';
import collection from '../../products';

const ProductById = ({ product }) => {
  let pr = JSON.parse(product);
  console.log(pr);
  return (
    <Page title={pr.productName}>
      <Product product={pr} />
    </Page>
  );
};

export const getStaticProps = async (context) => {
  await dbConnect();
  const product = await ProductModel.findOne({ id: context.params.id });

  return {
    props: {
      product: JSON.stringify(product),
    },
    revalidate: 10,
  };
};

export const getStaticPaths = async () => {
  await dbConnect();

  const result = await ProductModel.find({});

  const posts = result.map((doc) => {
    const post = doc.toObject();
    post._id = post._id.toString();
    return { params: { id: post._id } };
  });

  return {
    paths: posts,
    fallback: 'blocking',
  };
};

export default ProductById;
