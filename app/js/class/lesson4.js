/**
 * Created by yiyun on 2018/2/1.
 */
//字符串
/**
 *字符串新增特性
 * Unicode表示法
 * 遍历接口
 * 模板字符串
 * 新增方法（10种）
 *
 * 需要安装补丁库  babel-polyfill,否则es6无法编译
 */
{
    console.log('a','\u0061');
    console.log('s','\u20BB7');
    console.log('s','\u{20BB7}');

}

{
    //每两个字节是一个长度
    //es5中
    let s = '𠮷';
    console.log('length',s.length);
    console.log('0',s.charAt(0));
    console.log('1',s.charAt(1));
    //charCodeAt 取了两个字节
    console.log('at0',s.charCodeAt(0));
    console.log('at1',s.charCodeAt(1));

    let s1='𠮷a';
    console.log('length',s1.length);

    console.log('code0',s1.codePointAt(0));
    console.log('code0',s1.codePointAt(0).toString(16));

    console.log('code1',s1.codePointAt(1));
    console.log('code1',s1.codePointAt(1).toString(16));

    console.log('code2',s1.codePointAt(2));
}
{
    console.log(String.fromCharCode('0x20bb7'));
    console.log(String.fromCodePoint('0x20bb7'));
}
{
    let str='\u{20bb7}abc';
    for(let i=0;i<str.length;i++){
        console.log('es5',str[i]);
    }

    for(let code of str){
        console.log('es6',code);
    }
}
{
    let str = "string";
    console.log("includes",str.includes('g'));
    console.log("start",str.includes('c'));
    console.log("end",str.includes('ng'));
}
//重复
{
    let str = 'abc';
    console.log(str.repeat(2));
}
//模板字符串
{
    let name = 'list';
    let info = 'hello world';
    let m =`i am ${name}.${info}`;
    console.log(m);
}

{
    //补白 参数返回长度必须满足padStart参数的第一个值，否则补足
    //常用于选日期
    console.log('1'.padStart(2,'0'));
    console.log('1'.padEnd(2,'0'));
}

//标签模板
{//两个作用：1.处理xss攻击，2多语言转换
   let user={
       name:'list',
       info:'hello world'
   };
   abc`i am ${user.name},${user.info}`;
   console.log(abc`i am ${user.name},${user.info}`);
    function abc(s,v1,v2) {
        console.log(s,v1,v2);
        return s+v1+v2;
    }
}

{
    console.log(String.raw`Hi\n${1+2}`);
    console.log(`Hi\n${1+2}`);
}