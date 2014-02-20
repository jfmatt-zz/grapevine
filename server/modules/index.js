var fs = require('fs'),

    express = require('express')

module.exports = function (app, io) {
	fs.readdir(__dirname, function (err, ms) {
		ms.forEach(function (m) {
			if (m.substring(0,8) === 'index.js')
				return

			var mod,
			    subapp = express(),
			    subio = io.of('/' + m)

			subapp.config = app.config[m] || {}
			subapp.config.global = app.config.global
			
			mod = require('./' + m)

			if (mod.init) {
				mod.init(subapp, subio)
				console.log("Done setup for module " + m)
			}
			if (mod.routes) {
				mod.routes(subapp, subio)
				app.use('/' + m, subapp)
				console.log("Routes loaded for " + m)
			}
		})
	})
}
