define(function (require, exports, module) {
	var angular = require('angular')

	return angular.module(module.id, [])
		.controller(module.id, function ($scope) {
			$scope.title = "login page"
		})
})
