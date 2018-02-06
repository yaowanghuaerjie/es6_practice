//对象扩展
//函数新增特性
    //简洁表示法  属性表达法  扩展运算法 Object新增方法

{
    //简洁表示法
    let o=1;
    let k=2;
    let es5={
        o:o,
        k:k
    };
    let es6={
        o,
        k
    };
    console.log(es5,es6);

    let es5_method={
        hello:function () {
            console.log('hello');
        }
    };
    let es6_method={
        hello(){
            console.log('hello');
        }
    };
    console.log(es5_method.hello(),es6_method.hello());
}
{
    //属性表达式
    let a='b';
    let es5_obj={
        a:'c',
        b:'c'
    };
    let es6_obj={
        [a]:'c'
    }
    console.log(es5_obj,es6_obj);
}
{
    //新增api
    console.log('字符串',Object.is('abc','abc'),'abc'==='abc');
    //数组是引用类型，引用地址不同
    console.log('数组',Object.is([],[]),[]===[]);

    console.log('拷贝',Object.assign({a:'a'},{b:'b'}));

    let test={k:123,o:456};
    for(let [key,value] of Object.entries(test)){
        console.log([key,value]);
    }
}

