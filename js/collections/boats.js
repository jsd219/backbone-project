
define([
	'underscore',
	'backbone',
	'models/vehicle'], function(_, Backbone, Vehicle){
		
		var Boats = Backbone.Collection.extend({
			model: Vehicle.Boat,
		});

		return Boats;

});
