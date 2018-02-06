/**
 * Created by yiyun on 2018/1/30.
 */
import gulp from 'gulp';
//任务之间的关联关系和先后顺序
import gulpSequence from 'gulp-sequence';
//注意最后是一个数组
gulp.task('build',gulpSequence('clean','css','pages','scripts',['browser','serve']));