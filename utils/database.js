const mongodb = require('mongodb');
const MongoClient =mongodb.MongoClient;

const uri = 'mongodb+srv://atilla:mardin_001@cluster0-7oxvq.mongodb.net/test?retryWrites=true&w=majority';

let _db;

const mongoConnect = callback => {
    MongoClient.connect('mongodb+srv://atilla:mardin_001@cluster0-7oxvq.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true } )
    .then(client => {
        console.log('DB: Connected');
        _db = client.db();
        callback();
    }).catch(err => {
        console.log("DB Error", err);
        throw err;
    });
};

const getDb = () => {
    if (_db) {
        return _db;
    }
    throw 'No DB found';
};

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
