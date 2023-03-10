const WebSocket = require('ws');

// Create a new WebSocket client instance
const ws = new WebSocket('ws://localhost:8080');

// Listen for the 'open' event, which indicates that the connection to the server has been established
ws.on('open', function open(data) {
  console.log('Connected to WebSocket server', data);
});

// Listen for the 'message' event, which indicates that a message has been received from the server
ws.on('message', function incoming(data) {
const textDecoder = new TextDecoder('utf-8');
const jsonString = textDecoder.decode(data);
const jsonObject = JSON.parse(jsonString);

  console.log('Received message:', jsonObject);
});

// Listen for the 'close' event, which indicates that the connection to the server has been closed
ws.on('close', function close() {
  console.log('Disconnected from WebSocket server');
});
