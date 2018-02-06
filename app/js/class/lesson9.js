/**
 * Created by yiyun on 2018/2/4.
 */
//Symbol
  //Symbol的概念
  //Symbol的作用

{
    //声明
    let a1=Symbol();
    let a2=Symbol();
    //Symbol声明的变量是独一无二的
    console.log(a1===a2);

    let a3 = Symbol.for('a3');
    let a4 = Symbol.for('a3');
    console.log(a3===a4);
}

{
    let a1=Symbol.for('abc');
    let obj={
        [a1]:'123',
        'abc':345,
        'c':456
    };
    console.log("obj",obj);

    for(let [index,value] of Object.entries(obj)){
        console.log('let of',index,value);
    }

     Object.getOwnPropertySymbols(obj).forEach(function (item) {
         console.log(obj[item]);
     })

    Reflect.ownKeys(obj).forEach(function (item) {
        console.log('ownkeys',item,obj[item]);
    })
}

//技术胖博客代码
{
    let g = Symbol('jspang');
    console.log(g);
    console.log(g.toString());
}

{
    let jspang = Symbol();
    let obj={
        [jspang]:'技术胖'
    };
    console.log(obj[jspang]);
    obj[jspang]='web';
    console.log(obj[jspang]);
}

{
    let obj={name:'jspang',skill:'web',age:18};

    for (let item in obj){
        console.log(obj[item]);
    }
}
{
    let obj={name:'jspang',skill:'web'};
    let age=Symbol();
    obj[age]=18;
    for (let item in obj){
        console.log(obj[item]);
    }
    console.log(obj);
}