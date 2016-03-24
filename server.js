// packages
var app = require('express')();
var express = require('express');
var http = require('http').Server(app);
var path = require('path');
var io = require('socket.io')(http);

app.use(express.static(path.join(__dirname, '/public')));

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('chat message', function(msg) {
    console.log('message: ' + msg);
  });
  socket.on('disconnect', function() {
    console.log('user disconnected');
  });
});


http.listen(3000, function() {
  console.log('listening on *:3000');
});


