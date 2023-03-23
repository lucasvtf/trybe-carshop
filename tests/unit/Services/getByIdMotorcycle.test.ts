import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import IMotorcycle from '../../../src/Interfaces/IMotorcycle';
import Motorcycle from '../../../src/Domains/Motorcycle';
import MotorcycleService from '../../../src/Services/MotorcylceService';

describe('Should list a car by id', function () {
  it('Should list a car by id with sucess', async function () {
  // Arrange
    const validId = '63319d80feb9f483ee823ac5';
    
    const motorcycleDB: IMotorcycle = {
      model: 'Honda CG Titan 125',
      year: 1983,
      color: 'Red',
      buyValue: 1000,
      category: 'Street',
      engineCapacity: 125,
      id: '63319d80feb9f483ee823ac5',
    };

    const motorcycleOutput: Motorcycle = new Motorcycle(motorcycleDB);
    sinon.stub(Model, 'findById').resolves(motorcycleOutput);

    // Act
    const service = new MotorcycleService();
    const result = await service.getById(validId);

    // Assert
    expect(result).to.be.deep.equal(motorcycleOutput);
  });
  
  it('Should list a car by id with a error', async function () {
    // Arrange
    const invalidMongoId = '63319d80feb9f483ee823ac5x';
      
    sinon.stub(Model, 'findById').resolves(null);
  
    // Act
    try {
      const service = new MotorcycleService();
      await service.getById(invalidMongoId);
    } catch (error) {
      // Assert
      expect((error as Error).message).to.be.equal('Invalid mongo id');
    }
  });

  afterEach(function () {
    sinon.restore();
  });
});