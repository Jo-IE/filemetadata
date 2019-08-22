var express = require('express');

var router = express.Router();
var multer = require('multer');
var upload = multer({ dest: 'uploads/' });
const path = require("path");

/*var {body, validationResult} = require('express-validator');
var {sanitizeBody} = require('express-validator');$*/


router.get('/', function (req, res) {
     res.sendFile(path.resolve('views/index.html'));
  });
  
router.post('/', upload.single('upfile'), function(req, res){

     res.json({'filename': req.file.filename, 'size': req.file.size})

})


module.exports = router;