const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// User schema definition
const ItemSchema = new Schema({
    name: String,
    info: String,
    maps: String,
    imageUrl: String,
    category: String
});

// Pre-save hook to hash password


const LocationsModel = mongoose.model('locations', ItemSchema);

module.exports = LocationsModel;
