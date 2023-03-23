import express from 'express';
import errorHandler from './Middlewares/ErrorHandler';
import carRoutes from './Routes/CarRoutes';
import motorcycleRoutes from './Routes/MotorcycleRoutes';

const app = express();
app.use(express.json());
app.use(carRoutes);
app.use(motorcycleRoutes);
app.use(errorHandler);

export default app;
