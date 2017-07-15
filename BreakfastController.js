angular.module('MainModule').controller('BreakfastController', ['$scope', '$http', function($scope, $http){
		$scope.food = "Oatmeal";
		$scope.mealTypes = [
		{
			"name": "Oatmeal",
			"description": "Oatmeal is a quick, healthy breakfast that's good for your cholesterol.",
			"img": "oatmeal.jpg"
		},
		{
			"name": "Eggs",
			"description": "Eggs are a very good source of inexpensive, high quality protein.",
			"img": "egg.jpg"
		},
		{
			"name": "Yogurt",
			"description": "Yogurt is high in protein and has many other nutrients like calcium, vitamin B-2, vitimain B-12, potassium and magnessium",
			"img": "yogurt.jpg"
		},
		{
			"name": "Smoothie",
			"description": "Fruit smoothies provide you with essential vitamins and minerals. ",
			"img": "smoothie.jpg"
		},

		];

		$scope.oatmealTypes = [
			{
				"name": "Supreme Steel Cut",
				"description": "Steel cut oatmeal boiled in almond milk with cinnamon and honey topped off with banana, blueberries, and honey roasted peanuts",
				"img": "oatmeal/steel-cut-supreme.jpg",
				"imgSrc": "Masood Mawlavizada",
				"makeTime": "15",
				"avgCost": "2",
				"ingredients": ["Steel cut oats (1/4 cup)", "Almond Milk (1 cup)", "Cinnamon (1 dash)", "Honey (1 tbsp)", "Banana (1/2)", "Blueberries (1/4 cup)", "Honey roasted peanuts (1/8 cup)"],
				"calories": "350",
				"GIcontent": "Low",
				"carb": "30",
				"cookLink": "www.masood.com"
			}
		];
		$scope.eggTypes = [
			{
				"name": "Scrambled Heaven",
				"description": "Scrambled Eggs with bell peppers, mushrooms, onions and sides of potatoes and toast",
				"img": "eggs/scrambled.jpg",
				"imgSrc": "Masood Mawlavizada",
				"makeTime": "20",
				"avgCost": "2",
				"ingredients": ["Steel cut oats (1/4 cup)", "Almond Milk (1 cup)", "Cinnamon (1 dash)", "Honey (1 tbsp)", "Banana (1/2)", "Blueberries (1/4 cup)", "Honey roasted peanuts (1/8 cup)"],
				"calories": "350",
				"GIcontent": "Low",
				"carb": "30",
				"cookLink": "www.masood.com"
			}
		];
		$scope.yogurtTypes = [
			{
				"name": "Yo Yo Yogurt",
				"description": "Greek yogurt with granola, berries, apples, and honey topped off with a dash of cinnamon",
				"img": "yogurt/parfait.jpg",
				"imgSrc": "Masood Mawlavizada",
				"makeTime": "5",
				"avgCost": "4",
				"ingredients": ["Steel cut oats (1/4 cup)", "Almond Milk (1 cup)", "Cinnamon (1 dash)", "Honey (1 tbsp)", "Banana (1/2)", "Blueberries (1/4 cup)", "Honey roasted peanuts (1/8 cup)"],
				"calories": "350",
				"GIcontent": "Low",
				"carb": "30",
				"cookLink": "www.masood.com"
			}
		];
		$scope.smoothieTypes = [
			{
				"name": "Super Smoothie",
				"description": "Icy fruit smoothie used as a base topped with granola, berries, and any other fruit you can find",
				"img": "smoothie/bowl.jpg",
				"imgSrc": "Masood Mawlavizada",
				"makeTime": "5",
				"avgCost": "4",
				"ingredients": ["Steel cut oats (1/4 cup)", "Almond Milk (1 cup)", "Cinnamon (1 dash)", "Honey (1 tbsp)", "Banana (1/2)", "Blueberries (1/4 cup)", "Honey roasted peanuts (1/8 cup)"],
				"calories": "350",
				"GIcontent": "Low",
				"carb": "30",
				"cookLink": "www.masood.com"
			}
		];
		// $scope.eggTypes [
		// 	{
		// 		"name": "",
		// 		"description": "",
		// 		"img": "",
		// 		"img-src": "",
		// 		"make-time": "",
		// 		"avg-cost": "",
		// 		"ingredients": "",
		// 		"calories": "",
		// 		"GI-content": "",
		// 		"carb": "",
		// 		"how-to-cook-link": ""
		// 	},
		// 	{
		// 		"name": "",
		// 		"description": "",
		// 		"img": "",
		// 		"img-src": "",
		// 		"make-time": "",
		// 		"avg-cost": "",
		// 		"ingredients": "",
		// 		"calories": "",
		// 		"GI-content": "",
		// 		"carb": "",
		// 		"how-to-cook-link": ""
		// 	}
		// ];
		// $scope.yogurtTypes [
		// 	{
		// 		"name": "",
		// 		"description": "",
		// 		"img": "",
		// 		"img-src": "",
		// 		"make-time": "",
		// 		"avg-cost": "",
		// 		"ingredients": "",
		// 		"calories": "",
		// 		"GI-content": "",
		// 		"carb": "",
		// 		"how-to-cook-link": ""
		// 	},
		// 	{
		// 		"name": "",
		// 		"description": "",
		// 		"img": "",
		// 		"img-src": "",
		// 		"make-time": "",
		// 		"avg-cost": "",
		// 		"ingredients": "",
		// 		"calories": "",
		// 		"GI-content": "",
		// 		"carb": "",
		// 		"how-to-cook-link": ""
		// 	}
		// ];
		// $scope.smoothieTypes [
		// 	{
		// 		"name": "",
		// 		"description": "",
		// 		"img": "",
		// 		"img-src": "",
		// 		"make-time": "",
		// 		"avg-cost": "",
		// 		"ingredients": "",
		// 		"calories": "",
		// 		"GI-content": "",
		// 		"carb": "",
		// 		"how-to-cook-link": ""
		// 	},
		// 	{
		// 		"name": "",
		// 		"description": "",
		// 		"img": "",
		// 		"img-src": "",
		// 		"make-time": "",
		// 		"avg-cost": "",
		// 		"ingredients": "",
		// 		"calories": "",
		// 		"GI-content": "",
		// 		"carb": "",
		// 		"how-to-cook-link": ""
		// 	}
		// ];

		console.log("controller works");
		$scope.message = "Hello :) ";

		$scope.changeFoodOption = function(foodName){
			// $scope.food
			$scope.food = foodName;
			// console.log(k);
		}
	}]);