import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import IMotorcycle from '../../../src/Interfaces/IMotorcycle';
import Motorcycle from '../../../src/Domains/Motorcycle';
import MotorcycleService from '../../../src/Services/MotorcylceService';

describe('Should list all motorcycles in the database', function () {
  it('Should list all motorcycles in the database with sucess', async function () {
  // Arrange
    const motorcycleDB: IMotorcycle = {
      model: 'Honda CG Titan 125',
      year: 1983,
      color: 'Red',
      buyValue: 1000,
      category: 'Street',
      engineCapacity: 125,
      id: '63319d80feb9f483ee823ac5',
    };

    const motorcycleOutput: Motorcycle[] = [
      new Motorcycle(motorcycleDB), 
      new Motorcycle(motorcycleDB)];

    sinon.stub(Model, 'find').resolves(motorcycleOutput);

    // Act
    const service = new MotorcycleService();
    const result = await service.getAll();

    // Assert
    expect(result).to.be.deep.equal(motorcycleOutput);
    
    sinon.restore();
  });
});