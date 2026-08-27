// giftRoutes.js
const express = require('express');
const router = express.Router();
const connectToDatabase = require('./db');
const { ObjectId } = require('mongodb');

// Get all gifts route (/api/gifts)
router.get('/', async (req, res) => {
    try {
        const db = await connectToDatabase();
        const collection = db.collection('gifts');
        const gifts = await collection.find({}).toArray();
        res.json(gifts);
    } catch (error) {
        console.error('Error fetching gifts:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Get a single gift by ID route (/api/gifts/:id)
router.get('/:id', async (req, res) => {
    try {
        const db = await connectToDatabase();
        const collection = db.collection('gifts');
        const giftId = req.params.id;
        
        // Find by string id or ObjectId depending on how it was inserted
        const gift = await collection.findOne({ id: giftId });
        
        if (!gift) {
            return res.status(404).json({ error: 'Gift not found' });
        }
        res.json(gift);
    } catch (error) {
        console.error('Error fetching gift by ID:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;