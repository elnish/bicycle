var gulp = require('gulp'),
    scss = require('gulp-sass');

gulp.task('scss', () => {
    return gulp.src('src/scss/style.scss')
        .pipe(scss())
        .pipe(gulp.dest('src/css'))
        .pipe(gulp.dest('app/css'))
});

gulp.task('html', () => {
    return gulp.src('src/index.html')
        .pipe(gulp.dest('app'))
});

gulp.task('watch', () => {
    gulp.watch('src/scss/*.scss', gulp.parallel('scss'));
    gulp.watch('src/index.html', gulp.parallel('html'));
});

gulp.task('default', gulp.parallel('scss', 'html', 'watch'));