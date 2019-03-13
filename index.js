const express = require('express');
const app = express();
app.set('view engine', 'ejs');
app.set('views','./views');
app.use(express.static('public'));

var server = require("http").Server(app);
var io = require("socket.io")(server);
server.listen(process.env.PORT || 3500);

io.on('connection', socket => {
  console.log("hello " + socket.id);
  socket.on("imgData", imgData => {
    io.emit("image", imgData);
  })
});
app.get('/', (req,res) => res.render('home.ejs'));
app.get('/hehe', (req,res) => res.render('hehe.ejs'));
