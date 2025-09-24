// db.js
const { MongoClient } = require('mongodb');

const uri = 'mongodb://localhost:27017'; // Or your MongoDB Atlas URI

const client = new MongoClient(uri);

async function connectToDB() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');
    const db = client.db('ecommercedb'); // Replace with your DB name
    return db;
  } catch (err) {
    console.error('MongoDB connection error:', err);
  }
}

module.exports = { connectToDB };
