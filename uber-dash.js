var https = require('https');

var CONFIG = {
  uber_token:      'token',
  product_id:      'a1111c8c-c720-46c3-8534-2fcdd730040d', // UberX in SF
  start_latitude:  37.7603392,
  start_longitude: -122.4148612,
  end_latitude:    37.775718,
  end_longitude:   -122.418077,
};

function callUber(event, context) {
  var data =  {
    product_id:      CONFIG.product_id,
    start_latitude:  CONFIG.start_latitude,
    start_longitude: CONFIG.start_longitude,
    end_latitude:    CONFIG.end_latitude,
    end_longitude:   CONFIG.end_longitude
  };

  data = JSON.stringify(data);

  var headers = {
    'Authorization':  'Bearer ' + CONFIG.uber_token,
    'Content-Type':   'application/json',
    'Content-Length': Buffer.byteLength(data)
  };

  var options = {
    host:    'api.uber.com',
    path:    '/v1/requests',
    method:  'POST',
    headers: headers
  };

  var req = https.request(options, function(res) {
    if (res.statusCode == 200) {
      context.succeed(event);
    } else if (context) {
      context.fail(event);
    }

    res.on('data', function (chunk) {
      console.log("" + chunk);
    });
  });

  req.write(data);
  req.end();
}

exports.handler = callUber;
