/**
 * Created by shizw on 2017/10/24.
 */
'use strict';
import gulp from 'gulp';
import gulpif from 'gulp-if';
import gutil from 'gulp-util'; // 输出到命令行
import args from './util/args';

gulp.task('browser', (cb) => {
  if (!args.watch) return cb();
  gulp.watch('app/**/*.js', ['scripts']);
  gulp.watch('app/**/*.ejs', ['pages']);
  gulp.watch('app/**/*.css', ['css']);
});