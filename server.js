const express = require('express');
const app = express();
const path = require('path'); // for production
const socket = require('socket.io');
if(process.env.NODE_ENV === 'production'){
    //set static folder
    app.use(express.static('client/build'));

    app.get('*',(req,res)=>{
        res.sendFile(path.resolve(__dirname,'client','build','index.html'));
    });
}
app.set('port', (process.env.PORT || 4000));
const server = app.listen(app.get('port'), () => console.log(`Server  is runnig`));
const io = socket(server);
const cors = require('cors');
app.use(cors());

//routes

io.on('connection',socket =>{
    console.log(`Connected with ${socket.id}`);
    socket.on('englishChat',data => {
        io.sockets.emit('englishChat',data);
    });
    socket.on('gamingChat',data => {
        io.sockets.emit('gamingChat',data);
    });
    socket.on('physicsChat',data => {
        io.sockets.emit('physicsChat',data);
    });
})