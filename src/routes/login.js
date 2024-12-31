const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt'); // Ensure bcrypt is used for password hashing
const UsersModel = require('../models/Users');
const mongoose = require('mongoose');
require('dotenv').config(); // Load environment variables

const router = express.Router();

// Secret key for JWT
const JWT_SECRET = process.env.JWT_SECRET;

if (!JWT_SECRET) {
    throw new Error('JWT_SECRET is not defined in environment variables.');
}

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)//{ useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB Connected: Login'))
    .catch(err => {
        console.error('MongoDB connection error:', err);
        process.exit(1); // Exit if unable to connect to MongoDB
    });

// Login Route
router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    // Validate input
    if (!username || !password) {
        return res.status(400).json({ error: 'Username and password are required' });
    }

    try {
        // Find user by username
        const user = await UsersModel.findOne({ username });

        // If user not found
        if (!user) {
            return res.status(401).json({ error: 'Invalid username or password' });
        }

        // Verify password using bcrypt
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ error: 'Invalid username or password' });
        }

        // Generate JWT token
        const token = jwt.sign(
            { userId: user._id, username: user.username },
            JWT_SECRET,
            { expiresIn: '1h' }
        );

        // Send response with token
        res.status(200).json({ message: 'Login successful', token });
        // localStorage.setItem('token', token);
    } catch (err) {
        console.error('Login error:', err.message || err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;
