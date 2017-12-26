/**
 * Created by shizw on 2017/10/23.
 */
'use strict';
import gulp from 'gulp';
import gulpif from 'gulp-if';
import concat from 'gulp-concat';
import webpack from 'webpack';
import gulpWebpack from 'webpack-stream';
import named from 'vinyl-named'; // 对文件重命名 做标识
import livereload from 'gulp-livereload';
import plumber from 'gulp-plumber'; // 处理文件信息流
import rename from 'gulp-rename';
import uglify from 'gulp-uglify';
import {log, colors} from 'gulp-util'; // 输出到命令行
import args from './util/args';

gulp.task('scripts', () => {
  return gulp.src(['app/js/index.js'])
      .pipe(plumber({
        errorHandle: function () {

        }
      }))
      .pipe(named())
      .pipe(gulpWebpack({
        module: {
          loaders: [{
            test: /\.js$/,
            loader: 'babel-loader'
          }]
        }
      }), null, (err, stats) => {
        log(`Finished '${colors.cyan('scripts')}`, stats.toString({
          chunks: false
        }))
      })
      .pipe(gulp.dest('server/public/js'))
      .pipe(rename({
        basename: 'cp',
        extname: '.min.js'
      }))
      .pipe(uglify({
        compress: {
          properties: false
        },
        output: {
          'quote_keys': true
        }
      }))
      .pipe(gulp.dest('server/public/js'))
      .pipe(gulpif(args.watch, livereload()))
});

