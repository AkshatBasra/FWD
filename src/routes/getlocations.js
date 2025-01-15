const express = require('express');
const mongoose = require("mongoose");
const router = express.Router();
const LocationsModel = require("../models/locations.js");

mongoose.connect(process.env.MONGO_URI,)
    .then(() => console.log('MongoDB Connected: Locations'))
    .catch(err => console.log(err));
// const Schema = mongoose.Schema;
// const ItemSchema = new Schema({
//     name: String,
//     info: String,
//     maps: String,
//     imageUrl: String,
//     category: String
// });
//
// const LocationsModel = mongoose.model('Locations', ItemSchema);

router.get('/items', async (req, res) => {
    const items = await LocationsModel.find({});
    res.json(items);
});

module.exports = router;