const mongodb = require('mongodb');
const MongoClient =mongodb.MongoClient;

let _db;

const mongoConnect = callback => {                    
    MongoClient.connect('mongodb+srv://atilla:<password>@cluster0-7oxvq.gcp.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true } )
    .then(client => {
        console.log('ABNET DB: Connected');
        _db = client.db();
        callback();
    }).catch(err => {
        console.log("ABNET DB Error", err);
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
