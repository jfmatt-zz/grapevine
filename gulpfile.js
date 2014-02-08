var path = require('path'),

    gulp = require('gulp'),
    rjs = require('gulp-requirejs'),
    ngmin = require('ngmin').annotate,

    replaceRequire = require('gulp-requirejs-replace-script'),
    gulpStream = require('gulp-stream'),

    srcDir = 'client/src',
    buildDir = 'client/build'

gulp.task('requirejs', function () {
	return rjs({
		baseUrl: srcDir,

		mainConfigFile: srcDir +  '/main.js',

		name: 'almond',
		insertRequire: ['main'],
		include: ['main'],
		out: 'main.js',

		wrap: true,

		onBuildRead: function (name, path, contents) {
			return ngmin(contents)
		}
	})
	.pipe(gulp.dest(buildDir))
})

gulp.task('index', function () {
	return gulp.src(srcDir + '/index.html')
		.pipe(gulpStream())	
		.pipe(replaceRequire())
		.pipe(gulp.dest(buildDir))
})

gulp.task('default', ['requirejs', 'index'], function () {

})
