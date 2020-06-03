## Socket App
Socket App demostrates a socket application using a simple chat implementation.    
The server is done with `express` and `socket.io`    
There are two implementation for the client:  
1. Using Jquery and Socket.io native client `/socket.io/socket.io.js` which is served 
   automatically from the server when `Socket.IO` server is configured. see `chat.html`
2. Using Vue.JS. The `vue-socket.io` module is used to integrate `socket.io-client` with `Vue` and also `Vuex`