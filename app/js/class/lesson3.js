/**
 * Created by yiyun on 2018/1/31.
 */
/*
 *正则修饰符
 */
//  用\d可以匹配一个数字，\w可以匹配一个字母或数字
//  .可以匹配任意字符
//  \d{3}表示匹配3个数字，例如'010'；
//  \s可以匹配一个空格（也包括Tab等空白符），所以\s+表示至少有一个空格，例如匹配' '，'\t\t'等；
//  \d{3,8}表示3-8个数字，例如'1234567'。
//  在正则表达式中，用*表示任意个字符（包括0个），用+表示至少一个字符，用?表示0个或1个字符，用{n}表示n个字符，用{n,m}表示n-m个字符
//  如果要匹配'010-12345'这样的号码呢？由于'-'是特殊字符，在正则表达式中，要用'\'转义，所以，上面的正则是\d{3}\-\d{3,8}

/***
 * [0-9a-zA-Z\_]可以匹配一个数字、字母或者下划线；

   [0-9a-zA-Z\_]+可以匹配至少由一个数字、字母或者下划线组成的字符串，比如'a100'，'0_Z'，'js2015'等等；

   [a-zA-Z\_\$][0-9a-zA-Z\_\$]*可以匹配由字母或下划线、$开头，后接任意个由一个数字、字母或者下划线、$组成的字符串，也就是JavaScript允许的变量名；

   [a-zA-Z\_\$][0-9a-zA-Z\_\$]{0, 19}更精确地限制了变量的长度是1-20个字符（前面1个字符+后面最多19个字符）。
 */
//es5中的写法
{
    let regex = new RegExp('xyz', 'i');
    let regex1 = new RegExp(/xyz/i);
    console.log(regex.test('xyz123'), regex1.test('xyz123'));
}
//es6中
{
    //第二个正则修饰符i会覆盖ig
    let regex = new RegExp(/xyz/ig, 'i');
    //获取当前使用的正则修饰符
    console.log(regex.flags);
}
//g修饰符和y修饰符
{
    let s = 'bbb_bb_b';
    let a1 = /b+/g;
    let a2 = /b+/y;
    console.log('one',a1.exec(s),a2.exec(s));
    console.log('two',a1.exec(s),a2.exec(s));
    console.log('three',a1.exec(s),a2.exec(s));

    //判断是否使用了y修饰符
    console.log(a1.sticky,a2.sticky);
}
//u修饰符
{
    console.log('u-1',/^\uD83D/.test('\uD83D\uDc2A'));
    console.log('u-1',/^\uD83D/u.test('\uD83D\uDc2A'));


    console.log(/\u{61}/.test('a'));
    console.log(/\u{61}/u.test('a'));


    console.log(`\u{20BB7}`);

    //如果字符串是大于两个字节，一定要加u
    let s = '𠮷';
    console.log('u',/^.$/.test(s));
    console.log('u-2',/^.$/u.test(s));
    console.log('test',/𠮷{2}/.test('𠮷𠮷'));
    console.log('test',/𠮷{2}/u.test('𠮷𠮷'));
}