import express from 'express';
import errorHandler from './Middlewares/ErrorHandler';
import carRoutes from './Routes/CarRoutes';

const app = express();
app.use(express.json);
app.use(carRoutes);
app.use(errorHandler);

export default app;
