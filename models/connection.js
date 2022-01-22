const { MongoClient } = require('mongodb');

const OPTIONS = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const { MONGO_DB_URL } = process.env;

let db = null;

const connection = () =>
  (db
    ? Promise.resolve(db)
    : MongoClient.connect(MONGO_DB_URL, OPTIONS).then((conn) => {
        db = conn.db('pay_day_digital');
        return db;
      }));

module.exports = connection;
