import dbConnect from '../../../utils/dbConnect';
import OrderModel from '../../../models/Order';

const handler = async (req, res) => {
  await dbConnect();

  const newOrder = new OrderModel({
    name: req.body.name,
    deliveryAddress: req.body.deliveryAddress,
    city: req.body.city,
    mobileNumber: req.body.mobileNumber,
    productName: req.body.productName,
    productImg: req.body.productImg,
    productQuantity: req.body.productQuantity,
    productNameToPrint: req.body.productNameToPrint,
    size: req.body.size,
    price: req.body.price,
    isDelivered: false,
  });

  await newOrder.save();

  res.status(200).json({
    order: newOrder,
  });
};

export default handler;
