const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// User schema definition
const FavoritesSchema = new Schema({
    username: String,
    locationName: String,
});

// Pre-save hook to hash password
FavoritesSchema.pre('save', async function (next) {

});


const FavoritesModel = mongoose.model('Favorites', FavoritesSchema);

module.exports = FavoritesModel;
