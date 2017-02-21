angular.module('app')
	.controller('appController', [
		'$scope',
		'user',
		function($scope, user) {
			$scope.user = user
		}
	])