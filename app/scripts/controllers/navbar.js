'use strict';

angular.module('proudpayAngularNodeApp')
	.controller('NavbarCtrl', ['$scope', '$http', 'Parseservice', function ($scope, $location, Parseservice) {
		
		$scope.isActive = function(route) {
			return route === $location.path();
		};

		$scope.loggedIn = function() {
	    if (Parse.User.current() === null) {
	      return false;
	    } else {
	      return true;
	    }
	  };
 
	  $scope.logout = function() {
	    Parse.User.logOut();
	  };
	}]);
