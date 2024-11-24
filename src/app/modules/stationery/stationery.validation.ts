import { z } from 'zod';

// Enum for Product Categories
export const ProductCategory = z.enum([
  'Writing',
  'Office Supplies',
  'Art Supplies',
  'Educational',
  'Technology',
]);

// Zod Schema for Stationery Product
export const stationeryProductSchemaValidation = z.object({
  name: z
    .string()
    .min(2, { message: 'Product name must be at least 2 characters long' })
    .max(100, { message: 'Product name cannot exceed 100 characters' }),

  brand: z
    .string()
    .min(2, { message: 'Brand name must be at least 2 characters long' })
    .max(50, { message: 'Brand name cannot exceed 50 characters' }),

  price: z
    .number()
    .min(0, { message: 'Price cannot be less than 0' })
    .nonnegative({ message: 'Price must be a non-negative value' }),

  category: ProductCategory, // Ensures valid category from enum

  description: z
    .string()
    .min(10, { message: 'Description must be at least 10 characters long' })
    .max(500, { message: 'Description cannot exceed 500 characters' }),
  quantity: z
    .number()
    .min(0, { message: 'Quantity cannot be less than 0' })
    .int({ message: 'Quantity must be an integer' }),

  inStock: z.boolean().default(true),
});
