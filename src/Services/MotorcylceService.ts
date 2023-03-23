import Motorcycle from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import ApiErrors from '../Middlewares/apiErros';
import MotorcycleODM from '../Models/MotorcycleODM';

export default class MotorcycleService {
  private model: MotorcycleODM;

  constructor() {
    this.model = new MotorcycleODM();
  }
  private motorcycleMap(motorcycle: IMotorcycle): Motorcycle {
    const motorcycleDB = new Motorcycle(motorcycle);
    return motorcycleDB;
  }

  public async create(motorcycle: IMotorcycle) {
    const newMotorcycle = await this.model.create(motorcycle);
    return this.motorcycleMap(newMotorcycle);
  }

  public async getAll() {
    const motorcycles = await this.model.getAll();
    const motorcycleMaper = motorcycles.map((motorcycle) => this.motorcycleMap(motorcycle));
    return motorcycleMaper;
  }

  public async getById(motorcycleId: string) {
    const motorcycle = await this.model.getById(motorcycleId);
    if (!motorcycle) throw new ApiErrors('Motorcycle not found', 404);
    return this.motorcycleMap(motorcycle);
  }

  public async update(motorcycleId:string, motorcycleUptade: IMotorcycle) {
    const motorcycle = await this.model.update(motorcycleId, motorcycleUptade);
    if (!motorcycle) throw new ApiErrors('Motorcycle not found', 404);
    return this.motorcycleMap(motorcycle);
  }
}   