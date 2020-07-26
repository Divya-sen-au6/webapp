const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();
require("./db");
const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "https://quirky-davinci-0e4268.netlify.app/timeline",
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.use(express.json());
app.use(require("./routes/userRoutes"));
app.use(require("./routes/imageRoutes"));

const port = process.env.PORT || 1234;
app.listen(port, function () {
  console.log("Server started on", port);
});
