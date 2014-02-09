var path = require('path'),

    gulp = require('gulp'),
    rjs = require('gulp-requirejs'),
    ngmin = require('ngmin').annotate,
    Q = require('q'),

    replaceRequire = require('gulp-requirejs-replace-script'),
    gulpStream = require('gulp-stream'),
    gulpClean = require('gulp-clean'),

    srcDir = 'client/',
    buildDir = 'client/build/',
    jsDir = 'public/js/',
    viewDir = 'views/'

gulp.task('clean', function () {
	return gulp.src(buildDir, {read: false})
		.pipe(gulpClean())
})

gulp.task('requirejs', function () {
	return rjs({
		baseUrl: srcDir + jsDir,

		mainConfigFile: srcDir + jsDir + 'main.js',

		name: 'almond',
		insertRequire: ['main'],
		include: ['main'],
		out: 'main.js',

		wrap: true,

		onBuildRead: function (name, path, contents) {
			return ngmin(contents)
		}
	})
	.pipe(gulp.dest(buildDir + jsDir))
})

gulp.task('index', function () {
	return gulp.src(srcDir + viewDir + '*.html')
		.pipe(replaceRequire())
		.pipe(gulp.dest(buildDir + viewDir))
})

gulp.task('build', ['requirejs', 'index'])

gulp.task('default', ['clean'], function () {
	gulp.start('build')
})
