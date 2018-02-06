/**
 * Created by yiyun on 2018/2/4.
 */
//数组新增特性
//Array.from  Array.of copyWithin
//find/findIndex fill entries\keys\values
//includes

{
    let arr = Array.of(3, 4, 5, 89, 11);
    console.log('arr=' + arr, arr.length);
    //let arr1 = [3,4,5,89,11];
    //  console.log('arr1='+arr1,arr1.length);
    let empty = Array.of();
    console.log('empty=' + empty);
}

{
    let p = document.querySelectorAll('p');
    let pArr = Array.from(p);
    pArr.forEach(function (item) {
        //item.textContent获取文本节点
        console.log(item.textContent);
    });
    console.log(Array.from([1, 2, 5]), function (item) {
        return item * 2;
    })
}

{
    console.log('fill-7', [1, 'a', undefined].fill(7));
    console.log('fill,pos', [1, 'a', 'b', 'c', 'd'].fill(7, 1, 3));
}
{
    for (let index of['1', 'c', 'ks'].keys()) {
        console.log('keys', index);
    }
    //有兼容性问题
    for (let value of ['1', 'c', 'ks'].values()) {
        console.log('values', value);
    }
    for (let [index, value] of ['1', 'c', 'ks'].entries()) {
        console.log('values', index, value);
    }
}
{
    //不怎么常用 从0位开始替换，将第3位替换为到0位
    console.log([1, 3, 4, 5, 6, 8, 645].copyWithin(0, 3, 4));
}
{
    //找出第一个满足条件的后不再往后找
    console.log([1, 2, 3, 4, 4, 5, 6, 8].find(function (item) {
        return item>3;
    }));
//找出第一个满足条件的下标后不再往后找
    console.log([1, 2, 3, 4, 4, 5, 6, 8].findIndex(function (item) {
        return item>3;
    }));
}
{
    //数组中是否包含某个元素
    console.log('number',[1,3,NaN].includes(1));
    console.log('number',[1,3,NaN].includes(NaN));
}