const mongoose = require('mongoose');
const fs = require('fs');

// Replace this with your actual MongoDB Atlas connection string
const MONGO_URI = 'mongodb+srv://sheikhrida3468_db_user:SgQzBp7nJehkS0q3@cluster0.ppvvkp0.mongodb.net/';

async function importData() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('Connected to MongoDB Atlas');

    // Read gifts.json
    const data = JSON.parse(fs.readFileSync('gifts.json', 'utf8'));

    // Define a simple schema/model to insert
    const Gift = mongoose.model('Gift', new mongoose.Schema({}, { strict: false }));

    // Clear existing and insert
    await Gift.deleteMany({});
    await Gift.insertMany(data);

    console.log(`Successfully imported ${data.length} documents`);
    process.exit();
  } catch (error) {
    console.error('Error importing data:', error);
    process.exit(1);
  }
}

importData();