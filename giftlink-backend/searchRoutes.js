// searchRoutes.js
const express = require('express');
const router = express.Router();
const connectToDatabase = require('./db');

// Search and filter route (/api/search)
router.get('/', async (req, res) => {
    try {
        const db = await connectToDatabase();
        const collection = db.collection('gifts');

        // Extract query parameters
        const { name, category, condition, age } = req.query;
        let query = {};

        // Filter by category if provided
        if (category) {
            query.category = { $regex: new RegExp(category, 'i') }; // Case-insensitive search
        }

        // Filter by name if provided
        if (name) {
            query.name = { $regex: new RegExp(name, 'i') };
        }

        // Filter by condition if provided
        if (condition) {
            query.condition = { $regex: new RegExp(condition, 'i') };
        }

        // Filter by age if provided
        if (age) {
            query.age = Number(age);
        }

        // Fetch matching documents from database
        const gifts = await collection.find(query).toArray();
        res.json(gifts);

    } catch (error) {
        console.error('Error searching and filtering gifts:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;