angular.module('widgetPv')
  .directive('widgetPvSummary', [
    function () {

      return {
        templateUrl: 'components/widget-pv/tpls/widget-pv-summary.html',
        controller: [
          '$scope',
          'pvService',
          function ($scope, pvService) {

            $scope.pv = 0;
            pvService.getPv()
              .then(function(res) {

                console.log(res);
                $scope.pv = res.data;
              });
          }
        ]
      }
    }
  ])