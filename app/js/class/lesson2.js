/**
 * Created by yiyun on 2018/1/31.
 */
/**
 * 结构赋值
 * 什么是解构赋值
 * 分类：
 *  数组解构赋值
 *  对象解构赋值
 *  字符串解构赋值
 *  布尔值解构赋值
 *  函数参数解构赋值
 *  数值解构赋值
 */
{
    let a,b,rest;
    [a,b]=[1,2];
    console.log(a,b);
}

{
    let a,b,rest;
    [a,b,...rest]=[1,2,3,4,5,6,7];
    console.log(a,b,rest);
}
//对象解构赋值
{
    let a,b;
    ({a,b}={a:1,b:2});
    console.log(a,b);
}

{
    let a,b,c,rest;
    //给c设置默认值
    //[a,b,c=3]=[1,2];
    [a,b,c]=[1,2];
    console.log(a,b,c);
}
//实现变量交换
{
    let a=1;
    let b=2;
    [a,b]=[b,a];
    console.log(a,b);
}
{
    function f() {
        return [1,2];
    }
    let a,b;
    [a,b]=f();
    console.log(a,b);
}
{
    function f() {
        return [1,2,3,4,5,6];
    }
    let a,b,c;
    [a,,,,b] = f();
    console.log(a,b);
}
//不能确定函数返回值有多少个，只关注第一个
{
    function f() {
        return [1,2,3,4,5,6];
    }
    let a,b,c;
    [a,...b] = f();
    console.log(a,b);
}

//对象解构赋值
{
    let o = {p:43,q:true}
    let {p,q}=o;
    console.log(p,q);
}
{
    let {a=10,b=3}={a:3};
    console.log(a,b);
}

{
    let metaData = {
        title:'abc',
        test:[{
            title:'test',
            desc:'description'
        }]
    }
    let {title:esTitle,test:[{title:cnTitle}]}=metaData;
    console.log(esTitle,cnTitle);
}