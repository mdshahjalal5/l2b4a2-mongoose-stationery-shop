import mongoose, { Model, Schema } from 'mongoose';
import { ProductCategory, TStationeryProduct } from './stationery.interface';

//p: Mongoose schema
const StationeryProductSchema = new Schema<TStationeryProduct>({
  name: {
    type: String,
    required: [true, 'Product name is required'],
    trim: true,
    minlength: [2, 'Product name must be at least 2 characters long'],
    maxlength: [100, 'Product name cannot exceed 100 characters'],
  },
  brand: {
    type: String,
    required: [true, 'Brand is required'],
    trim: true,
    minlength: [2, 'Brand name must be at least 2 characters long'],
    maxlength: [50, 'Brand name cannot exceed 50 characters'],
  },
  price: {
    type: Number,
    required: [true, 'Price is required'],
    min: [0, 'Price cannot be less than 0'],
  },
  category: {
    type: String,
    required: [true, 'Category is required'],
    enum: {
      values: Object.values(ProductCategory), // Use enum values here
      message: '{VALUE} is not a valid category',
    }},

  //   type: String,
  //   required: [true, 'Category is required'],
  //   enum: {
  //     values: Object.values(ProductCategory),
  //     message: '{VALUE} is not a valid category',
  //   },
  // },
  description: {
    type: String,
    trim: true,
    minlength: [10, 'Description must be at least 10 characters long'],
    maxlength: [500, 'Description cannot exceed 500 characters'],
  },
  quantity: {
    type: Number,
    required: [true, 'Quantity is required'],
    min: [0, 'Quantity cannot be less than 0'],
  },
  inStock: {
    type: Boolean,
    required: [true, 'In-stock status is required'],
    default: true,
  }
}, {
    timestamps:true
  });

// p:Create a Mongoose model with the generic type TStationeryProduct
export const StationeryProduct: Model<TStationeryProduct> =
  mongoose.model<TStationeryProduct>(
    'StationeryProduct',
    StationeryProductSchema,
  );
