
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






// const dns = require("node:dns");

// // Google DNS
// dns.setServers(["8.8.8.8", "8.8.4.4"]);

// const { MongoClient } = require("mongodb");

// let _db;

// const MONGO_URL =
//   "mongodb+srv://root:<YOUR_PASSWORD>@cluster0.lsmuo5g.mongodb.net/airbnb?retryWrites=true&w=majority";



//  MongoClient.connect(MONGO_URL, {
//   family: 4,
//   autoSelectFamily: false,
//   serverSelectionTimeoutMS: 10000,
// })
//   .then((client) => {
//     console.log("MongoDB connected successfully");
//     _db = client.db("airbnb");
//     callback();
//   })
//   .catch((err) => {
//     console.error("MongoDB error:", err);
//   });

// const mongoConnect = (callback) => {
//   MongoClient.connect(MONGO_URL)
//     .then((client) => {
//       console.log("MongoDB connected successfully");

//       _db = client.db("airbnb");
//       callback();
//     })
//     .catch((err) => {
//       console.log("Error while connecting:", err);
//     });
// };

// const getDB = () => {
//   if (!_db) {
//     throw new Error("Mongo not connected");
//   }

//   return _db;
// };

// exports.mongoConnect = mongoConnect;
// exports.getDB = getDB;



// const dns = require("node:dns");

// // Google DNS
// dns.setServers(["8.8.8.8", "8.8.4.4"]);

// const { MongoClient } = require("mongodb");

// let _db;

// const MONGO_URL =
//   "mongodb+srv://root:<YOUR_PASSWORD>@cluster0.lsmuo5g.mongodb.net/airbnb?retryWrites=true&w=majority";

// const mongoConnect = (callback) => {
//   MongoClient.connect(MONGO_URL, {
//     family: 4,
//     autoSelectFamily: false,
//     serverSelectionTimeoutMS: 10000,
//   })
//     .then((client) => {
//       console.log("MongoDB connected successfully");

//       _db = client.db("airbnb");
//       callback();
//     })
//     .catch((err) => {
//       console.error("MongoDB error:", err);
//     });
// };

// const getDB = () => {
//   if (!_db) {
//     throw new Error("Mongo not connected");
//   }

//   return _db;
// };

// exports.mongoConnect = mongoConnect;
// exports.getDB = getDB;
