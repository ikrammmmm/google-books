const  connectDB =  require('./config/database.js')
var routes = require('./controllers/api_controller.js');
const cors = require('cors');
const path = require("path");

var express = require('express');
var app  =  express()

connectDB().catch((e)=>{
  console.log("error" ,e)
});
app.use(cors());



app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.use('/', routes);
app.use(express.static(process.cwd() + "/public"));
app.use(express.static(path.resolve(__dirname, "./client/build")));
app.get("*", function (request, response) {
  response.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
});
var appPort = process.env.PORT || 3000;


app.listen(appPort,()=>{
 console.log("server runngin")
});