const express = require('express');
const mongoose = require("mongoose");
const router = express.Router();
const UsersModel = require('../models/Users');

// MongoDB Connection
mongoose.connect('mongodb+srv://Akshat:1BM23CS020@cluster0.bmfpm.mongodb.net/test', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB Connected: Register'))
    .catch(err => console.log('MongoDB connection error:', err));

// Register route
router.post(`/register`, async (req, res) => {
    try {
        // Create a new user with the data from the request body
        const newUser = await UsersModel.create(req.body);

        // Respond with the newly created user
        res.status(201).json(newUser);
    } catch (err) {
        console.error('Registration error:', err);
        res.status(500).json({ error: 'Failed to register user' });
    }
});

module.exports = router;
