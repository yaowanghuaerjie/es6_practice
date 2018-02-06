/**
 * Created by yiyun on 2018/2/4.
 */
//函数扩展
// 函数新增特性
// 参数默认值 rest参数  扩展运算符
// 箭头函数 this绑定 尾调用


// 函数新增特性
{
    function test(x,y='world') {
        console.log('默认值',x,y);
    }
    test('hello');
    test('hello','kill');
}

{
    let x = 'test';
    function test2(c,y=x) {
        console.log('作用域',x,y);
    }
    function test3(x,y=x) {
        console.log('作用域',x,y);
    }
    test2('kill');
    test3('kill');
    test2();
    test3();
}

{
    function test3(...arg) {
        for(let v of arg){
            console.log('rest',v);
        }
    }
    test3(1,2,3,4,5,6,'a');
}


{
    console.log(...[1,3,4]);
    console.log('a',...[1,3,4]);
}

{
    let arrow=v=>v*2;
    let arrow2  = ()=>5;
    console.log('arrow',arrow(3));
    console.log('arrow',arrow2());
}
//尾调用,解决函数嵌套问题
{
    function tail(x) {
        console.log('tail',x);
    }
    function fx(x) {
        return tail(x);
    }
    fx(123);
}
