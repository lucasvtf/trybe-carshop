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

carRoutes.get(
  '/cars',
  (req, res, next) => new CarController(req, res, next).getAll(),
);

carRoutes.get(
  '/cars/:id',
  (req, res, next) => new CarController(req, res, next).getById(),
);

carRoutes.put(
  '/cars/:id',
  (req, res, next) => new CarController(req, res, next).update(),
);

export default carRoutes;