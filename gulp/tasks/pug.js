import gulp from 'gulp';
import pug from 'gulp-pug';
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import browserSync from 'browser-sync';

export const pugTask = (isBuild, browserSyncInstance) => {
	return gulp.src('src/pug/pages/*.pug')
		.pipe(plumber(notify.onError({
			title: 'Pug',
			message: 'Error: <%= error.message %>',
		})))
		.pipe(pug({
			pretty: !isBuild,
			basedir: 'src/pug',
		}))
		.pipe(gulp.dest('dist'))
		.pipe(browserSyncInstance.stream());
};
