angular.module('app') 
	.directive('dbSidebar', [function() {

		return {
			templateUrl: 'tpls/sidebar.html',
			link: function(scope, element, attrs, ctrl) {

				element.find('.sidebar-list').on('click', function(e) {

					e.stopPropagation();
					var sidebarList = angular.element(this);
					var subMenu = sidebarList.find('>.sidebar-sub-menu');
					if (sidebarList.hasClass('open')) {
						subMenu.each(function(idx, item) {

							var subMenuItem = angular.element(item);
							var menuHeight = 0;
							subMenuItem.find('>.sidebar-list').each(function(idx, item) {

								menuHeight += angular.element(item).height();
							})
							subMenuItem.height(menuHeight);
						});
					} else {
						subMenu.height(0);
					}
				});
			}
		};
	}]);