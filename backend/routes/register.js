const express = require("express");
const router = express.Router();

const { connectToMongoDB } = require("../utils/dbConnector");

router.post("/", async (req, res) => {
  try {
    const { collection } = await connectToMongoDB("registered-users");
    await collection.insertOne(req.body);
    res.status(200).json({ message: "OK" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error" });
  }
});

module.exports = router;
