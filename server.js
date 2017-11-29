var express = require('express');
var PORT = process.env.PORT || 3000;
var app = express();
var http = require('http').Server(app)
var io = require('socket.io')(http)

app.use(express.static(__dirname + '/public'));

io.on('connection', function(socket) {
    console.log('User connected via socket.io')

    socket.on('message', function(message) {
        console.log('Message received: ' + message.text);

        io.emit('message', message);
        // socket.broadcast.emit('message', message); // emit to everyone except the one sending
    })

    socket.emit('message', {
        text: "welcome to the chat app"
    });
});

http.listen(PORT, function() {
    console.log('Server started...')
});