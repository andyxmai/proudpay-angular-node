'use strict';

angular.module('proudpayAngularNodeApp')
	.service('Parseservice', [function() {
		// AngularJS will instantiate a singleton by calling "new" on this function

		Parse.initialize('b5kezfWTiIjiIiGgtEAxOd5DaZQT8t3d0NofPlGn', '6w8HJ5Jbpyl5Tr20DHeUbigm4rFQ5popfMTByNTH');
	}]);
