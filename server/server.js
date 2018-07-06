const path = require('path');
const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
// path.join gives the correct path of public directory
const publicPath = path.join(__dirname,'../public');

const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);
io.on('connection', (socket)=>{
    console.log('new user connected');

// socket.emit('newEmail',{
//     from: 'Shivam@gmail.com',
//     text: 'Whats going on',
//     creatAt: 123
// });

socket.emit('newMessage',{
    from: 'Kapil',
    text: 'This side is kapil',
    createAt: 123
});


socket.on('createMessage',(newMessage) => {
        console.log('createMessage',newMessage);
})

socket.on('disconnect',() => {
    console.log('User was disconnected');
})
} );


app.use(express.static(publicPath));

server.listen(port, () => {
    console.log(`Server is up on ${port}`);
})