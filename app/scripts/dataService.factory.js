(function() {
  'use strict';

  angular
    .module('furtherApp')
    .factory('dataService', dataService);

  function dataService($http, $q) {

    var lat = '',
        lon = '';


    function _setLat(__lat) {
      localStorage.setItem('lat', __lat)
      lat = __lat;
    }

    function _getLat() {
      return lat;
    }

    function _setLon(__lon) {
      localStorage.setItem('lon', __lon)
      lon = __lon;
    }

    function _getLon() {
      return lon;
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
      }

    };

    return publicApi;
  }

})();
