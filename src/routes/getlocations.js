const express = require('express');
const mongoose = require("mongoose");
const router = express.Router();

// Replace <username>, <password>, and <your-database> with your actual MongoDB URI details
mongoose.connect('mongodb+srv://Akshat:1BM23CS020@cluster0.bmfpm.mongodb.net/test',)
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));
const Schema = mongoose.Schema;
const ItemSchema = new Schema({
    name: String,
    info: String,
    maps: String,
    imageUrl: String,
    category: String
});

const Locations = mongoose.model('Locations', ItemSchema);

router.get('/items', async (req, res) => {
    const items = await Locations.find();
    res.json(items);
});



module.exports = router;