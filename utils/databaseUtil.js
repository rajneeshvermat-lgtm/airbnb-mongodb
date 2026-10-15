
const dns = require("node:dns");

// Google DNS use karo
dns.setServers(["8.8.8.8", "8.8.4.4"]);

const mongo = require("mongodb");
const MongoClient = mongo.MongoClient;

let _db;

const MONGO_URL =
  "mongodb+srv://root:Rajn9016@cluster0.lsmuo5g.mongodb.net/airbnb?retryWrites=true&w=majority";

const mongoConnect = (callback) => {
  MongoClient.connect(MONGO_URL)
    .then((client) => {
      callback();
     _db = client.db("airbnb");
    })
    .catch((err) => {
      console.log("Error while connecting", err);
    });
};

const getDB = () => {
  if (!_db) {
    throw new Error('Mongo not connected')
    
  }
  return _db
}

exports.mongoConnect = mongoConnect;
exports.getDB = getDB;


