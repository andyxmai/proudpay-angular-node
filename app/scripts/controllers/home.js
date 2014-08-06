'use strict';

angular.module('proudpayAngularNodeApp')
	.controller('HomeCtrl', ['$scope', '$http', 'Parseservice', '$modal', function ($scope, $http, Parseservice, $modal) {

		$scope.currentUser = Parse.User.current();

		console.log($scope.currentUser);

		$http.get('/api/getPaymentCards/?customer_id='+Parse.User.current().id).success(function(creditCards) {
			$scope.creditCards = creditCards;
			//console.log(creditCards);
		});

		var query = new Parse.Query('Transaction');
		query.equalTo('customer', $scope.currentUser);
		query.descending('createdAt');
		query.find()
		.then(function(result){
			//$scope.transactions = result;
			var transactions = [];
			for (var i = 0; i < result.length; i++) {
				var transactionObj = {};
				var date = new Date(result[i].createdAt);
				transactionObj.date = (date.getMonth() + 1) + '/' + date.getDate() + '/' +  date.getFullYear();
				transactionObj.amount = (parseFloat(result[i].get('amount'))+parseFloat(result[i].get('tip'))-parseFloat(result[i].get('discount'))).toFixed(2);
				transactionObj.discount = result[i].get('discount');
				transactionObj.merchant = '';
				getMerchantName(result[i].get('merchant'), transactionObj);

				transactions.push(transactionObj);
			}

			$scope.transactions = transactions;
		});

		var getMerchantName = function(merchantId, transactionObj) {
			merchantId.fetch().then(function(merchant) {
				transactionObj.merchant = merchant.get('additional');
			});
		};

		$scope.open = function () {
			var modalInstance = $modal.open({
	      templateUrl: 'myModalContent.html',
	      controller: ModalInstanceCtrl
	    });

	    modalInstance.result.then(function (selectedItem) {
	      console.log('submitted');
	    }, function () {
	      console.log('closed');
	    });
    };

	}]);

var ModalInstanceCtrl = function ($scope, $modalInstance) {
  $scope.ok = function (card) {
		console.log(card);
    $modalInstance.close();
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
};