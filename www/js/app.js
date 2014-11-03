angular
	.module('squad',['ngRoute'])
	.controller()
	.config(function ($routeProvider) {
		'use strict';

		$routeProvider.when('/', {
			controller: 'TodoCtrl',
			templateUrl: 'todomvc-index.html'
		// }).when('/:status', {
		// 	controller: 'TodoCtrl',
		// 	templateUrl: 'todomvc-index.html'
		}).otherwise({
			redirectTo: '/'
		});
	});
