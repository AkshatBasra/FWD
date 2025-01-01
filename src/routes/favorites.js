const express = require('express');
const mongoose = require("mongoose");
const FavoritesModel = require("../models/favorites");
// const {jwtDecode} = require("jwt-decode");
const router = express.Router();
const authenticateToken = require('../middleware/authenticateToken');

// Replace <username>, <password>, and <your-database> with your actual MongoDB URI details
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB Connected: Favorites'))
    .catch(err => console.error('MongoDB connection error:', err));

// Route to add a favorite
router.post('/favorites', authenticateToken, async (req, res) => {
    const {locationName, username} = req.body;

    if (!locationName) {
        return res.status(400).json({ error: 'Location name is required' });
    }

    try {
        const favorite = await FavoritesModel.create({
            username,
            locationName,
        });
        res.status(201).json(favorite);
    } catch (err) {
        console.error('Error creating favorite:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Route to fetch all favorites
// router.get('/favoriteSearch', authenticateToken, async (req, res) => {
//     try {
//         // Fetch all favorites for the logged-in user
//         const favorites = await FavoritesModel.find();
//         res.status(200).json(favorites);
//     } catch (err) {
//         console.error('Error fetching favorites:', err);
//         res.status(500).json({ error: 'Internal Server Error' });
//     }
// });

// Delete operation

router.delete('/favorites/:name', authenticateToken, async (req, res) => {
    const { name } = req.params; // Get the favorite ID from the URL parameters

    try {
        // Find and delete the favorite based on user and location
        const result = await FavoritesModel.findOneAndDelete({ username: username, locationName:name });

        if (!result) {
            return res.status(404).json({ error: 'Favorite not found or user not authorized' });
        }

        res.status(200).json({ message: 'Favorite removed successfully' });
    } catch (err) {
        console.error("Error deleting favorite:", err);
        res.status(500).json({ error: 'Failed to remove favorite' });
    }
});


module.exports = router;
