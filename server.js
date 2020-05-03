const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGO_DB_CONNECTION_STRING,
    { useUnifiedTopology: true, useNewUrlParser: true },
    () => {
        console.log('successfully connected to mongo db');
    });
app.use(express.json());
app.use(require('./routes/router-index'));
app.listen(5000, () => {
    console.log('server is now listening at port 5000');
})
