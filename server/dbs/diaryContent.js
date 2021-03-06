const url = require('../helpers/get-url');
const MongoClient = require('../helpers/mongodb');

function findData(userId, callback) {
  MongoClient.connect(url, (err, db) => {
    const collection = db.collection('diarycol');
    const findCondition = userId === {} ? {} : userId;
    collection.find(findCondition, {_id: 0}).toArray((err, result) => {
      callback(result);
    });
  });
}

module.exports = findData;
