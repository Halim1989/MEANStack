angular.module('app.routes', ['ngRoute'])

.config(function($routeProvider, $locationProvider) {

	$routeProvider

	.when('/', {
		templateUrl: 'app/views/pages/todos.html',
		controller: 'todoController',
		controllerAs: 'todos'
	})	
	// login page
	.when('/login', {
		templateUrl: 'app/views/pages/login.html',
		controller: 'loginController',
		controllerAs: 'login'
	});

	$locationProvider.html5Mode(true);
});