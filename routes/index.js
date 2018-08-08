var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Hello' });
});

router.post('/', function (req, res) {
  //var stmt = db.prepare("INSERT INTO user VALUES (?,?)");
  console.log(req.body);
 
  //stmt.run(req.body.firstname, req.body.lastname)
  
});
module.exports = router;
