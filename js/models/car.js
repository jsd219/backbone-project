
define([
	'underscore',
	'backbone',
	'models/vehicle'], function(_, Backbone, Vehicle){
		
		var Car = Vehicle.extend({
			defaults: {
				color: "black"
			}
		});

		return Car;
});

