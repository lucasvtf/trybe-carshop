import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import ApiErrors from '../Middlewares/apiErros';
import CarODM from '../Models/CarODM';

export default class CarService {
  private createCarDomain(car: ICar | null): Car | null {
    if (car) {
      return new Car(car);
    }
    return null;
  }

  public async create(car: ICar) {
    const carODM = new CarODM();
    const newCar = await carODM.create(car);
    if (!newCar) throw new ApiErrors('Car registration failure', 422);
    return this.createCarDomain(newCar);
  }
}   