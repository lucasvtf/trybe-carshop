import { isValidObjectId, Schema } from 'mongoose';
import IMotorcycle from '../Interfaces/IMotorcycle';
import ApiErrors from '../Middlewares/apiErros';
import ODM from './AbstractODM';

export default class MotorcycleODM extends ODM<IMotorcycle> {
  constructor() {
    const schema = new Schema<IMotorcycle>({
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean, required: true },
      buyValue: { type: Number, required: true },
      category: { type: String, required: true },
      engineCapacity: { type: Number, required: true },
    });
    const modelName = 'motorcycles';
    super(schema, modelName);
  }

  public async create(motorcycle: IMotorcycle): Promise<IMotorcycle> {
    const newMotorcycle = await this.model.create({ ...motorcycle });
    return newMotorcycle;
  }

  public async getAll(): Promise<IMotorcycle[]> {
    const motorcycles = await this.model.find();
    return motorcycles;
  }

  public async getById(motorcycleId: string): Promise<IMotorcycle | null> {
    if (!isValidObjectId(motorcycleId)) throw new ApiErrors('Invalid mongo id', 422);
    const motorcycle = await this.model.findById(motorcycleId);
    return motorcycle;
  }

  public async update(motorcycleId: string, carUpdate: IMotorcycle): Promise<IMotorcycle | null> {
    if (!isValidObjectId(motorcycleId)) throw new ApiErrors('Invalid mongo id', 422);
    const motorcycle = await this.model.findByIdAndUpdate(motorcycleId, carUpdate, { new: true });
    return motorcycle;
  }
}