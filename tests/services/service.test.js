const { expect } = require('chai');

const createService = require('../../services/acount');

describe('Insere um novo filme no BD', function () {
  describe('quando é inserido com sucesso', function () {
    const payloadMovie = {
      name: 'Example Name',
      CPF: '123456',
    };

    it('retorna um objeto', async function () {
      const response = await createService.validadeCreate(payloadMovie);

      expect(response).to.be.a('object');
    });
  });
});