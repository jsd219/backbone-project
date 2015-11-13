
define([
	'jquery',
	'underscore',
	'backbone',
	'models/vehicle'], function($, _, Backbone, Vehicle){

		var VehiclesView = Backbone.View.extend({

			tagName: "ul",

			render: function() {
				var self = this;

				this.model.each(function(vehicle){
					var vehicleView = new VehicleView({ model: vehicle });
					self.$el.append(vehicleView.render().$el);
				});

				return this;
			} 
		});

		return VehiclesView;

});

