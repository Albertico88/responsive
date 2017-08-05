var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');


// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

  browserSync.init({
    server: "./"
  });

  gulp.watch("src/scss/*scss", ['sass']);
  gulp.watch("./*html").on('change', browserSync.reload);
});


// Compile Sass into css & auto inject into browsers.
gulp.task('sass', function() {
  return gulp.src("src/scss/*scss")
    .pipe(sass())
    .pipe(gulp.dest("src/css"))
    .pipe(browserSync.stream());
});


// Default task
gulp.task('default', ['serve', 'sass']);
