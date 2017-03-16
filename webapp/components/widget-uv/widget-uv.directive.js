angular.module('widgetUv')
  .directive('widgetUvSummary', [
    function() {

      return {
        templateUrl: 'components/widget-uv/tpls/widget-uv-summary.html',
        controller: [
          '$scope',
          'uvService',
          function($scope, uvService) {

            $scope.uv = 0;
            uvService.getUv()
              .then(function(res) {

                $scope.uv = res.data;
              });
          }
        ]
      }
    }
  ])