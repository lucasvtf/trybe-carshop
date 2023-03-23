import IVehicle from '../Interfaces/IVehicle';

export default abstract class Vehicle {
  protected id?: string;
  protected model: string;
  protected year: number;
  protected color: string;

  protected status?: boolean;
  protected buyValue: number;
  constructor(objVehicles: IVehicle) {
    this.id = objVehicles.id;
    this.model = objVehicles.model;
    this.year = objVehicles.year;
    this.color = objVehicles.color;
    this.status = objVehicles.status || false;
    this.buyValue = objVehicles.buyValue;
  }

  public setId(id: string) {
    this.id = id;
  }

  public getId() {
    return this.id;
  }

  public setModel(model: string) {
    this.model = model;
  }

  public getModel() {
    return this.model;
  }
}
