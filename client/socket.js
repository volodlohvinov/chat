
function setupSocket(socket, io) {
    socket.on('userJoined', (userName) => {
      socket.userName = userName;
      io.emit('userJoined', `${userName} has joined the chat.`);
    });
  
    socket.on('message', (message) => {
      io.emit('message', `${socket.userName}: ${message}`);
    });
  }
  
  module.exports = { setupSocket };
  