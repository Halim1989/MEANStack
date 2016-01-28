angular.module('mainCtrl', [])

.controller('mainController', function(Todo) {

	var vm = this;

	vm.message = 'MEAN Stack Template';
	vm.search = '';
	vm.todo = {};

	display_all();

	vm.addTodo = function() {
		Todo.create(vm.todo).success(function(data){
			display_all();
			vm.todo = {};
		});
	}

	vm.deleteTodo = function(todo){
		Todo.delete(todo._id).success(function(data){
			display_all();
		});
	}

	function display_all(){
		Todo.all().success(function(data) {
			vm.todos = data;
		});
	}

});