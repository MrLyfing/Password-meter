angular.module('app')
.controller('mainCtrl', ['$scope', 'ServicesUser', function($scope, ServicesUser) {
	$scope.input_type = 'password';

	$scope.$watch('user.password', function(value) {
		if (value == undefined)
			return;

		$scope.requirements = [];
		$scope.password_strengh = ServicesUser.getPassword_strengh(value);

		if (value.length < 5)
			$scope.requirements.push('At least 5 characters');

		if (!(/[0-9]/.test(value) && /[a-zA-z]/.test(value))) //if contains at least one char and digit
			$scope.requirements.push('At least one character and one digit');

		progressBar_color();
		$scope.showRequirements = (value == '') ? 0 : $scope.requirements.length;
	});

	$scope.show_password = function() {
		if ($scope.input_type == 'password')
			$scope.input_type = 'text';
		else
			$scope.input_type = 'password';
	};

	function progressBar_color() {
		if ($scope.password_strengh <= 35)
			$scope.progressBar_style = 'progress-bar progress-bar-danger';
		else if ($scope.password_strengh <= 65)
			$scope.progressBar_style = 'progress-bar progress-bar-warning';
		else
			$scope.progressBar_style = 'progress-bar progress-bar-success';
	};
}]);