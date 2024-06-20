import { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port: 8080 });

wss.on('connection', ws => {
  console.log('Client connected');

  ws.on('message', message => {
    console.log(`Client message received: ${message}`);

    ws.send('Hello! I am the server.');
  });

  ws.on('close', () => {
    console.log('Client disconnected');
  });
})