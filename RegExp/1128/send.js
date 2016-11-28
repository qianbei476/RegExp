
var url = require('url');
var http = require('http');
var match = require('./match');


function send(urlstr){
  var link = url.parse(urlstr);
  var options = {
    hostname:link.hostname,
    port:80,
    path:link.path
  }

  var callback = function(response){
    var body ='';
    response.on('data',function(data){
      body += data;
    });

    response.on('end',function(){
      match.match(body);
    });
  }

  var request = http.request(options,callback);
  request.end()

  // return body;
}

exports.send = send;
