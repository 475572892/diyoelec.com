var gulp = require('gulp')
var uglify = require('gulp-uglify')
var concat = require('gulp-concat')
var cssnano = require('gulp-cssnano')
var less = require('gulp-less')
var htmlmin = require('gulp-htmlmin')
// 浏览器同步
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

gulp.task('js', function () {
  gulp
      .src('./src/js/*.js')
      .pipe(concat('all.min.js'))
      .pipe(uglify())
      .pipe(gulp.dest('./dist/js'))
      .pipe(reload({ stream: true }))
})

gulp.task('less', function () {
  gulp
      .src('./src/css/*.less')
      .pipe(less())
      .pipe(cssnano())
      .pipe(gulp.dest('./src/css'))
      .pipe(reload({ stream: true }))
})

gulp.task('css', function () {
  gulp
      .src('./src/css/*.css')
      .pipe(concat('all.min.css'))
      .pipe(cssnano())
      .pipe(gulp.dest('./dist/css'))
      .pipe(reload({ stream: true }));
})

gulp.task('html', function () {
  gulp
      .src('./src/*.html')
      .pipe(htmlmin({
        collapseWhitespace: true,
        minifyCSS: true,
        minifyJS: true,
        removeComments: true
      }))
      .pipe(gulp.dest('./dist'))
      .pipe(reload({ stream: true }));
})

gulp.task('img', function() {
  gulp
      .src('./src/images/*.*')
      .pipe( gulp.dest('./dist/images') )
})

gulp.task('bs', function () {
  browserSync.init({
    server: {
      baseDir: "./dist"
    }
  });
});

gulp.task('watch', function() {
  gulp.watch('./src/js/*.js', ['js'])
  gulp.watch('./src/css/*.css', ['css'])
  // gulp.watch('./src/css/less/*.less', ['less'])
  gulp.watch('./src/*.html', ['html'])
})


gulp.task('default', ['js', 'css', 'less', 'html', 'img', 'bs', 'watch'], function() {
  console.log('gulp 任务执行中....')
})
