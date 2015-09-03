require.config({
	paths:{
		'jquery':'lib/jquery/jquery-1.11.3.min',
		'underscore':'lib/underscore/underscore-min',
		'marionette':'lib/marionette/backbone.marionette.min',
		'backbone':'lib/backbone/backbone-min',
		'leaflet':'lib/leaflet/leaflet',
		'd3':'lib/d3/d3.min',
		'text':'lib/require/text',

		'vent':'app/vent',

		'bootstrap-dropdown':'lib/bootstrap/js/dropdown',
		'bootstrap-switch':'lib/bootstrap-switch/bootstrap-switch.min',
		'bootstrap-multiselect':'lib/bootstrap-multiselect/bootstrap-multiselect',
		'bootstrap':'lib/bootstrap/dist/js/bootstrap.min',
		'config':'config'
	},
	shim:{
		'leaflet':{
			exports:'L'
		},
		'bootstrap-switch':{
			deps:['jquery']
		},
		'bootstrap-dropdown':{
			deps:['jquery']
		},
		'bootstrap-multiselect':{
			deps:['jquery']
		}
	}
});

require([
		'jquery',
		'underscore',
		'marionette',
		'backbone',
		'leaflet',
		'd3',

		'app/app',
		'app/ui'
	],function(
		$,
		_,
		Marionette,
		Backbone,
		L,
		d3,

		app,
		ui
	){
		app.start();
	})