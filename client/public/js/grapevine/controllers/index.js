define(function (require, exports, module) {
	var angular = require("angular")

	return angular.module(
		module.id,
		[
			require("./main").name,
			require("./login").name,
			require("./dashboard").name
		])
})
