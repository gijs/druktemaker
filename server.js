var request = require('request');
var unirest = require('unirest');
var bodyParser = require('body-parser');
var express = require('express');
var app = express();

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 
app.set('port', (process.env.PORT || 5000));

app.use('/img', express.static(__dirname + '/img'));
app.use('/data', express.static(__dirname + '/data'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.sendFile(__dirname + '/index.html');
});



app.post('/api/v1/drukte', function(req, res) {
	var url = 'http://feedback.ns-mlab.nl/v1/crowd';
	unirest.post(url)
		.type('application/json')
		.send(JSON.stringify(req.body))
	.end(function (response) {
	  console.log(response.body);
	  if(response.body === undefined) {
	  	return res.json({'status':'success'});
	  } else {
	  	return res.status(500).send('Something broke!');
	  }
	});
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});










