/**
 * Created by yiyun on 2018/2/6.
 */
//Decorator

//1.修饰器是一个函数  2.是修改类的行为 3.在类的范畴中用
{
    let readonly = function (target, name,descriptor) {
        descriptor.writable=false;
        return descriptor;
    };
    class Test{
        @readonly
        time(){
            return '2017-03-11'
        }
    }
    let test = new Test();
    console.log(test.time());
    /*test.time=function () {
        console.log('reset time');
    }*/
    console.log(test.time());
}

{
    let typename = function (target,name,descriptor) {
        target.myname='hello';
    }
    @typename
    class Test{

    }
    console.log('类修饰符',Test.myname);
//第三方库修饰器的js库，core-decorators

}

{
    let log =(type)=>{
        return function (target,name,descriptor) {
            let src_method = descriptor.value;
            descriptor.value =(...arg)=>{
                src_method.apply(target,arg);
                console.info(`log ${type}`);
            }
        }
    };
    class AD{
        @log('show')
        show(){
            console.info('ad is show');
        }
        @log('click')
        click(){
            console.info('ad is click');
        }
    }
    let ad = new AD();
    ad.show();
    ad.click();
}