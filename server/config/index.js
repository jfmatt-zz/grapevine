var _ = require('lodash'),

    env = process.env.NODE_ENV || 'dev',
    config = module.exports = (function () {
	    try {
		    return require('./' + env)
	    } catch (e) {
		    return {}
	    }
    })()

config.env = env;

_.each(config, function (val, key) {
	config[key] = config[key] || process.env[key]
})
