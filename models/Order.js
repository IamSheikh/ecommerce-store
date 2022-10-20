const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  mobileNumber: {
    type: Number,
    required: true,
  },
  deliveryAddress: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  productImg: {
    type: String,
    required: true,
  },
  productNameToPrint: {
    type: String,
    required: true,
  },
  productName: {
    type: String,
    required: true,
  },
  productQuantity: {
    type: String,
    required: true
  },
  size: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  }
});

export default mongoose.models.Order || mongoose.model('Order', OrderSchema);
