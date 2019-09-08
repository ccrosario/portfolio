var gulp = require('gulp'),
	sass = require('gulp-sass'),
	browserSync = require('browser-sync').create();

gulp.task('sass', function() {
		return gulp.src('../css/*.scss')
		    .pipe(sass())
		    .pipe(gulp.dest('../css'))
		    browserSync.reload()
	});

	gulp.task('browserSync', function() {
	  browserSync.init({
	    server: {
	      baseDir: '../'
	    },
	  });
	})

	gulp.task('watch', gulp.series(['sass', 'browserSync']), function() {
		gulp.watch('../css/*.scss', gulp.parallel('sass'));
	});

