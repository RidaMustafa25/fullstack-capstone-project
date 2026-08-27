// authRoutes.js
const express = require('express');
const router = express.Router();
const connectToDatabase = require('./db');
const bcrypt = require('bcryptjs');

// Login endpoint calling collection.findOne
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ error: 'Email and password are required' });
        }

        const db = await connectToDatabase();
        const collection = db.collection('users');

        // Required for Task 11: locate the current user using findOne
        const user = await collection.findOne({ email });

        if (!user) {
            return res.status(401).json({ error: 'Invalid email or password' });
        }

        // Compare password (or check plaintext depending on your setup)
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ error: 'Invalid email or password' });
        }

        res.json({ message: 'Login successful', username: user.name, email: user.email });
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;