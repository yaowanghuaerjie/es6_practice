/**
 * Created by yiyun on 2018/1/31.
 */
/**
 * let和const：
 * let作用域概念
 */
{
    function test() {
         for(let i=1;i<3;i++){
         //块作用域
             console.log(i);
         }
         console.log(i);
        //let变量不可以重复申明
        // let a = 1;
        // let a = 2;
    }
    test();
}
{
    function last() {
        //const申明常量
        const PI=3.1415926;
        //PI=3.215544;
        //const数值不可以修改，对象地址指针不变，但是对象内容可以变
        const k={
            a:1
        };
        k.b=3;
        console.log(PI,k);
    }
    last();
}


