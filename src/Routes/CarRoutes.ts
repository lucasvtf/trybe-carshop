import { Router } from 'express';
import CarController from '../Controllers/CarController';

const carRoutes = Router();

carRoutes.post(
  '/car',
  (req, res, next) => new CarController(req, res, next).create(),
);

export default carRoutes;