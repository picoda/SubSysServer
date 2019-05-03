const express = require("express");
const cors = require('cors');

const expressApp = express();

expressApp.use(cors());

expressApp.listen(8080);