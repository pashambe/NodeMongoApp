const express        = require('express');
const MongoClient    = require('mongodb').MongoClient;
const bodyParser     = require('body-parser');
const db             = require('./config/db');

const app            = express();

const port = 8000;

app.use(bodyParser.urlencoded({ extended: true }));

MongoClient.connect(db.url, (err, database) => {

	const db = database.db('node-mongo-app');	

	if (err) return console.log(err)
	require('./app/routes')(app, db);
	app.listen(port, () => {
	console.log('We are live on ' + port);
});     

})


// node-mongo-app

// notes

/* MongoClient.connect(db.url,(err,database) =>{ 
  const myAwesomeDB = database.db('myDatabaseNameAsAString')
  myAwesomeDB.collection('theCollectionIwantToAccess')
} */
