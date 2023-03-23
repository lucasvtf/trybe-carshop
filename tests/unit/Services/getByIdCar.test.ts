import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import ICar from '../../../src/Interfaces/ICar';
import CarService from '../../../src/Services/CarService';
import Car from '../../../src/Domains/Car';

describe('Should list a car by id', function () {
  it('Should list a car by id with sucess', async function () {
  // Arrange
    const validId = '63319d80feb9f483ee823ac5';
    
    const carDB: ICar = {
      model: 'Uno da Escada',
      year: 1960,
      color: 'Red',
      buyValue: 1500,
      doorsQty: 2,
      seatsQty: 2,
      id: '63319d80feb9f483ee823ac5',
    };

    const carOutput: Car = new Car(carDB);
    sinon.stub(Model, 'findById').resolves(carOutput);

    // Act
    const service = new CarService();
    const result = await service.getById(validId);

    // Assert
    expect(result).to.be.deep.equal(carOutput);
  });

  it('Should list a car by id with a error', async function () {
    // Arrange
    const invalidMongoId = '63319d80feb9f483ee823ac5x';
      
    sinon.stub(Model, 'findById').resolves({});
  
    // Act
    try {
      const service = new CarService();
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