const { getDB } = require("../utils/databaseUtil");
const { ObjectId } = require("mongodb");

module.exports = class Home {
  constructor(houseName, price, location, rating, photoUrl, description, _id) {
    this.houseName = houseName;
    this.price = price;
    this.location = location;
    this.rating = rating;
    this.photoUrl = photoUrl;
    this.description = description;
    this._id = _id;
  }

  save() {
    const db = getDB();
    // if (this._id) {
    //    return db.collection("homes").updateOne({_id: new ObjectId(this._id)}), {$set: this}
    // }else{
    // return db.collection("homes").insertOne(this);
    // }

    if (this._id) {
      const updateFields = {
        houseName: this.houseName,
        price: this.price,
        location: this.location,
        photoUrl: this.photoUrl,
        rating: this.rating,
        description: this.description,
      }
      return db
        .collection("homes")
        .updateOne({ _id: new ObjectId(this._id) }, { $set: updateFields });
    } else {
      return db.collection("homes").insertOne(this);
    }
  }

  static fetchAll() {
    const db = getDB();
    return db.collection("homes").find().toArray();
  }

  static findById(homeId) {
    const db = getDB();
    return db
      .collection("homes")
      .findOne({
        _id: new ObjectId(homeId),
      })
     
  }

  static deleteById(homeId) {
    const db = getDB();
    return db.collection("homes").deleteOne({
      _id: new ObjectId(homeId),
    });
  }
};
