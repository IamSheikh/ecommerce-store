import dbConnect from '../../../utils/dbConnect';
import Product from '../../../models/Product';

const handler = async (req, res) => {
  try {
    await dbConnect().then(() => console.log('Hi'));
    const findProduct = await Product.findById(req.query.id);

    console.log(req.query);
    res.json({
      prodcut: findProduct,
    });
  } catch (err) {
    res.status(404).json(err);
  }
};

export default handler;
