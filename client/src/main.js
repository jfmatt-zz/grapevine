require.config({
	paths: {
		"angular": "bower/angular/angular",
		"almond": "bower/almond/almond"
	},

	shim: {
		"angular": {
			exports: "angular"
		}
	}
})

window.name = "NG_DEFER_BOOTSTRAP!"
define(function (require, exports, module) {
	var angular = require("angular")

	angular.element(document).ready(function () {
		angular
			.bootstrap(document,
				[
					require("./grapevine/index").name
				]
			)
	})
		
})
