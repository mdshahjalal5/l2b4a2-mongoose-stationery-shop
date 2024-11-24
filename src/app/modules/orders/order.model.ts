import mongoose, { Schema } from 'mongoose';
import { TOrder } from './order.interface';
import { required } from 'joi';

export const OrderSchema: Schema = new Schema(
  {
    email: {
      type: String,
      required: true,
      trim: true,
      match: [/.+@.+\..+/, 'Please provide a valid email address'],
    },
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'StationeryProduct',
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
      min: [1, 'Quantity must be at least 1'],
    },
    totalPrice: {
      type: Number,
      required: true,
      min: [0, 'Total price must be a positive number'],
    },
  },
  {
    timestamps: true,
  },
);

export const Order = mongoose.model<TOrder>('Order', OrderSchema);
