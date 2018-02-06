/**
 * Created by yiyun on 2018/1/30.
 */
import gulp from 'gulp';
//gulp 做if判断
import gulpif from 'gulp-if';
//热更新
import livereload from 'gulp-livereload';
//命令行参数解析
import args from './util/args';

gulp.task('css',()=>{
    return gulp.src('app/**/*.css')
        .pipe(gulp.dest('server/public'))
});