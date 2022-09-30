import mongoose from 'mongoose';

const ProductSchema = mongoose.Schema({
  productName: {
    type: String,
    required: true,
  },
  productImgs: {
    type: Array,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  categoryBasedProps: {
    type: Array,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

export default mongoose.models.Product ||
  mongoose.model('Product', ProductSchema);
