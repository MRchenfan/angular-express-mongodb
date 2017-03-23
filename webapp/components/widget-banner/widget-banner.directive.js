angular.module('widgetBanner')
	.directive('widgetBanner', [
		function() {

			return {
				templateUrl: 'components/widget-banner/widget-banner.template.html',
				controller: [
					'$scope',
					'$timeout',
					'bannerService',
					function($scope, $timeout, bannerService) {

						bannerService
							.getBanners()
							.then((res) => {

								$scope.banners = res.data;
							});

						$scope.saveBanner = function() {

							angular.forEach($scope.banners, function(item, idx) {

								if (item.check) {
									bannerService.saveBanner(item);
								}
							});
						};

						$scope.addBanner = function() {

							var b = {
								title: 'new banner',
								desc: 'description'
							};
							$scope.banners.push(b);
						};

						$scope.removeBanner = function() {

							angular.forEach($scope.banners, function(item, idx) {

								if (item.check) {
									bannerService.removeBanner(item);
								}
							});
						};

						$scope.upload = function(file, errFiles, index) {

							$scope.f = file;
							$scope.errFile = errFiles && errFiles[0];
							if (!file) return;

							bannerService.uploadBanner(file, errFiles)
								.then(function(res) {

									console.log(res);
									alert('upload success');
									$scope.banners[index].title = res.data.banner.title;
									$scope.banners[index].url = res.data.banner.url;
								}, function(res) {

									alert('upload failed');
								}, function(evt) {

									console.log(evt);
									file.progress = Math.min(100, parseInt(100.0 * evt.loaded / evt.total))
									if (evt.loaded === evt.total) {

										$timeout(function() {
											$scope.f = null;
										}, 2000);
									}
								});
						};
					}
				]
			}
		}
	])