angular.module('todoList')
  .service('todoListService', [
    '$http',
    function($http) {

      this.getTodos = function(username) {

        return $http.get('data/todos.json');
      }
    }
  ])