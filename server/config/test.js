var path = require('path'),

    buildDir = path.join(__dirname, '..', '..', 'client', 'build')

module.exports = {
	port: 3030,
	views: path.join(buildDir, 'views'),
	staticDir: path.join(buildDir, 'public')
}
