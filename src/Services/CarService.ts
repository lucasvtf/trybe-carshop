import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import ApiErrors from '../Middlewares/apiErros';
import CarODM from '../Models/CarODM';

export default class CarService {
  private model: CarODM;

  constructor() {
    this.model = new CarODM();
  }
  private carMap(car: ICar): Car {
    const carDB = new Car(car);
    return carDB;
  }

  public async create(car: ICar) {
    const newCar = await this.model.create(car);
    return this.carMap(newCar);
  }

  public async getAll() {
    const cars = await this.model.getAll();
    const carMaper = cars.map((car) => this.carMap(car));
    return carMaper;
  }

  public async getById(carId: string) {
    const car = await this.model.getById(carId);
    if (!car) throw new ApiErrors('Car not found', 404);
    return this.carMap(car);
  }

  public async update(carId:string, carUpdate: ICar): Promise<Car | null> {
    const car = await this.model.update(carId, carUpdate);
    if (!car) throw new ApiErrors('Car not found', 404);
    return this.carMap(car);
  }
}   