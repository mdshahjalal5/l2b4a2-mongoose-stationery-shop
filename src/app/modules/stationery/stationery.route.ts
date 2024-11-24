import express from 'express';
import {   ProductControllers } from './stationery.controller';

const router = express.Router();

router.post('/', ProductControllers.createProduct);

router.get('/:productId', ProductControllers.getsingleProduct);

router.put('/:productId', ProductControllers.updateProduct);
router.delete('/:productId', ProductControllers.deleteProduct);

router.get('/', ProductControllers.getAllProducts);

export const ProductRoutes = router;
