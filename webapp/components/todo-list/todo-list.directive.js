angular.module('todoList')
  .directive('todoListManage', [
    function() {

      return {
        templateUrl: 'components/todo-list/tpls/todo-list-manage.html',
        controller: [
          '$scope',
          'todoListService',
          function($scope, todoListService) {

            $scope.todos = [];
            todoListService.getTodos()
              .then(function(res) {

                $scope.todos = res.data;
              })
          }
        ]
      }
    }
  ])
  .directive('todoListCard', [
    function() {

      return {}
    }
  ])
  .directive('todoListTip', [
    function() {

      return {}
    }
  ])
  .directive('todoListAdd', [
    function() {

      return {}
    }
  ])