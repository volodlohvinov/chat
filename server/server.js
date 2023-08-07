
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const { setupSocket } = require('../client/socket');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(express.static(__dirname + '/../client'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/../client/index.html');
});

io.on('connection', (socket) => {
  setupSocket(socket, io);
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
