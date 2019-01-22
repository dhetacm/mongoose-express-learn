const PORT = 3003;

// Initialize Express
const express = require("express");
const app = express();

//Initialize Mongoose
const mongoose = require("mongoose");
const MONGODB_URI = `mongodb://localhost:27017/company`;
mongoose.connect(
  MONGODB_URI,
  {
    useNewUrlParser: true
  }
);

const Schema = mongoose.Schema
const Customers = mongoose.model("customers", new Schema({
    first_name: String,
    last_name: String,
    age: Number,
    adress: ()
}))

app.listen(PORT, () => {
  console.log(`App running on PORT ${PORT}`);
});
