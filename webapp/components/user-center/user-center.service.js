angular.module('userCenter')
	.service('userService', [
		'$http',
		'$state',
		function($http, $state) {

			var currentUser;
			this.login = function(user, cb) {

				console.log('login => ' + user.name)

				if (angular.isFunction(cb)) {
					cb({
						success: true,
						result: user
					})
				}

				currentUser = user;
			}

			this.register = function(user, cb) {

				console.log('register => ' + user.name)

				if (angular.isFunction(cb)) {
					cb({
						success: true,
						result: user
					})
				}
			}

			this.getCurrentUser = function() {

				if (!currentUser) {

					if (confirm('you should login first')) {

						$state.go('users')
					}
				}
				return currentUser;
			}
		}
	])