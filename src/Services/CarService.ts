import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
// import ApiErrors from '../Middlewares/apiErros';
import CarODM from '../Models/CarODM';

export default class CarService {
  public async create(car: ICar): Promise<Car> {
    const carODM = new CarODM();
    const newCar = await carODM.create(car);
    return new Car(newCar);
  }
}   