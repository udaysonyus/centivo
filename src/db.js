require("dotenv").config();
const { MongoClient } = require("mongodb");

let client;
let db;

async function connectToDb() {
  if (db) return { client, db };

  const uri = process.env.MONGODB_URI;
  client = new MongoClient(uri);
  await client.connect();
  db = client.db();
  return { client, db };
}

module.exports = { connectToDb };
