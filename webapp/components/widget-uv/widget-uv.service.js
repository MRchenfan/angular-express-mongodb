angular.module('widgetUv')
  .service('uvService', [
    '$http',
    '$q',
    function($http, $q) {

      this.getUv = function() {
        return $q(function(resolve, reject) {
          resolve({ data: { count: 10010 } });
        });
      };
    }
  ])