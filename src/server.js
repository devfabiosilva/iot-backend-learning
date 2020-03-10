const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

app.use(cors());

io.on("connection", socket => {
    socket.on("connectRoom", box => {
        socket.join(box);
    })
})

app.use((req, res, next) => {
    req.io=io;
    return next();
});
//mongoose.connect();
//mongoose.connect('mongodb://localhost:27017/local', {useNewUrlParser: true});
mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-5ggpy.mongodb.net/test?retryWrites=true&w=majority',
{useNewUrlParser: true});

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(require('./routes.js'));
app.use('/files', express.static(path.resolve(__dirname, '..', 'tmp')));
//app.listen(3333);
server.listen(3333);
