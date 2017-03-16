angular.module('app')
  .directive('toggleDirective', [
    function() {

      return {
        restrict: 'A',
        link: function(scope, element, attrs, ctrl) {

          var toggle = true;
          if (attrs.toggleAttr == 'false') {
            toggle = false;
          } else {
            toggle = true;
          }
          var toggleClassAttr = attrs.toggleClassAttr;
          if (!toggleClassAttr) {
            toggleClassAttr = 'open active';
          }
          element.on('click', function() {

            console.log(toggle);
            if (toggle) element.removeClass(toggleClassAttr);
            else element.addClass(toggleClassAttr);
            toggle = ! toggle;
          });
        }
      }
    }
  ])