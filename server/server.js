const  connectDB =  require('./config/database.js')
var routes = require('./controllers/api_controller.js');
const cors = require('cors');

var express = require('express');
var app  =  express()

connectDB();
app.use(cors());



app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.use('/', routes);
app.use(express.static(process.cwd() + "/public"));

var appPort = process.env.PORT || 3000;


app.listen(appPort,()=>{
 console.log("server runngin")
});