import { Request, Response } from 'express';
import { orderValidationSchema } from './order.validation';
import {
  createOrderIntoDB,
  getAllOrderFromDB,
  getTotalRevenueFromDB,
} from './order.service';

export const createOrder = async (req: Request, res: Response) => {
  try {
    const productData = req.body;

    const zodParsedData = orderValidationSchema.parse(productData);

    const result = await createOrderIntoDB(zodParsedData);

    res.status(200).json({
      success: true,
      message: 'Order  placed succesfully',
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || 'something went wrong',
      error: err,
    });
  }
};
export const getallorders = async (req: Request, res: Response) => {
  try {
    const result = await getAllOrderFromDB();

    res.status(200).json({
      success: true,
      message: 'order  placed succesfully',
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || 'something went wrong',
      error: err,
    });
  }
};

export const getTotalRevenue = async (req: Request, res: Response) => {
  try {
    const revenue = await getTotalRevenueFromDB();

    res.status(200).json({
      success: true,
      message: 'Total revenue successfully calculated',
      data: revenue,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || 'something went wrong',
      error: err,
    });
  }
};
