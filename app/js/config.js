'use strict';

define([
	'app',
	'controllers/productCompareCtrl',
	'directives/navbar'
], function(app) {

	app.config(function($routeProvider, $locationProvider) {

		//enable the html5 pushState if available
		$locationProvider.html5Mode(true);

		//application routes
		$routeProvider
			.when('/', {
				controller: 'ProductCompareCtrl',
				templateUrl: '/partials/productCompare.html'
			})
			.otherwise({
				redirectTo: '/'
			});
		//end routes

	});

});