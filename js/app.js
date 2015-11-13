
define([
	'underscore',
	'backbone',
	'router'], function(_, Backbone, AppRouter){

		var initialize = function(){

			// var cars = new Cars([
			// 	new Car({ 'title': 'Car1', 'regNum': '1234', 'color': 'red' }),
			// 	new Car({ 'title': 'Car2', 'regNum': '1434' }),
			// 	new Car({ 'title': 'Car3', 'regNum': '1564' }),
			// 	new Car({ 'title': 'Car4', 'regNum': '1247' }),
			// ]);

			// var boats = new Boats([
			// 	new Boat({ 'title': 'Boat1', 'regNum': 'b1234', 'color' : 'blue' }),
			// 	new Boat({ 'title': 'Boat2', 'regNum': 'b1434' }),
			// 	new Boat({ 'title': 'Boat3', 'regNum': 'b1564' }),
			// 	new Boat({ 'title': 'Boat4', 'regNum': 'b1247' }),
			// ]);


			// var router = new AppRouter();
			// Backbone.history.start();

			// var navView = new NavView({ el: "#nav" });
			AppRouter.initialize();

		}

		return {
			initialize: initialize
		};

});