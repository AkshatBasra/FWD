const express = require('express');
const jwt = require('jsonwebtoken');
const UsersModel = require('../models/Users');
const router = express.Router();
const mongoose  = require('mongoose');

// Secret key for JWT
const JWT_SECRET = process.env.JWT_SECRET; // In a real app, store this in environment variables

if (!JWT_SECRET) {
    throw new Error('JWT_SECRET is not defined in environment variables.');
}

// MongoDB Connection
mongoose.connect('mongodb+srv://Akshat:1BM23CS020@cluster0.bmfpm.mongodb.net/test', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB Connected: Login'))
    .catch(err => console.log('MongoDB connection error:', err));

router.post(`/login`, async (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        return res.status(400).json({ error: 'Username and password are required' });
    }

    try {
        // Find the user by username
        const user = await UsersModel.findOne({ username });

        // If user is not found
        if (!user) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        // Compare the password with the hashed password stored in the database
        const isMatch = await user.comparePassword(password);

        // If the password doesn't match
        if (!isMatch) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        // If authentication is successful, create a JWT token
        const token = jwt.sign({ userId: user._id, username: user.username }, JWT_SECRET, { expiresIn: '1h' });

        // Send the token back to the client
        res.status(200).json({ message: 'Login successful', token });

    } catch (err) {
        console.error('Login error:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;
