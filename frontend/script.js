import url_backend from './import.js';

const ws = new WebSocket(url_backend);
ws.addEventListener('open', () => {
  console.log('Connected');

  ws.send('Hello! I am the client.');

  ws.addEventListener('message', event => {
    console.log('Server message received:', event);
  });
});

console.log('teste', teste)