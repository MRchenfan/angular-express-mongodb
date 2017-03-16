angular.module('app')
	.filter('breadCrumb', function() {

		return function(input, uppercase) {

			var output = input.replace('.', '/');
			if (uppercase) {
				output = output.toUpperCase();
			}
			return output;
		}
	})