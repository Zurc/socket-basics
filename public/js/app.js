var name = getQueryVariable('name') || 'Anonymous';
var room = getQueryVariable('room');
var socket = io();

console.log(name + ' wants to join room ' + room);

socket.on('connection', function() {
    console.log('User connected to socket.io server');
});

socket.on('message', function(message) {
    var momentTimestamp = moment.utc(message.timestamp);
    var $message = jQuery('.messages')

    console.log('New message: ');
    console.log(message.text);

    $message.append('<p><strong>' + message.name + ' ' + momentTimestamp.local().format('h:mm a') + ': </strong></p>');
    $message.append('<p>' + message.text + '</p>');
});

// handle submitting of new message
var $form = jQuery('#message-form');

$form.on('submit', function(event) {
    event.preventDefault();

    var $message = $form.find('input[name=message]');

    socket.emit('message', {
        name: name,
        text: $message.val()
    });

    // erase the input content
    $message.val('');
});