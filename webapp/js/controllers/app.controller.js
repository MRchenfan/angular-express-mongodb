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

			$scope.toggle = {
				sidebar: true
			};
			$scope.toggleSidebar = function() {

				$scope.toggle.sidebar = ! $scope.toggle.sidebar;
			};

			$scope.state = $state;
		}
	]);