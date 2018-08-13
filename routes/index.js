var express = require('express');
var router = express.Router();
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('db/db.db');
var date = new Date();
var current_hour = date.getHours();

db.serialize(function () {
  db.run("CREATE TABLE if not exists user (room INTEGER PRIMARY KEY, game TEXT, time TEXT, dt TEXT)");
});
var arr= [];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Hello' });
});

router.post('/', function (req, res) {
  //var stmt = db.prepare("INSERT INTO user VALUES (?,?)");
  for(i=1;i<Object.keys(req.body).length+1;i++){
    arr.push(req.body[String(i)]); // to do 
    let dateObj = new Date();
    let month = dateObj.getUTCMonth() + 1; //months from 1-12
    let day = dateObj.getUTCDate();
    let year = dateObj.getUTCFullYear();
    newdate = day + "/" + month + "/" + year;
    console.log(arr.length);
    arr.forEach(function(element) {
    
    console.log(element);
    db.run(`INSERT OR REPLACE INTO user (room,time, game, dt) VALUES(?,?,?,?)`,[element[0],element[1],element[2],newdate]);
    });
    
    
   
    //db.run('INSERT INTO user VALUES(?, ?)', ['John', 'Doe'])

  }
  
  arr= [];
  res.render('index', { message: 'done' });});
 
  
  
//});
module.exports = router;
