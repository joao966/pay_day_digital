require('dotenv').config();
const connect = require('./connection');

const createTransfer = async (value, CPForigin, CPFdestiny, description) => {
  const db = await connect();
  const result = await db.collection('transfer')
    .insertOne({ value, CPForigin, CPFdestiny, description });
 
  return {
    value: result.ops[0].value,
    CPForigin: result.ops[0].CPForigin,
    CPFdestiny: result.ops[0].CPFdestiny,
    description: result.ops[0].description,
    tarrif: 'Tarifa gratuita',
  };
};

const createDeposit = async (value, CPForigin, CPFdestiny, description) => {
  const db = await connect();
  const result = await db.collection('deposit')
    .insertOne({ value, CPForigin, CPFdestiny, description });
 
  return result.ops[0];
};

module.exports = {
  createTransfer,
  createDeposit,
};