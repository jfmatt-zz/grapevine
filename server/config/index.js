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

_.each(config.global, function (val, key) {
	config.global[key] = process.env[key] || config.global[key]
})
