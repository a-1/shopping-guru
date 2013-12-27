'use strict';

define(['app'], function(app) {

	app.controller('ProductCompareCtrl', ['$scope',

		function($scope) {

			$scope.myData = [{
				merchant: "FlipCart",
				price: 20500,
				coupon: '20% off',
				delivery: '1 Day',
				emi: 'Y',
				cod: 'Y'
			}, {
				merchant: "Naaptol",
				price: 19800,
				coupon: '5% off',
				delivery: '2 Days',
				emi: 'Y',
				cod: 'N'
			}, {
				merchant: "ShopClues",
				price: 21000,
				coupon: '10% off',
				delivery: '4 Days',
				emi: 'Y',
				cod: 'N'
			}, {
				merchant: "Rediff Shopping",
				price: 21700,
				coupon: '8% off',
				delivery: '1 Day',
				emi: 'Y',
				cod: 'Y'
			}, {
				merchant: "Indiatimes Shopping",
				price: 22000,
				coupon: '2% off',
				delivery: '2 Days',
				emi: 'Y',
				cod: 'Y'
			}];

			$scope.gridOptions = {
				data: 'myData'
			};

		}

	]);

});