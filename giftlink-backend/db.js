// db.js
require('dotenv').config();
const { MongoClient } = require('mongodb');

// Use environment variable or fallback to local connection
const url = process.env.MONGO_URL || 'mongodb://localhost:27017';

let dbInstance = null;

async function connectToDatabase() {
    if (dbInstance) {
        return dbInstance;
    }

    const client = new MongoClient(url);

    try {
        // Required line for Task 4
        await client.connect();
        
        console.log("Successfully connected to MongoDB");
        
        // Connect to the specific database name (giftlink)
        dbInstance = client.db("giftlink");
        return dbInstance;
    } catch (error) {
        console.error("Database connection failed:", error);
        process.exit(1);
    }
}

module.exports = connectToDatabase;