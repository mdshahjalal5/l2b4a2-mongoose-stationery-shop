import mongoose from 'mongoose';
import { TStationeryProduct } from './stationery.interface';
import { StationeryProduct } from './stationery.model';

const createProductIntoDB = async (productData: TStationeryProduct) => {
  // if (await StationeryProduct.isUserExists(productData.name)) {
  //   throw new Error('User already exists!');
  // }
  const result = await StationeryProduct.create(productData);
  return result;
};

const getAllProductsFromDB = async () => {
  const result = await StationeryProduct.find();
  return result;
};

const getSingleProductFromDB = async (id: string) => {
  const result = await StationeryProduct.aggregate([
    { $match: { _id: new mongoose.Types.ObjectId(id) } },
  ]);
  return result;
};
const updateById = async (product: TStationeryProduct, id: string) => {
  const result = await StationeryProduct.updateOne(
    { _id: id },
    {
      $set: product,
    },
  );
  return result;
};

const deleteProductFromDB = async (id: string) => {
  const result = await StationeryProduct.deleteOne({ _id: id });

  if (result.deletedCount === 0) {
    console.log('No product found with the given ID');
    return null;
  }

  return result;
};

export const ProductServices = {
  createProductIntoDB,
  getAllProductsFromDB,
  getSingleProductFromDB,
  updateById,
  deleteProductFromDB,
};
