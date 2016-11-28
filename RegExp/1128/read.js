
var fs = require('fs');
var send =require('./send');

function read(){
  fs.readFile('data.txt',function(err,url){
    if(err)
     return console.log(err);
    else
     return send.send(url.toString());
  })
}

exports.read = read;
