require('dotenv').config();
const connect = require('./connection');

const getAcountByCPF = async (CPF) => {
  const db = await connect();
  const result = await db.collection('acount').findOne({ CPF });
  return result;
};

const createAcount = async (name, CPF) => {
  const db = await connect();
  const result = await db.collection('acount')
    .insertOne({ name, CPF, role: 'customer', balance: 0 });
  return { role: result.ops[0].role, id: result.insertedId, balance: result.ops[0].balance };
};

const updateBalanceSum = async (CPF, balance) => {
  const db = await connect();
  const result = await db.collection('acount').updateOne(
    { CPF },
   { $inc: { balance } },
  );
  return result;
};

const updateBalanceSub = async (CPF, balance) => {
  const db = await connect();
  const result = await db.collection('acount').updateOne(
    { CPF },
   { $inc: { balance: -balance } },
  );
  return result;
};

const getAllAcounts = async () => {
  const db = await connect();
  const result = await db.collection('acount').find().toArray();
 
  return result;
};

module.exports = {
  getAcountByCPF,
  createAcount,
  updateBalanceSum,
  updateBalanceSub,
  getAllAcounts,
};