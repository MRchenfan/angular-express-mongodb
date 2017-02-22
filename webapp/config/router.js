angular.module('app')
	.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

		$urlRouterProvider.otherwise('/')

		$stateProvider
			.state('home', {
				url: '/',
				views: {
					'': {
						templateUrl: 'tpls/home.html',
						controller: 'appController',
						resolve: {
							user: [
								'userService',
								function(userService) {

									var currentUser = userService.getCurrentUser()
									console.log('get currentUser => ' + currentUser.name)
									return currentUser
								}
							]
						}
					}
				}
			})
			.state('users', {
				url: '/users',
				views: {
					'': {
						templateUrl: 'tpls/users.html'
					}
				}
			})
	}])