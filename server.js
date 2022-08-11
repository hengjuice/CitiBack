const bodyParser = require("body-parser");
var MongoClient = require('mongodb').MongoClient;
var URI = "mongodb+srv://arzaki:EsvhTc_mmS36PJh@cluster0.58fiheg.mongodb.net/?retryWrites=true&w=majority";

const express = require("express");
const mongoose = require("mongoose");
const clientRoutes = require('./routes/clients.js');
const bankerRoutes = require('./routes/bankers.js');

// express app
const app = express();

// middleware
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
})

// routes
app.use('/api/clients', clientRoutes);
app.use('/api/bankers', bankerRoutes);

// connect to db
mongoose.connect(URI)
  .then(() => {
    // listen for requests
    app.listen(4000, () => {
      console.log('Started on Port 4000');
    });
  })
  .catch((err) => {
    console.log(err);
  })
