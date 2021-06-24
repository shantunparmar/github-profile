var express = require('express');
var app = express();
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/views'));
const axios = require('axios');


app.get('/', function (req, res) {
 const username = req.query.name;
global.dataS = [];
 if(username){
axios.get('https://api.github.com/users/'+username)
  .then(function (response) {
    // handle success
        getData(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });

//call backfunction 
let getData = (content) => {

axios.get(content.data.followers_url)
  .then(function (response) {
    // handle success

  dataS.value=response.data;          
  dataS.name=content.data.name;
  dataS.twitter_username = content.data.twitter_username;
  dataS.avatar_url=content.data.avatar_url;
  dataS.blog=content.data.blog;
  dataS.html_url = content.data.html_url;
  res.render('index',dataS);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
  }
}else{
  res.render('index',dataS);
}

});


var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
});