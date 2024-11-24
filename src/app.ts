import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import { ProductRoutes as ProductRoutes } from './app/modules/stationery/stationery.route';
import { OrdersRoutes } from './app/modules/orders/order.routes';

const app: Application = express();

//parsers
app.use(express.json());
app.use(cors());
// application routes
app.use('/api/products', ProductRoutes);
app.use('/api/orders', OrdersRoutes);

const getAController = (req: Request, res: Response) => {
  res.send('get started');
};

app.get('/', getAController);

export default app;
