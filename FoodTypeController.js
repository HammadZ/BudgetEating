angular.module('MainModule').controller('FoodController', ['$scope', '$http', function($scope, $http){
		$scope.mealTypes = [
		{
			"name": "Breakfast",
			"description": "Most important meal of the day! Pay close attention to this meal",
			"img": "breakfast.jpg"
		},
		{
			"name": "Lunch",
			"description": "Get that energy push that will help you go through the rest of your day.",
			"img": "lunch.jpg"
		},
		{
			"name": "Dinner",
			"description": "Get some nutrients in your body before you head to sleep.",
			"img": "dinner.jpg"
		},
		{
			"name": "Snack",
			"description": "Nothing wrong with some extra fuel.",
			"img": "snack.jpg"
		},

		];
		console.log("controller works");
		$scope.message = "Hello :) ";

	}]);
