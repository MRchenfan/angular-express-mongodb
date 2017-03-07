angular.module('app')
	.controller('appController', [
		'$scope',
		'user',
		'NAME',
		'VERSION',
		'AUTHOR',
		'$state',
		function($scope, user, NAME, VERSION, AUTHOR, $state) {
			$scope.constant = {
				NAME: NAME,
				VERSION: VERSION,
				AUTHOR: AUTHOR
			}

			$scope.user = user;

			$scope.sidebarToggle = true;
			$scope.toggle = function() {
				$scope.sidebarToggle = ! $scope.sidebarToggle;
			}

			console.log($state);

			$scope.state = $state;
		}
	]);