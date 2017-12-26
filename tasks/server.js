/**
 * Created by shizw on 2017/10/23.
 */
'use strict';
import gulp from 'gulp';
import gulpif from 'gulp-if';
import liveserver from 'gulp-live-server';
import args from './util/args';

gulp.task('serve', (cb) => {
  if (!args.watch) return cb();
  let server = liveserver.new(['--harmony', 'server/bin/www']);
  server.start();

  gulp.watch(['server/public/**/*.js', 'server/views/**/*.ejs'], (file) => {
    server.notify.apply(server, [file]); // 通知服务器file文件发生改变
  });

  gulp.watch(['server/routes/**/*.js', 'server/app.js'], () => {
    server.start.bind(server)(); // 重启服务器
  })
});