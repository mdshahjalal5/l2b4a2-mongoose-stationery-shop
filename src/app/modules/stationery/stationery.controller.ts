import { Request, Response } from 'express';
import { ProductServices } from './stationery.service';
import { stationeryProductSchemaValidation } from './stationery.validation';

const createProduct = async (req: Request, res: Response) => {
  try {
    const product = req.body;
    const zodParsedData = stationeryProductSchemaValidation.parse(product);
    const result = await ProductServices.createProductIntoDB(zodParsedData);

    res.status(200).json({
      success: true,
      message: 'Product is created succesfully',
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

const getAllProducts = async (req: Request, res: Response) => {
  try {
    const result = await ProductServices.getAllProductsFromDB();

    res.status(200).json({
      success: true,
      message: 'Product are retrieved succesfully',
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

const getsingleProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;

    const result = await ProductServices.getSingleProductFromDB(productId);

    res.status(200).json({
      success: true,
      message: 'Product is retrieved succesfully',
      data2: productId,

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

const updateProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;

    const updatedProductData = req.body;
    const result = await ProductServices.updateById(
      updatedProductData,
      productId,
    );

    res.status(200).json({
      success: true,
      message: 'Product is updated succesfully',
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
const deleteProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;

    const result = await ProductServices.deleteProductFromDB(productId);
    if (!result) {
      res.status(500).json({
        success: false,
        message: 'There is no such product',
        data: result,
      });
      return;
    }
    res.status(200).json({
      success: true,
      message: 'Product is deleted succesfully',
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
export const ProductControllers = {
  createProduct,
  getAllProducts,
  getsingleProduct,
  updateProduct,
  deleteProduct,
};
