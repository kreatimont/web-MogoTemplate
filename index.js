const express = require('express');
const app = express();

app.disable('x-powered-by');

app.use('/public', express.static(__dirname + '/public'));

app.get('/', function(req, res) {
	res.redirect('/public');
});


const server = app.listen(1337, function() {
	console.log('Listening on \"localhost:1337\"');
});
	