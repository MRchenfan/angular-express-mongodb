angular.module('userCenter')
	.directive('userCenter', [function() {

		return {
			templateUrl: 'components/user-center/user-center.template.html',
			controller: [
				'$scope',
				'$location',
				'$state',
				'userService',
				function($scope, $location, $state, userService) {

					console.log($state)

					$scope.login = function() {

						userService.login($scope.user, function(res) {

							if (res.success) {

								// jump
								$state.go('home')
							} else {

								// throw error
							}
						})
					}

					$scope.register = function() {

						console.log($scope.user)
						userService.register($scope.user, function(res) {

							if (res.success) {

								// login
								$scope.login(res.result)
							} else {

								// throw error
							}
						})
					}
				}
			]
		}
	}])
	.directive('userNameUnique', ['$timeout', function($timeout) {

		return {
			require: 'ngModel',
			restrict: 'A',
			link: function(scope, ele, attrs, ctrl) {

				var busy = false;
				scope.$watch(attrs.ngModel, function(newValue) {

					if (!newValue) {
						return
					}
					if (busy) {
						return
					}
					busy = true
					$timeout(function() {

						console.log('validate unique')
							// todo: validate from server
						ctrl.$setValidity('unique', true)
					}, 500).then(function() {

						busy = false
					})
				});
			}
		}
	}])