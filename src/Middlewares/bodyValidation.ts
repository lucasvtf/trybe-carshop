import { NextFunction, Request, Response } from 'express';
import ApiErrors from './apiErros';

const message = 'Fields are missing';

const bodyValidation = (req: Request, _res: Response, next: NextFunction) => {
  const { 
    model,
    year,
    color,
    buyValue,
  } = req.body;
  
  if (!model || !year || !color || !buyValue) {
    throw new ApiErrors(message, 400);
  }

  next();
};

const bodyCarValidation = (req: Request, _res: Response, next: NextFunction) => {
  const { doorsQty, seatsQty } = req.body;
  if (!doorsQty || !seatsQty) {
    throw new ApiErrors(message, 400);
  }

  next();
};

const bodyMotorcycleValidation = (req: Request, _res: Response, next: NextFunction) => {
  const { category, engineCapacity } = req.body;
  if (!category || !engineCapacity) {
    throw new ApiErrors(message, 400);
  }

  next();
};

export { bodyValidation, bodyCarValidation, bodyMotorcycleValidation };