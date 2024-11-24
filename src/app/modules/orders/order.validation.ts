import { z } from 'zod';

export const orderValidationSchema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
  product: z
    .string()
    .regex(/^[a-f\d]{24}$/i, { message: 'Invalid product ObjectId' }),
  quantity: z
    .number()
    .int()
    .positive({ message: 'Quantity must be a positive integer' }),
  price: z.number(),
  totalPrice: z
    .number()
    .positive({ message: 'Total price must be a positive number' }),
});
