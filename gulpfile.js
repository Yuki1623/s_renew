var gulp = require('gulp');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
var changed = require('gulp-changed');//20190401追加
var sourcemaps = require('gulp-sourcemaps');
var cmq = require('gulp-combine-media-queries');//@media
var runSequence = require('run-sequence');
var DEST = './css/';//20190401追加

//sass
gulp.task('sass',function(){
    return gulp.src('sass/*.scss')
    .pipe(sourcemaps.init())
    .pipe(plumber())
    .pipe(sass({style : 'expanded'}))
    .pipe(sourcemaps.write())
    .pipe(changed(DEST))
    .pipe(gulp.dest(DEST));
});
//media
gulp.task('cmq',['sass'], function () {
  return gulp.src('css/*.css')
    .pipe(cmq({
      log: false
    }))
    .pipe(gulp.dest('css'));
});
//監視
gulp.task('watch', function () {
    gulp.watch('sass/*.scss', ['cmq']);
});
gulp.task('default', function(callback) {
    runSequence('sass', 'cmq', callback);
});