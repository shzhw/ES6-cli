/**
 * Created by shizw on 2017/10/24.
 */
'use strict';
import gulp from 'gulp';
import gulpSequence from 'gulp-sequence';

gulp.task('build', gulpSequence('clean', 'css', 'pages', 'scripts', ['browser', 'serve']));