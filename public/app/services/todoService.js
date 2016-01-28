angular.module('todoService', [])

.factory('Todo', function($http) {

	// create a new object
	var todoFactory = {};

	// get a single todo
	todoFactory.get = function(id) {
		return $http.get('/api/todos/' + id);
	};

	// get all todos
	todoFactory.all = function() {
		return $http.get('/api/todos/');
	};

	// create a todo
	todoFactory.create = function(todoData) {
		return $http.post('/api/todos/', todoData);
	};

	// update a todo
	todoFactory.update = function(id, todoData) {
		return $http.put('/api/todos/' + id, todoData);
	};

	// delete a todo
	todoFactory.delete = function(id) {
		return $http.delete('/api/todos/' + id);
	};

	// return our entire todoFactory object
	return todoFactory;

});