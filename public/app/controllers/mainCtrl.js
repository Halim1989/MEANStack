angular.module('mainCtrl', ['todoCtrl', 'loginCtrl'])

.controller('mainController', function($rootScope, $location, Auth) {

	var vm = this;

	// check to see if a user is logged in on every request
	$rootScope.$on('$routeChangeStart', function() {
		// get info if a person is logged in
		vm.loggedIn = Auth.isLoggedIn();

		if(vm.loggedIn){
			Auth.getUser().success(function(data) {
				vm.user = data;
			});
		}
	});

	// function to handle logging out
	vm.doLogout = function() {
		Auth.logout();
		// reset all user info
		vm.user = {};
		$location.path('/login');
	};

});