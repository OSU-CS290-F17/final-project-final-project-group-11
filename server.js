
var path = require('path');
var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var exphbs = require('express-handlebars');
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

/* app.get('/posts/:n',function(req,res){
	var postReq= req.params.n;
	
    console.log(typeof(postNumber),postNumber);
	
	if( postReq=='0'  || postReq=='1'  || postReq=='2'  || postReq=='3'  || postReq=='4'	|| postReq=='5'  || postReq=='6' || postReq=='7')
	{
		var postNumber = parseInt(postReq);
		var specificPost= postData[postNumber];
		console.log(specificPost);
		res.status(200).render('postPage',specificPost);
	}
	else{
		res.status(404).render('404');
	}
}); */

app.get('/a',function(req,res){
	var drivers= mongoDBDatabase.collection('drivers');
	var driverCursor= drivers.find({});
	driverCursor.toArray(function (err,posts) {
  if (err) {
    res.status(500).send("Error fetching people from DB.");
  } else {
	  console.log(posts);
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

