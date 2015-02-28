angular.module('app')
.controller('mainCtrl', ['$scope', 'ServicesUser', function($scope, ServicesUser) {
	$scope.input_type = "password";
	$scope.password_strengh = 0;
	$scope.bar_color = "progress-bar progress-bar-success"

	$scope.$watch('user.password', function(value) {
		if (value != undefined) {
			$scope.password_strengh = ServicesUser.getPassword_strengh(value);
			console.log(ServicesUser.getPassword_strengh(value));
			console.log(value);
		}

		if ($scope.password_strengh > 100)
			$scope.password_strengh = 100;
	});

	$scope.show_password = function() {
		if ($scope.input_type == "password")
			$scope.input_type = "text";
		else
			$scope.input_type = "password";
	};


}]);