 
var express = require('express'),
  compression = require('compression'),
  bodyParser = require('body-parser'),
  mongo = require('mongoskin');
  
  

 
// var session = require('express-session');
// var RedisStore = require('connect-redis')(session);
// app.use(session({
//   store: new RedisStore(options),
//   secret: 'Pro Express.js rocks!'
// })); 
  
   
app.set('view engine', 'jade');

app.set('port', process.env.PORT || 3000);
   
app.use(bodyParser.json());
  
app.get('/', renderHomePage);