const express = require('express');
const port = 4000
const app = express();
const dotenv = require('dotenv');
dotenv.config()

const cors = require('cors');
const { default: db } = require('mongoose')

app.use(cors({ origin: true }));
app.use(express.json());

const router = require("./router/router")

app.use("/", router)


db.connect(process.env.DB_CONNECT);
db.connection
    .once("open", () => console.log("connected to data base"))
    .on("error", (err) => console.log("error: ", err))

app.listen(port, () => console.log(`the server is listening on ${port}`));