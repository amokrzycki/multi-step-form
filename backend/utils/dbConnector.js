const mongodb = require("mongodb");
const dbName = "form";
const username = decodeURIComponent(process.env.LOGINDB);
const password = decodeURIComponent(process.env.PASSWORD);

const mongoURL = `mongodb+srv://${username}:${password}@${process.env.CLUSTER}`;

async function connectToMongoDB(collectionName) {
  const client = await mongodb.MongoClient.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  const db = client.db(dbName);
  const collection = db.collection(collectionName);
  return { client, collection };
}

module.exports = { connectToMongoDB };
