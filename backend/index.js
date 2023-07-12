require("dotenv").config();
const express = require("express");
const mongodb = require("mongodb");

const app = express();
const port = 3000;

const dbName = "users";
const collectionName = "registered";

const mongoURL = `mongodb+srv://${process.env.username}:${process.env.password}@${process.env.cluster}`;

app.use(express.json());

app.post("/register", async (req, res) => {
  try {
    let client = await mongodb.MongoClient.connect(mongoURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    let db = client.db(dbName);
    let collection = db.collection(collectionName);
    let result = await collection.insertOne(req.body);
    console.log(result);
    await client.close();
    res.status(200).json({ message: "OK" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error" });
  }
});

app.get("/users", async (req, res) => {
  try {
    let client = await mongodb.MongoClient.connect(mongoURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    let db = client.db(dbName);
    let collection = db.collection(collectionName);
    let result = await collection.find({}).toArray();
    console.log(result);
    await client.close();
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error" });
  }
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
