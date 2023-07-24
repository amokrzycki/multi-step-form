require("dotenv").config();
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

const usersRoute = require("./routes/users");
const registerRoute = require("./routes/register");

const app = express();
const port = 3000;

app.use(morgan("tiny"));
app.use(helmet());
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.use("/users", usersRoute);
app.use("/register", registerRoute);
app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
