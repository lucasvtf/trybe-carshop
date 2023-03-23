import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import ICar from '../../../src/Interfaces/ICar';
import CarService from '../../../src/Services/CarService';
import Car from '../../../src/Domains/Car';

describe('Should list all cars in the database', function () {
  it('Should list all cars in the database with sucess', async function () {
  // Arrange
    const carDB: ICar = {
      model: 'Uno da Escada',
      year: 1960,
      color: 'Red',
      buyValue: 1500,
      doorsQty: 2,
      seatsQty: 2,
      id: '63319d80feb9f483ee823ac5',
    };

    const carOutput: Car[] = [new Car(carDB), new Car(carDB)];
    sinon.stub(Model, 'find').resolves(carOutput);

    // Act
    const service = new CarService();
    const result = await service.getAll();

    // Assert
    expect(result).to.be.deep.equal(carOutput);
    
    sinon.restore();
  });
});