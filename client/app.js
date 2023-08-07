const socket = io();

document.getElementById('sendMessage').addEventListener('click', () => {
  const messageInput = document.getElementById('messageInput');
  const message = messageInput.value.trim();
  messageInput.value = '';
  
  
  if (message) {
    socket.emit('message', message);
    messageInput.value = '';
  }
  
});

document.getElementById('joinButton').addEventListener('click', () => {
  const nameInput = document.getElementById('nameInput');
  const userName = nameInput.value.trim();

  if (userName) {
    socket.emit('userJoined', userName);
    document.getElementById('nameInputContainer').style.display = 'none';
    document.getElementById('chat').style.display = 'block';
  }
});

socket.on('userJoined', (message) => {
  const messagesContainer = document.getElementById('messages');
  const messageElement = document.createElement('div');
  messageElement.textContent = message;
  messagesContainer.appendChild(messageElement);
});

socket.on('message', (message) => {
  const messagesContainer = document.getElementById('messages');
  const messageElement = document.createElement('div');
  messageElement.textContent = message;
  messagesContainer.appendChild(messageElement);
});

