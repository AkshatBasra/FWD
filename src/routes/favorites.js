const express = require('express');
const mongoose = require("mongoose");
// const jwt = require("jsonwebtoken");
const FavoritesModel = require("../models/favorites");
const {jwtDecode} = require("jwt-decode");
const router = express.Router();
const authenticateToken = require('../middleware/authenticateToken');

// Replace <username>, <password>, and <your-database> with your actual MongoDB URI details
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB Connected: Favorites'))
    .catch(err => console.error('MongoDB connection error:', err));

// Middleware to authenticate and decode JWT
const authenticate = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1]; // Extract token from Authorization header
    if (!token) {
        return res.status(401).json({ error: 'Unauthorized: No token provided' });
    }

    try {
        req.user = jwtDecode(token, process.env.JWT_SECRET);
         // Attach the decoded user info to the request
        next();
    } catch (err) {
        console.error('Failed to authenticate token:', err);
        return res.status(401).json({ error: 'Unauthorized: Invalid token' });
    }
};

// Route to add a favorite
router.post('/favorites', authenticateToken, async (req, res) => {
    const {locationName} = req.body;
    console.log(locationName);

    if (!locationName) {
        return res.status(400).json({ error: 'Location name is required' });
    }

    try {
        const favorite = await FavoritesModel.create({
            username: req.username,
            locationName,
        });
        res.status(201).json(favorite);
    } catch (err) {
        console.error('Error creating favorite:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Route to fetch all favorites
router.get('/favoriteSearch', authenticateToken, async (req, res) => {
    try {
        // Fetch all favorites for the logged-in user
        const favorites = await FavoritesModel.find();
        res.status(200).json(favorites);
    } catch (err) {
        console.error('Error fetching favorites:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;
