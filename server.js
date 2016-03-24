// packages
var express = require('express');
var morgan = require('morgan');
var app = express();

var http = require('http').Server(app);
var path = require('path');
var io = require('socket.io')(http);

app.use(express.static(path.join(__dirname, '/public')));

app.get('/', function(req, res){
  res.sendFile(__dirname + '/views/index.html');
});

io.on('connection', function(socket){
  console.log('a user connected');
  socket.emit("hello", {greeting: "the admin is ", admin: "jared"});
  
  socket.on("CLICK", function(msg) {
    console.log(msg.name + " said " + msg.message);
    io.emit("transmission", msg)
  });
  socket.on('disconnect', function() {
    console.log('user disconnected');
  });
});


http.listen(3000, function() {
  console.log('listening on *:3000');
});


