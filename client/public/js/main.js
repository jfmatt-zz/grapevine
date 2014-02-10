require.config({
	paths: {
		"text": "../bower/requirejs-text/text",
		"angular": "../bower/angular/angular",
		"almond": "../bower/almond/almond",
		"ngRoute": "../bower/angular-route/angular-route.min"
	},

	shim: {
		"angular": {
			exports: "angular"
		},
		"ngRoute": {
			deps: ["angular"],
			exports: "angular"
		}
	}
})

//window.name = "NG_DEFER_BOOTSTRAP!"
define(function (require, exports, module) {
	var angular = require("angular"),
	    appName = require("./grapevine/index").name

	angular.element(document).ready(function () {
		angular.bootstrap(
			document,
				[
					appName
				]
			)
	})
})
