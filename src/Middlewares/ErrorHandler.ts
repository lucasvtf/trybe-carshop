import { NextFunction, Request, Response } from 'express';
import ApiErrors from './apiErros';

const errorHandler = (
  error: Error & Partial<ApiErrors>,
  _req: Request,
  res: Response,
  _next: NextFunction,
) => {
  const statusCode = error.statusCode ?? 500;
  const message = error.statusCode ? error.message : 'Internal server Error';
  return res.status(statusCode).json({ message });
};

export default errorHandler;