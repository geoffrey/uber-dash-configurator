function MainController($scope, $location, $http) {
  $scope.login = function() {
    $scope.processing = true;
    $http.get('/login')
    .success(function() {

    })
    .error(function() {

    })
    .finally(function() {
      $scope.processing = false;
    });
  };

  $scope.getProducts = function() {
    $http.get('/products')
    .success(function() {

    })
    .error(function() {

    })
    .finally(function() {
    });
  };

  function init() {
    L.mapbox.accessToken = 'pk.eyJ1IjoiZ2VvZmZyZXl0aXNzZXJhbmQiLCJhIjoiY2lmbHF0d2twMncwMXM2a3F1ODRraGdxaiJ9.wJk9as6xGHfCis8dyZQ2PA';

    var uberHQ = [37.775718, -122.418077];
    var lyftHQ = [37.7603392,-122.4148612,17]; // troll
    var MAP = L.mapbox
      .map('map', 'mapbox.streets')
      .setView(uberHQ, 13)
      .addControl(L.mapbox.geocoderControl('mapbox.places', {}));

    var pickup = L.marker(lyftHQ, {
      icon: L.mapbox.marker.icon({
        'marker-color': '#49A86C'
      }),
      title: 'pickup',
      opacity: 0.8,
      draggable: true
    }).addTo(MAP);

    var dropoff = L.marker(uberHQ, {
      icon: L.mapbox.marker.icon({
        'marker-color': '#F8322F'
      }),
      title: 'dropoff',
      opacity: 0.8,
      draggable: true
    }).addTo(MAP);


    pickup.on('dragend', setPickup);
    dropoff.on('dragend', setDropoff);

    function setPickup() {
      var m = pickup.getLatLng();
      console.log('pickup', m);
      $scope.pickup_lat = m.lat;
      $scope.pickup_lng = m.lng;
    }

    function setDropoff() {
      var m = dropoff.getLatLng();
      console.log('dropoff', m);
      $scope.dropoff_lat = m.lat;
      $scope.dropoff_lng = m.lng;
    }

    setPickup();
    setDropoff();
  }

  init();
}

angular
.module('uber-dash', []);

angular
.module('uber-dash')
.controller('MainController', MainController);

