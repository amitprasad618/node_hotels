const express = require('express');
const app = express();

const db = require('.././db.js');

const bodyParser = require('body-parser');
app.use(bodyParser.json()); //req.body

