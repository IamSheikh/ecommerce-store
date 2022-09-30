import dbConnect from '../../../utils/dbConnect';
import Product from '../../../models/Product';

const handler = async (req, res) => {
  try {
    await dbConnect();

    const allProducts = await Product.find({});
    res.status(200).json({
      products: allProducts,
    });
  } catch (err) {
    res.status(404).send(err);
  }
};

export default handler;
