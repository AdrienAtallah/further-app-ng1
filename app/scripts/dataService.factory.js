(function() {
  'use strict';

  angular
    .module('furtherApp')
    .factory('dataService', dataService);

  function dataService($http, $q) {

    var lat = '',
      lon = '',
      location = {};


    function _setLat(__lat) {
      localStorage.setItem('lat', __lat);
      lat = __lat;
    }

    function _getLat() {
      return lat;
    }

    function _setLon(__lon) {
      localStorage.setItem('lon', __lon);
      lon = __lon;
    }

    function _getLon() {
      return lon;
    }

    function _setLocation(__location) {
      localStorage.setItem('location', angular.toJson(__location));
      location = __location;
    }

    function _getLocation() {
      if (!location)
        return angular.fromJson(localStorage.getItem('location'));

      return location;
    }


    var publicApi = {
      setLat: function(__lat) {
        return _setLat(__lat);
      },
      getLat: function() {
        return _getLat();
      },
      setLon: function(__lon) {
        return _setLon(__lon);
      },
      getLon: function() {
        return _getLon();
      },
      setLocation: function(__location) {
        return _setLocation(__location);
      },
      getLocation: function() {
        return _getLocation();
      }

    };

    return publicApi;
  }

})();
