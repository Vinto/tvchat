var socket = io();

socket.on('connect', function() {
  console.log('Connected to Server');

  socket.emit('createMessage', {
    from: 'peg@rates.com',
    text: 'one to one',
    createdAt: new Date()
  });
});

socket.on('disconnect', function() {
  console.log('Disconnected from server');
});

socket.on('newMessage', function(message) {
  console.log('Message', message);
});
