/**
 * Created by shizw on 2017/10/24.
 */
'use strict';
import gulp from 'gulp';
import del from 'del';
import args from './util/args';

gulp.task('clean', () => {
  return del('server/public', 'server/views');
});
