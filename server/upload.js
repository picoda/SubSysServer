var express = require('express'), router = express.Router();
const save = require('save-file')

router.post("/submit", function(req, res){
    const reqBody = (req.body);
    save(reqBody.content.data, reqBody.fileName);
    res.end();
});


module.exports = router

