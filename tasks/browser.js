/**
 * Created by yiyun on 2018/1/30.
 */
import gulp from 'gulp';
import gulpif from 'gulp-if'
import gutil from 'gulp-util'
import args from './util/args'

gulp.task('browser',(cb)=>{
    if(!args.watch) return cb;
    //将三个任务关联起来了
    gulp.watch('app/**/*.js',['scripts']);
    gulp.watch('app/**/*.ejs',['pages']);
    gulp.watch('app/**/*.css',['css']);
});