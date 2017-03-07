angular.module('app')
	.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

		$urlRouterProvider.otherwise('/')

		$stateProvider
			.state('users', {
				url: '/users',
				views: {
					'': {
						templateUrl: 'tpls/users.html'
					}
				}
			})
			.state('users.login', {
				url: '/login',
				views: {
					'': {
						template: '<users-login></users-login>'
					}
				}
			})
			.state('users.signin', {
				url: '/signin',
				views: {
					'': {
						template: '<users-signin></users-signin>'
					}
				}
			})
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
			.state('home.dashboard', {
				url: 'dashboard',
				views: {
					'': {
						templateUrl: 'tpls/dashboard.html'
					}
				}
			})
			.state('home.table', {
				url: 'table',
				views: {
					'': {
						templateUrl: 'tpls/table.html'
					}
				}
			})
			.state('home.chart', {
				url: 'chart',
				views: {
					'': {
						templateUrl: 'tpls/chart.html'
					}
				}
			})
	}])