angular.module('userCenter')
	.service('userService', [
		'$http',
		'$state',
		'$q',
		function($http, $state, $q) {

			var currentUser = {
				name: 'damon.cf'
			};
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

			this.signin = function(user, cb) {

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

						$state.go('users.login')
					}
				}
				return currentUser;
			}

			this.getUsers = function() {

				return $http.get('data/users.json');
			}
		}
	])