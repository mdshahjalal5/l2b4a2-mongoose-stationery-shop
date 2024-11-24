import { Types } from 'mongoose'; // Importing Types for ObjectId

// Type definition for an order
export type TOrder = {
  email: string;
  product: Types.ObjectId; // mongoose ObjectId
  quantity: number; // The quantity of the ordered product
  price:number;
  totalPrice: number;
};
