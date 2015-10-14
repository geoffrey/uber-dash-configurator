var request = require('request');
var config  = require('./config');

module.exports = {

  spa: function(req, res, next) {
    res.render('index');
  },

  login: function(req, res, next) {
    var url = 'https://login.uber.com/oauth/authorize';
        url += '?scope=request%20profile&response_type=code';
        url += '&client_id=' + config.uber.clientId;

    res.redirect(url);
  },

  callback: function(req, res, next) {
    var data = {
      client_id:     config.uber.clientId,
      client_secret: config.uber.clientSecret,
      grant_type:    'authorization_code',
      redirect_uri:  config.uber.redirectUri,
      code:          req.query.code
    };

    request.post({
      url:  'https://login.uber.com/oauth/token',
      form: data,
    }, function(err, response, body) {
      if (!!err) {
        res.render('index');
      }
      res.render('index', { token: JSON.parse(body).access_token });
    });
  },

  products: function(req, res, next) {
    var data =  {
      'latitude':  req.query.lat,
      'longitude': req.query.lng
    };

    var headers = {
      'Authorization': req.headers.authorization
    };

    request.get({
      url:     'https://api.uber.com/v1/products',
      qs:      data,
      headers: headers
    }, function(err, response, body) {
      if (!!err) {
        res.status(400).json({ error: err });
      }
      res.json(JSON.parse(body));
    });
  }
};
