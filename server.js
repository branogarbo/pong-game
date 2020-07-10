const express = require('express');
const socket = require('socket.io');
const path = require('path');
const app = express();
const port = 3000;

let server = app.listen(port, console.log(`listening on port ${port}`));
let io = socket(server);

app.use(['/player1', '/player2'], express.static(path.join(__dirname,'public'))); // try regex if can

io.on('connection', socket => {
   console.log('connected to player');

   socket.on('update', playerData => {
      socket.broadcast.emit('update', playerData);
   });
});

app.get(/player[1-2]/, (req,res)=>{
   res.end();
});

app.get('*', (req,res)=>{
   res.sendStatus(404);
});
