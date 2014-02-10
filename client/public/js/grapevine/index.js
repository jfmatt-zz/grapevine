define(function (require, exports, module) {

	var angular = require('angular')
	require("ngRoute")

	return angular.module(
		module.id,
		[
			"ngRoute",
			require("./controllers/index").name
		])
		.config(function ($routeProvider) {
			$routeProvider
				.when('/', {
					controller: require("./controllers/main").name,
					template: require("text!./templates/main.html")
				})
				.when('/login', {
					controller: require("./controllers/login").name,
					template: require("text!./templates/main.html")
				})
				.when('/dashboard', {
					controller: require("./controllers/dashboard").name,
					template: require("text!./templates/main.html")
				})
				.otherwise('/')
		})
})
