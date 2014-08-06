'use strict';

angular.module('proudpayAngularNodeApp')
	.controller('SignupCtrl', ['$scope', '$http', 'Parseservice', function ($scope, $http, Parseservice) {

		$http.get('/api/awesomeThings').success(function(awesomeThings) {
			$scope.awesomeThings = awesomeThings;
		});

		$scope.signup = function(form) {
			var user = new Parse.User();
			user.set('email', form.email);
			user.set('username', form.email);
			user.set('password', form.password);

			user.signUp(null, {
				success: function(user) {
					$scope.currentUser = user;
					$scope.$apply(); // Notify AngularJS to sync currentUser
				},
				error: function(user, error) {
					console.log('Unable to sign up:  ' + error.code + ' ' + error.message);
				}
			});
		};
	}]);
