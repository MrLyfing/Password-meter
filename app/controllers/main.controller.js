angular.module('app')
.controller('mainCtrl', ['$scope', function($scope) {
	$scope.input_type = "password";
	$scope.password_strengh = 10;

	$scope.show_password = function() {
		if ($scope.input_type == "password")
			$scope.input_type = "text";
		else
			$scope.input_type = "password";
	};
}]);