const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();
const mongoose = require('mongoose');

const app = express();

const memberRoutes = require('./api/routes/member');

//db connection
mongoose
    .connect(`mongodb+srv://super-admin:${process.env.PASSWORD}@cluster0.hzbov.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("DB CONNECTED");
    })
    .catch((err) => {
        console.log('ERROR: ', err);
    });


//middlewares
app.use(bodyParser.json());
app.use(cors());

//routes
app.use("/api/members", memberRoutes);


//port
const port = process.env.PORT || 5000;

//starting a server
app.listen(port, () => {
    console.log("Listening at: ", port);
});