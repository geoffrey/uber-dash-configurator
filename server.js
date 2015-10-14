var PORT    = process.env.PORT || 3000;
var express = require('express');
var app     = express();
var routes  = require('./routes');

app.use(express.static('public'));
app.set('view engine', 'jade');

app.get('/',         routes.spa);
app.get('/login',    routes.login);
app.get('/callback', routes.callback);
app.get('/products', routes.products);

var server = app.listen(PORT, function() {
  console.log('Server running on http://localhost:' + PORT);
});
