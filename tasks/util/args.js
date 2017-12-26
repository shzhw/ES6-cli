/**
 * Created by shizw on 2017/10/23.
 */
'use strict';
import yargs from 'yargs'; // 命令行 参数

const args = yargs
    .option('production', {
      boolean: true,
      default: false,
      describe: 'min all scripts'
    })
    .option('watch', {
      boolean: true,
      default: false,
      describe: 'watch all file'
    })
    .option('verbose', {
      boolean: true,
      default: false,
      describe: 'log'
    })
    .option('sourcemaps', {
      describe: 'force the creation of sourcemaps'
    })
    .option('port', {
      string: true,
      default: 8080,
      describe: 'server port'
    })
    .argv;

export default args;