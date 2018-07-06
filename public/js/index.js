var socket =  io();
socket.on('connect',function() {
    console.log('connected to server');

    // socket.emit('createEmail',{
    //     to: 'naveen@gmail.com',
    //     text: 'hey this is naveen'
    // });
    socket.emit('createMessage',{
        from: 'Shivam',
        text: 'hey this is Shivam'
    });
});
socket.on('disconnect',function() {
    console.log('Disconect to server');
});

// socket.on('newEmail',function(email){
//     console.log('New Email',email);
// })

socket.on('newMessage',function(message) {
 console.log('newMessage :',message);
});