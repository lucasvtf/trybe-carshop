import { isValidObjectId, Schema } from 'mongoose';
import ICar from '../Interfaces/ICar';
import ApiErrors from '../Middlewares/apiErros';
import ODM from './ODM';

export default class CarODM extends ODM<ICar> {
  constructor() {
    const schema = new Schema<ICar>({
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean, required: true },
      buyValue: { type: Number, required: true },
      doorsQty: { type: Number, required: true },
      seatsQty: { type: Number, required: true },
    });
    const modelName = 'cars';
    super(schema, modelName);
  }

  public async create(car: ICar): Promise<ICar> {
    const newCar = await this.model.create({ ...car });
    return newCar;
  }

  public async getAll(): Promise<ICar[]> {
    const cars = await this.model.find();
    return cars;
  }

  public async getById(carId: string): Promise<ICar | null> {
    if (!isValidObjectId(carId)) throw new ApiErrors('Invalid mongo id', 422);
    const car = await this.model.findById(carId);
    return car;
  }

  public async update(carId: string, carUpdate: ICar): Promise<ICar | null> {
    if (!isValidObjectId(carId)) throw new ApiErrors('Invalid mongo id', 422);
    const car = await this.model.findByIdAndUpdate(carId, carUpdate, { new: true });
    return car;
  }
}