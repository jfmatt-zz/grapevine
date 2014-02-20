var path = require('path'),

    srcDir = path.join(__dirname, '..', '..', 'client')

module.exports = {
	PORT: 3000,
	DATABASE_URL: "Must come from env",
	
	views: path.join(srcDir, 'views'),
	staticDir: path.join(srcDir, 'public')
}
