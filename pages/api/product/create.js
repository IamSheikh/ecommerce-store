import dbConnect from '../../../utils/dbConnect';
import Product from '../../../models/Product';

const handler = async (req, res) => {
  try {
    await dbConnect().then(() => console.log('Connected'));

    const {
      productName,
      productImgs,
      category,
      categoryBasedProps,
      description,
      price,
    } = req.body;

    const newProduct = new Product({
      productName,
      productImgs,
      category,
      categoryBasedProps,
      description,
      price,
    });

    await newProduct.save().then(() => console.log('Hi'));

    res.status(200).json({
      product: newProduct,
    });
  } catch (err) {
    res.json(err);
  }
};

export default handler;
