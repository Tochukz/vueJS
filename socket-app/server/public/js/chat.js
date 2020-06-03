const socket = io();

$(document).ready(function () {
  $('form').submit(handleMessage);
});

socket.on('chatMessage', function(msg) {
  $('#content').append(`<p>${msg}</p>`);
});

function handleMessage(event) {
  event.preventDefault();
  socket.emit('chatMessage', $('#message').val());
  $('#message').val('');
}