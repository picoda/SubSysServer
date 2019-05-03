const express = require("express");
const router = express.Router()


router.use('/upload', require('./upload'))

router.get('/', function(req, res) {
  res.send("Backend");
})

module.exports = router
