angular.module('loginCtrl', [])

.controller('loginController', function($rootScope, $location, Auth) {

	var vm = this;

	// function to handle login form
	vm.doLogin = function() {

		// call the Auth.login() function
		Auth.login(vm.loginData.username, vm.loginData.password)
		.success(function(data) {

			// if a user successfully logs in, redirect to users page
			if (data.success){
 				$location.path('/');
			}
 			else{
 				vm.error = data.message;
 			}
		});
	};

});