/**
 * Created by yiyun on 2018/2/4.
 */
//数据结构
//Set的用法
//WeakSet的用法
//Map的用法
//WeakMap的用法


/***
 * Set和WeakSet的区别
 * 1.支持的数据类型不一样 WeakSet中的元素必须是对象
 * 2.WeakSet弱引用，不会跟垃圾回收机制挂钩 不会检测内部元素是否被回收
 *
 */
{
    let list = new Set();
    list.add(5);
    list.add(7);
    console.log('size',list.size);
}
{
    let arr = [1,2,3,4,5];
    let list = new Set(arr);
    console.log('size',list.size);
}

{
    let list = new Set();
    list.add(1);
    list.add(2);
    list.add(1);
    console.log('list',list.size);

    let arr = [1,2,3,1,2];
    let list2 = new Set(arr);
    console.log('unique',list2.size);

    let arr1 = [1,2,3,1,'2'];
    let list3 = new Set(arr1);
    console.log('unique',list3.size);
}

{
    let arr = ['add','delete','clear','has'];
    let list = new Set(arr);

    console.log('clear',list.clear(),list);
    list.add('add');
    list.add('clear');
    list.add('delete');
    list.add('has');
    list.add('add1');
    console.log('add',list.add('add'),list);
    console.log('has',list.has('add'));
    console.log('delete',list.delete('add'),list);
    console.log('add',list.add('add'),list);

    for (let key of list.keys()){
        console.log('keys',key);
    }

    for (let value of list.values()){
        console.log('value',value);
    }

    for (let [key,value] of list.entries()){
        console.log('entries',key,value);
    }


    list.forEach(function (item) {
        console.log(item);
    })
}


//weakSet
{
    let weakList = new WeakSet();
    let arg={};
    weakList.add(arg);
    //没有clear，没有size方法，不能遍历
    console.log(weakList);
}

//map
{
    let map = new Map();
    let arr=['123'];
    //添加数据用set
    map.set(arr,456);
    console.log(map);
    console.log('map',map,map.get(arr));
}
{
    let map = new Map([['a',123],['b',345]]);
    console.log('map args',map,map.size);
    console.log('delete',map.delete('a'),map);
    console.log('map args',map.clear(),map);
}


//weakMap 和 map的关系与WeakSet和Set的关系差不多，用法也差不多
{
    let weakMap = new WeakMap();
    let o =[];
    weakMap.set(o,123);
    console.log(weakMap.get(o));
}