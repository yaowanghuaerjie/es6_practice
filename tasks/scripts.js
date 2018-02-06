/**
 * Created by yiyun on 2018/1/30.
 */
//构建脚本

import gulp from 'gulp';
//gulp 做if判断
import gulpif from 'gulp-if';
//gulp中在文件拼接
import concat from 'gulp-concat';
//webpack
import webpack from 'webpack';

import gulpWebpack from 'webpack-stream';
//文件重命名做标记
import named from 'vinyl-named';
//热更新
import livereload from 'gulp-livereload';
//处理文件信息流
import plumber from 'gulp-plumber';
//对文件重命名
import rename from 'gulp-rename';
//压缩js或者css
import uglify from 'gulp-uglify';
//命令行工具输出
import {log,colors} from 'gulp-util';
//命令行参数解析
import args from './util/args';
//创建一个任务
gulp.task('scripts',()=>{
    //打开这个文件
    return gulp.src(['app/js/index.js'])
        //处理错误
        .pipe(plumber({
            errorHandle:function () {

            }
        }))
        .pipe(named())
        .pipe(gulpWebpack({
            module:{
                loaders:[{
                    //使用babel处理js
                    test:/\.js$/,
                    loader:'babel-loader'
                }]
            }
        }),null,(err,status)=>{
            log(`Finished'${colors.cyan('scripts')})'`,status.toString({
                chunks:false
            }))
        })
        //将编译好的文件放置到指定路径，server中药拿到最新的js
        .pipe(gulp.dest('server/public/js'))
        //重命名文件
        .pipe(rename({
            basename:'cp',
            extname:'.min.js'
        }))
        //压缩文件
        .pipe(uglify({compress:{properties:false},output:{'quote_keys':true}}))
        //将压缩之后的文件放置到指定目录
        .pipe(gulp.dest('server/public/js'))
        .pipe(gulpif(args.watch,livereload()))
});