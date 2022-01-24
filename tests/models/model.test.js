const sinon = require('sinon');
const { expect } = require('chai');
const { MongoClient } = require('mongodb');
const { getConnection } = require('./conection');

const createAcount = require('../../models');

describe('Insere um novo filme no BD', function () {
  let connectionMock; 

  const payloadMovie = {
    name: 'Example Name',
    CPF: '123456',

  };
      before(async function () {
        connectionMock = await getConnection();
        sinon.stub(MongoClient, 'connect').resolves(connectionMock);
      });

      after(async function () {
        await connectionMock.db('pay_day_digital').collection('acount').drop();
        MongoClient.connect.restore();
      });

  describe('quando é inserido com sucesso', function () {
    it('retorna um objeto', async function () {
      const response = await createAcount.createAcount(payloadMovie);

      expect(response).to.be.a('object');
    });
});
});