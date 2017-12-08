var path = require('path');
var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;

var mongoHost = process.env.MONGO_HOST;
var mongoPort = process.env.MONGO_PORT || 27017;
var mongoUser = process.env.MONGO_USER;
var mongoPassword = process.env.MONGO_PASSWORD;
var mongoDBName = process.env.MONGO_DB;

var mongoURL ='mongodb://' + mongoUser + ':' + mongoPassword + '@' + mongoHost + ':' + mongoPort + '/' + mongoDBName;
console.log(mongoURL);
var mongoDBDatabase;

app.engine('handlebars', exphbs({defaultLayout:'main'}));
app.set('view engine', 'handlebars');

app.use(express.static('public'));

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.get('/main',function(req,res){
  
   res.status(200).render('mainPage',{layout:'main1'});
 
});
app.post('/results',function(req,res,next){
  var driverName =req.body.driver.name;
  var driverPrice =req.body.driver.price;
  var driverImg =req.body.driver.img;
  var driverLicense =req.body.driver.license;
  var driverMax =req.body.driver.max;
  var drivers= mongoDBDatabase.collection('drivers');
  var insertObj={name:driverName,price:driverPrice,image:driverImg,licenseNo:driverLicense,maxSeats:driverMax,availability:1};
  drivers.insertOne(insertObj,function(err,result){
    if (err) throw err;
    console.log("1 post inserted");
  })
  next();
});
app.get('/results',function(req,res){
  var drivers= mongoDBDatabase.collection('drivers');
  var driverCursor= drivers.find({});
  driverCursor.toArray(function (err,posts) {
  if (err) {
    res.status(500).send("Error fetching people from DB.");
  } else {
   res.status(200).render('filterpage',{'posts':posts});
  }
});
  
  
});

app.get('*', function (req, res) {
  
  res.status(404).render('404');

});

MongoClient.connect(mongoURL, function (err, db) {
  if (err) {
    throw err;
  }
  console.log('mongodb is running!');
  mongoDBDatabase = db;
 app.listen(port, function () {
  console.log("== Server is listening on port", port);
});
});