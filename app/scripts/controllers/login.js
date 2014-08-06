'use strict';

angular.module('proudpayAngularNodeApp')
	.controller('LoginCtrl', ['$scope', '$http', 'Parseservice', '$location', '$rootScope', function ($scope, $http, Parseservice, $location, $rootScope) {
		
		$scope.alerts = [];

		if (Parse.User.current() !== null) {
			$location.path('/home');
		}

		$scope.login = function(form) {
			Parse.User.logIn(form.email, form.password, {
				success: function(user) {
					$rootScope.currentUser = user;
					$scope.$apply();
					$location.path('/home');
				},
				error: function(user, error) {
					console.log('Unable to log in: ' + error.code + ' ' + error.message);
					$scope.alerts.push({ type: 'danger', msg: 'Oh no! Could not login. Please try again.' });
				}
			});
		};

		$scope.closeAlert = function(index) {
	    $scope.alerts.splice(index, 1);
	  };
	}]);
