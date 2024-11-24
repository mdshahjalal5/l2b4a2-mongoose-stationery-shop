import express from 'express';
import { createOrder, getallorders, getTotalRevenue } from './order.controller';

const router = express.Router();

router.post('/', createOrder);
router.get('/', getallorders);
router.get('/revenue', getTotalRevenue);
router.get('/', (r, s) => {
  s.send('checking');
});

export const OrdersRoutes = router;
