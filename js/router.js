
define([
	'jquery',
	'underscore',
	'backbone',
	'views/home',
	'views/vehicles'], function($, _, Backbone, HomeView, VehiclesView ){

		var AppRouter = Backbone.Router.extend({
			routes: {
				"" : "viewHome",
				"cars" : "viewCars",
				"boats" : "viewBoats",
				"*other" : "defaultRoute"
			}
		});

		var initialize = function(){

			var router = new AppRouter();

			viewHome: function() {
				var view = new HomeView();
				this.loadView(view);
			},

			viewCars: function() {
				var view = new VehiclesView({ model: cars });
				this.loadView(view);
			},

			viewBoats: function() {
				var view = new VehiclesView({ model: boats });
				this.loadView(view);
			},

			defaultRoute: function() {

			},

			loadView: function(newView) {
				$("#container").html(newView.render().$el);
			}

			Backbone.history.start();
		};

		return {
			initialize: initialize
		};
});

