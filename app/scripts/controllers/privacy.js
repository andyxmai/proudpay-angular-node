'use strict';

angular.module('proudpayAngularNodeApp')
  .controller('PrivacyCtrl', function ($scope, $http) {
    $http.get('/api/awesomeThings').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
    });
  });
