


function match(body){
  var regexp = /([a-z0-9]+)@([a-z0-9]+).com/g;
  // var regexp = /(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&amp;:/~\+#]*[\w\-\@?^=%&amp;/~\+#])?/g; 链接
  var res = body.match(regexp);
  if(res){
    console.log('All email address number:'+res.length);
    for(var i=0;i<res.length;i++)
      console.log(res[i]);
  }else{
    console.log('no matches');
  }
//  return result;
}
exports.match = match;
