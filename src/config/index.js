var _ = require('lodash'),

    env = env || process.env.NODE_ENV || 'dev',
    config = module.exports = require('./' + env)

_.each(config, function (val, key) {
	config[key] = config[key] || process.env[key]
})
