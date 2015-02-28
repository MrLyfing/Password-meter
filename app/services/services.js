angular.module('Services', []).
factory('ServicesUser', function() {
	var ServicesUser = {};

	ServicesUser.getPassword_strengh = function(password) {
		var score = 0;
		var conditions = {
			upper : /[A-Z]/.test(password),
			lower : /[a-z]/.test(password),
			digit : /[0-9]/.test(password),
			symbol : /[^a-zA-Z0-9]/.test(password), //\W try later
		};
		var conditions_met = 0;

		if (password.length >= 5) {
			score = password.length;
			for (var key in conditions)
				conditions_met += (conditions[key]) ? 1 : 0;

			score += (conditions_met - 1) * 10;
		}
		else
			score = 0;

		if (score > 100)
			score = 100;

		return score;
	};

	return ServicesUser;
});