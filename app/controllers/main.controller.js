angular.module('app')
.controller('mainCtrl', ['$scope', 'ServicesUser', function($scope, ServicesUser) {
	$scope.input_type = "password";
	$scope.password_strengh = 0;

	$scope.$watch('user.password', function(value) {
		$scope.requirements = [];
		if (value == undefined)
			return;

		$scope.password_strengh = ServicesUser.getPassword_strengh(value);
		console.log(ServicesUser.getPassword_strengh(value));

		if (value.length < 5)
			$scope.requirements.push('At least 5 characters');
		
		if (/^[0-9]*$/.test(value) || /^[a-zA-z]*$/.test(value)) //if contains only characters or only digits
			$scope.requirements.push('At least one character and one digit');

		$scope.showRequirements = (value == '') ? 0 : $scope.requirements.length;
	});

	$scope.show_password = function() {
		if ($scope.input_type == 'password')
			$scope.input_type = 'text';
		else
			$scope.input_type = 'password';
	};
}]);