var socket = io();

socket.on('connection', function() {
    console.log('User connected to socket.io server');
});

socket.on('message', function(message) {
    console.log(message);
});