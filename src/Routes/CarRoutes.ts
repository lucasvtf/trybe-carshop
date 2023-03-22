import { Router } from 'express';
import CarController from '../Controllers/CarController';
import { bodyCarValidation, bodyValidation } from '../Middlewares/bodyValidation';

const carRoutes = Router();

carRoutes.post(
  '/cars',
  bodyValidation,
  bodyCarValidation,
  (req, res, next) => new CarController(req, res, next).create(),
);

export default carRoutes;