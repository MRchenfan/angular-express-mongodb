angular.module('widgetPv')
  .service('pvService', [
    '$http',
    '$q',
    function($http, $q) {

      this.getPv = function() {

        return $q(function(resolve, reject) {
          resolve({ data: { count: 10086 } });
        });
      }
    }
  ])