const express = require("express");
const cors = require('cors');
const bodyParser = require("body-parser");
const controller = require('./server/controller');

const expressApp = express();

//expressApp.use(express.json()); 
expressApp.use(bodyParser({limit: '50mb'})); //File Transfer
expressApp.use(cors());
expressApp.use(controller);

expressApp.listen(8080);