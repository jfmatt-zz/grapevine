var pg = require('pg')

exports.init = function (app) {
	var dbUrl = app.config.global.DATABASE_URL
	pg.connect(dbUrl, function (err, client, done) {
		console.log("Connected to database "
		            + dbUrl.substring(dbUrl.lastIndexOf("/") + 1))
		done()
	})
}
