// Connect to MongoDB
const {MongoClient,ObjectId} = require('mongodb');
const url = 'mongodb://0.0.0.0:27017';
// const dbName = 'eventdb';
const client = new MongoClient(url);
async function dbConnect() {
    const dbName = 'eventdb'; // Replace with your database name
    const collectionName = 'events'; // Replace with your collection name

    try {
      const db = client.db(dbName);
      const collection = db.collection(collectionName);
      return collection;
    } catch (error) {
      console.error('Error connecting to the database:', error);
      throw error;
    }
  }
module.exports= dbConnect;