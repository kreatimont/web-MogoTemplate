const express = require('express');
const app = express();
const Pusher = require('pusher');

const channel = 'viper-channel';
const event = 'add-note-event';

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

var postTestMessage = function() {
	console.log('postMessage...');
	pusher.trigger('my-channel', 'my-event', {
  		"message": "hello world"
	});
}

var postNewNote = function() {
	pusher.trigger(channel, event, {
		"title": "note from pusher",
		"message": "message from pusher",
		"timestamp": "2017/08/26 1:27"
	});
}

setTimeout(postNewNote, 5000);

//setInterval(postTestMessage, 5000);

const server = app.listen(1337, function() {
	console.log('Listening on \"localhost:1337\"');
});
	