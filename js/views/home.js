
define([
	'jquery',
	'underscore',
	'backbone'], function($, _, Backbone){

		var HomeView = Backbone.View.extend({

			render: function() {
				this.$el.html("This is the home page");

				return this;
			}

		});

		return HomeView;

});