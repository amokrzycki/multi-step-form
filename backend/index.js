require("dotenv").config();
const express = require("express");
const mongodb = require("mongodb");
const cors = require("cors");

const app = express();
const port = 3000;

const dbName = "form";
const username = decodeURIComponent(process.env.logindb);
const password = decodeURIComponent(process.env.password);

const mongoURL = `mongodb+srv://${username}:${password}@${process.env.cluster}`;

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

// Connect to MongoDB
async function connectToMongoDB(collectionName) {
  const client = await mongodb.MongoClient.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  const db = client.db(dbName);
  const collection = db.collection(collectionName);
  return { client, collection };
}

app.post("/register", async (req, res) => {
  try {
    const { collection } = await connectToMongoDB("registered");
    const result = await collection.insertOne(req.body);
    console.log(result);
    res.status(200).json({ message: "OK" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error" });
  }
});

app.get("/users", async (req, res) => {
  try {
    const { collection } = await connectToMongoDB("registered");
    const result = await collection.find({}).toArray();
    console.log(result);
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error" });
  }
});

app.get("/steps", async (req, res) => {
  try {
    const { collection } = await connectToMongoDB("steps");
    const result = await collection.find({}).toArray();
    console.log(result);
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error" });
  }
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
