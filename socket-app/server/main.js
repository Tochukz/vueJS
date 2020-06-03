const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');


const app = express();
app.use(express.static(path.join(__dirname, 'public')));

const server = http.createServer(app);
const socket = socketIO(server);


app.get('/', (req, res) => {
  res.send('Welcome to chat app');
});

socket.on('connection', io => {
  console.log('client connected');
  io.on('disconnect', () => {
    console.log('client dosconnected');
  });
  io.on('chatMessage', msg => {
    console.log('New message:', msg);
    socket.emit('chatMessage', msg);
    // This will send the message to everyone except the emitter.
    //io.broadcast.emit('chatMessage', msg); 
  });
});

const port = 9000;
server.listen(port, () => console.log(`Server is running at port ${port}`));