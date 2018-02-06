/**
 * Created by yiyun on 2018/1/30.
 */
import gulp from 'gulp';
//gulp 做if判断
import gulpif from 'gulp-if';
//热更新
import liveserver from 'gulp-live-server';
//命令行参数解析
import args from './util/args';

gulp.task('serve',(cb)=>{
    if(!args.watch)return cb();
    //在当前目录下，启动server
    var server = liveserver.new(['--harmony','server/bin/www']);
    server.start();

    gulp.watch(['server/public/**/*.js','server/views/**/*.ejs'],function (file) {
        server.notify.apply(server,[file]);
    });

    //监听需要重启服务的文件
    gulp.watch(['server/routes/**/*.js','server/app.js'],function () {
        server.start.bind(server)();
    })
});