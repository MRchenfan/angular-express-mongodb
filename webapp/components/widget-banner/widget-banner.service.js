angular.module('widgetBanner')
	.service('bannerService', [
		'$http',
		'API',
		'Upload',
		function($http, API, Upload) {

			this.getBanners = function() {

				return $http.get('data/banners.json');
			};

			this.saveBanner = function(banner) {

				console.log(banner);
				return $http.post(API + 'banner/save', banner);
			};

			this.removeBanner = function(banner) {

				console.log(banner);
				return $http.post(API + 'banner/remove', banner);
			};

			this.uploadBanner = function(file, errFiles) {

				return file.upload = Upload.upload({
					url: 'http://127.0.0.1:8888/banner/upload',
					data: {
						file: file
					}
				});
			};
		}
	]);