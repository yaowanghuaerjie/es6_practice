/**
 * Created by yiyun on 2018/1/30.
 */
import yargs from 'yargs';

const  args = yargs
    //区分线上还是开发环境
    .options('production',{
        boolean:true,
        default:false,
        describe:'min all scripts'
    })
    //控件监听文件变化
    .options('watch',{
        boolean:true,
        default:false,
        describe:'watch all scripts'
    })
    //详细输出命令行执行日志
    .options('verbose',{
        boolean:true,
        default:false,
        describe:'verbose all scripts'
    })
    //代码映射
    .options('sourcemaps',{
        describe:'force the creation of sroucemaps'
    })
    //端口
    .options('port',{
        string:true,
        default:8080,
        describe:'server port'
    })
    //输入的命令行内容以字符串作为解析
    .argv
export default args;

