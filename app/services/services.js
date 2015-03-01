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
			score = check_repeat(password);

			for (var key in conditions)
				conditions_met += (conditions[key]) ? 1 : 0;

			score += conditions_met * 10; //bonus
		}
		else
			score = 0;

		if (score > 100)
			score = 100;

		return Math.round(score);
	};

	function check_repeat(str) { //Check the occurences in the password
		var occ_alpha = {};
		var new_score = 0;
		for (i = 0; i < 128; i++) //ASCII table
			occ_alpha[String.fromCharCode(i)] = 0;

		for (i = 0; i < str.length; i++) {
			occ_alpha[str[i]] += 1;
			new_score += 3.0 / occ_alpha[str[i]]; 
		}
		return new_score;
	}

	return ServicesUser;
});