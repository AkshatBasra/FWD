const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// User schema definition
const FavoritesSchema = new Schema({
    username: String,
    locationName: String,
});

let FavoritesModel;
if (mongoose.models.Favorites) {
    FavoritesModel = mongoose.models.Favorites; // Use the already compiled model if it exists
} else {
    FavoritesModel = mongoose.model('Favorites', FavoritesSchema); // Otherwise, compile a new model
}

module.exports = FavoritesModel;
