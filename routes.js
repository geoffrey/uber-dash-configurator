var request = require('request');
var config  = require('./config');

module.exports = {

  spa: function(req, res, next) {
    res.render('index');
  },

  login: function(req, res, next) {
    var url = 'https://login.uber.com/oauth/authorize';
    url += '?scope=request profile&response_type=code';
    url += '&client_id=' + config.uber.clientId;
    console.log('Redirecting to', url);
    res.redirect(url);
  },

  callback: function(req, res, next) {
    var data = {
      'client_id': config.uber.clientId,
      'client_secret': config.uber.clientSecret,
      'grant_type': 'authorization_code',
      'redirect_uri': config.uber.redirectUri,
      'code': req.query.code
    };

    request.post({
      url: 'https://login.uber.com/oauth/token',
      form: data,
    }, function(err, response, body) {
      if (!!err) {
        return console.log('ERROR: Cannot login with Uber, try again!');
      }
      console.log('Successfully logged in with Uber, you can now press your button anytime!')
      body = JSON.parse(body);
      TOKEN = body.access_token;
      res.json(body);
    });
  },

  getProducts: function getProducts(req, res, next) {
    if (!TOKEN) {
      return console.log('Please login first! Visit http://localhost:3000/login');
    }

    var data =  {
      'latitude': config.start_latitude,
      'longitude': config.start_longitude
    };

    var headers = {
      'Authorization': 'Bearer ' + TOKEN
    };

    request.get({
      url: 'https://api.uber.com/v1/products',
      qs: data,
      headers: headers
    }, function(err, response, body) {
      if (!!err) {
        console.log('ERROR while getting the products list', err)
      }
      if (res) {
        res.json(JSON.parse(body));
      }
    });
  }
};
