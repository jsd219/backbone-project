
define([
	'underscore',
	'backbone'], function(_, Backbone){
		
		var Vehicle = Backbone.Model.extend({
			idAttribute: "regNum",

			validate: function(attrs) {
				if(!attrs.regNum)
					return "Registration number required";
			}
		});

		var Car = Vehicle.extend({
			defaults: {
				color: "black"
			}
		});

		var Boat = Vehicle.extend({
			defaults: {
				color: "white"
			}
		});

		return Vehicle;
});