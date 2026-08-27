// app.js
const express = require('express');
const cors = require('cors');
const connectToDatabase = require('./db');

// Import routes
const giftRoutes = require('./giftRoutes');
const searchRoutes = require('./searchRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Initialize database connection on startup
connectToDatabase()
    .then(() => {
        console.log('Database connected successfully in app.js');
    })
    .catch((err) => {
        console.error('Failed to connect to database:', err);
    });

// Mount Routes
app.use('/api/gifts', giftRoutes);
app.use('/api/search', searchRoutes); // Required route for Task 7

// Root endpoint
app.get('/', (req, res) => {
    res.send('Welcome to the GiftLink API');
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;