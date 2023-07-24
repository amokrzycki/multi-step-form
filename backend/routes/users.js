const express = require("express");
const router = express.Router();

const { connectToMongoDB } = require("../utils/dbConnector");

router.get("/", async (req, res) => {
  try {
    const { collection } = await connectToMongoDB("registered-users");
    const result = await collection.find({}).toArray();
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error" });
  }
});

module.exports = router;
