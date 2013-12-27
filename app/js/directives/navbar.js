'use strict';

define(['app'], function(app) {

	app.directive('navbar', function() {
		return {
			restrict: 'A',
			replace: true,
			templateUrl: '/partials/navbar.html'
		};
	})

});