const express = require("express");
const mongoose = require("mongoose");
require("dotenv/config");
const bodyParser = require("body-parser");

const app = express();

//run body parser for all req, converts body elm to json format
app.use(bodyParser.json());

//ROUTES get: request data from specified resource ( shoots us back a message ) - server responds
app.get("/", (req, res) => {
	res.send("home");
});

//IMPORT ROUTES

const postRoute = require("./routes/post");
//use middleware to keep track of invocation on route
app.use("/post", postRoute);

//Connect to db
mongoose.connect(
	process.env.DB_CONNECTION,
	{ useUnifiedTopology: true, useNewUrlParser: true },
	() => {
		console.log("connected to db");
	}
);

//how to boot up server
app.listen(3000);
