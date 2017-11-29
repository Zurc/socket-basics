var socket = io();

socket.on('connection', function() {
    console.log('User connected to socket.io server');
});

socket.on('message', function(message) {
    console.log(message);
});

// handle submitting of new message
var $form = jQuery('#message-form');

$form.on('submit', function(event) {
    event.preventDefault();

    var $message = $form.find('input[name=message]');

    socket.emit('message', {
            text: $message.val()
        })
        // erase the input content
    $message.val('');
});