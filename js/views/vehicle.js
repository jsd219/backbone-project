
define([
	'jquery',
	'underscore',
	'backbone',
	'models/vehicle'], function($, _, Backbone, Vehicle){
		
		var VehicleView = Backbone.View.extend({

			tagName: "li",

			className: "vehicle",

			attributes: function() {
				return {
					'data-color' : this.model.get('color')
				};
			},

			render: function() {
				var template = _.template($("#vehiclesTemplate").html());
				var content = template(this.model.toJSON());
				
				this.$el.html(content);

				return this; 
			} 
		});

		return VehicleView;

});

