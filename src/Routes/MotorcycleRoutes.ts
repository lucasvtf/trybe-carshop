import { Router } from 'express';
import MotorcycleController from '../Controllers/MotorcycleController';
import { bodyMotorcycleValidation, bodyValidation } from '../Middlewares/bodyValidation';

const motorcycleRoutes = Router();

motorcycleRoutes.post(
  '/motorcycles',
  bodyValidation,
  bodyMotorcycleValidation,
  (req, res, next) => new MotorcycleController(req, res, next).create(),
);

motorcycleRoutes.get(
  '/motorcycles',
  (req, res, next) => new MotorcycleController(req, res, next).getAll(),
);

motorcycleRoutes.get(
  '/motorcycles/:id',
  (req, res, next) => new MotorcycleController(req, res, next).getById(),
);

motorcycleRoutes.put(
  '/motorcycles/:id',
  (req, res, next) => new MotorcycleController(req, res, next).update(),
);

export default motorcycleRoutes;