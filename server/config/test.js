var path = require('path'),

    buildDir = path.join(__dirname, '..', '..', 'client', 'build')

module.exports = {
	port: 3030,
	DATABASE_URL: "Must come from env",

	views: path.join(buildDir, 'views'),
	staticDir: path.join(buildDir, 'public')
}
