const express = require('express');
const morgan = require('morgan');
const app = express();
const mongoose = require('mongoose');
const dbURI = 'mongodb+srv://arka:<test123>@cluster.duwts.mongodb.net/roomiezdb?retryWrites=true&w=majority';
mongoose.connect(dbURI,{ useNewUrlParser: true, useUnifiedTopology: true });
    .then((result) => app.listen(4200))
    .catch((err) => console.log('err'))




app.get("/", (req, res)=>{
    res.send("something");
});

app.get("/task", (req, res)=>{
    let users = ["test1", "Test2", "Test3"];
    res.send("users");
});    

app.listen(4200);