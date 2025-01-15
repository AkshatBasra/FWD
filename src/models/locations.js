const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// User schema definition
const ItemSchema = new Schema({
    name: String,
    info: String,
    rating: Number,
    links: {
        maps: String,
        hotels: String
    },
    imageUrl: String,
    category: String
});

const LocationsModel = mongoose.model('locations', ItemSchema);

module.exports = LocationsModel;
