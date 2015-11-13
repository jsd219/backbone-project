
define([
	'underscore',
	'backbone',
	'models/vehicle'], function(_, Backbone, Vehicle){
		
		var Cars = Backbone.Collection.extend({
			model: Vehicle.Car,
		});

		return Cars;
});

