angular.module('userCenter')
	.directive('usersLogin', [function() {

		return {
			templateUrl: 'components/user-center/tpls/login.html',
			controller: [
				'$scope',
				'$location',
				'$state',
				'userService',
				function($scope, $location, $state, userService) {

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

					$scope.signin = function() {

						$state.go('user.signin')
					}
				}
			]
		}
	}])
	.directive('usersSignin', [function() {

		return {
			templateUrl: 'components/user-center/tpls/signin.html',
			controller: [
				'$scope',
				'$location',
				'$state',
				'userService',
				function($scope, $location, $state, userService) {

					$scope.login = function() {

						$state.go('user.login')
					}

					$scope.singin = function() {

						userService.singin($scope.user, function(res) {

							if (res.success) {

								alert('signin success')
								$state.go('user.login')
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
	.directive('widgetUserSummary', [
		function() {

			return {
				templateUrl: 'components/user-center/tpls/widget-user-summary.html',
				controller: [
					'$scope',
					'userService',
					function($scope, userService) {

						$scope.users = [];
						userService.getUsers()
							.then(function(res) {

								$scope.users = res.data;
							});
					}
				]
			}
		}
	])
	.directive('widgetUserManage', [
		function() {

			return {
				templateUrl: 'components/user-center/tpls/widget-user-manage.html',
				controller: [
					'$scope',
					'userService',
					function($scope, userService) {

						$scope.users = [];
						userService.getUsers()
							.then(function(res) {

								$scope.users = res.data;
							});
					}
				]
			}
		}
	])