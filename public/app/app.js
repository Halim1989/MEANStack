angular.module('myApp', [
		'app.routes',
		'todoService',
		'mainCtrl',
		'authService'
	])
	.config(function($httpProvider) {

		// attach our auth interceptor to the http requests
		$httpProvider.interceptors.push('AuthInterceptor');

	});