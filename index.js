const express = require('express');
const app = express();
const Pusher = require('pusher');

app.disable('x-powered-by');

app.use('/public', express.static(__dirname + '/public'));

app.get('/', function(req, res) {
	res.redirect('/public');
});

var pusher = new Pusher({
  appId: '339425',
  key: '34e3a6454e1f36306bfd',
  secret: '66846ab7a1f5c7abc67b',
  cluster: 'eu',
  encrypted: true
});

var postMessage = function() {
	console.log('postMessage...');
	pusher.trigger('my-channel', 'my-event', {
  		"message": "hello world"
	});
}

setInterval(postMessage, 5000);

const server = app.listen(1337, function() {
	console.log('Listening on \"localhost:1337\"');
});
	