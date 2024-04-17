const express = require('express');
const app = express();

const db = require('.././db.js');


const bodyParser = require('body-parser');
app.use(bodyParser.json()); //req.body

const router = require('.././Routes/taskRoutes.js');

app.use('/menuItem',router);

app.get('/', (req, res) => {
    res.send("Welcome to my Hotel!!");
})




app.listen(5000, () => {
    console.log("Server is connected on 5000 PORT");
})