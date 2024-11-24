// import { TOrder } from './order.interface';
import { Order } from './order.model';

export const createOrderIntoDB = async (orderData: any) => {
  const result = await Order.create(orderData);
  return result;
};

export const getAllOrderFromDB = async () => {
  const result = await Order.find();
  return result;
};

export const getTotalRevenueFromDB = async () => {
  const revenue = await Order.aggregate([
    {
      $group: {
        _id: null,
        totalRevenue: {
          $sum: {
            $multiply: ['$price', '$quantity'],
          },
        },
      },
    },
  ]);
  return revenue;
};
