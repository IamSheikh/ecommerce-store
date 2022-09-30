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
});

export default mongoose.models.Order || mongoose.model('Order', OrderSchema);
