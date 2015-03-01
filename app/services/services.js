angular.module('Services', []).
factory('ServicesUser', function() {
	var ServicesUser = {};

	ServicesUser.getPassword_strengh = function(password) {
		var score = 0;
		var conditions_met = 0;
		var conditions = {
			upper : /[A-Z]/.test(password),
			lower : /[a-z]/.test(password),
			digit : /[0-9]/.test(password),
			symbol : /[^a-zA-Z0-9]/.test(password), //\W try later
		};

		if (password.length >= 5 && (conditions.upper || conditions.lower) && conditions.digit) {
			score = password.length;

			for (var key in conditions)
				conditions_met += (conditions[key]) ? 1 : 0;

			score *= conditions_met;
		}
		else
			score = 0;

		if (score > 100)
			score = 100;

		return score;
	};

	/*

	function check_repet(str) { //return biggest repetition
		var max_repet = 0;
		var buff = str[0]
		for (i = 1; i < str.length; i++) {
			if (buff == str[i])
				max_repet++;
		}

	}*/

	return ServicesUser;
});