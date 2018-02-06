/**
 * Created by yiyun on 2018/2/4.
 */
//Map与Array的对比
//Set与Array对比
//总结：优先使用map，如何要求数据唯一，优先考虑set，放弃array和obj
{
    //数据结构的横向对比，增、删、改、查
    let map=new Map();
    let array = [];
    //增
    map.set('t',1);
    array.push({t:1});

    console.log('map-array',map,array);

    //查
    let map_exist = map.has('t');
    let arr_exist = array.find(item=>item.t);
    console.log('map-array',map_exist,arr_exist);

    //改
    map.set('t',2);
    array.forEach(item=>item.t?item.t=2:'');
    console.log('map-array-modify',map,array);

    //删
    map.delete('t');
    let index = array.findIndex(item=>item.t);
    array.splice(index,1);
    console.log('map-array-delete',map,array);
}

//set和array
{
    let set = new Set();
    let array = [];
    //增
    set.add({t:1});
    array.push({t:1});

    console.log('set-array',set,array);

    //查
    let set_exist = set.has({t:'1'});
    let array_exist =array.find(item=>item.t);
    console.log('set-array',set_exist,array_exist);

    //改
    set.forEach(item=>item.t?item.t=2:'');
    array.forEach(item=>item.t?item.t=2:'');
    console.log('set-array-modify',set,array);

    //删除
    set.forEach(item=>item.t?set.delete(item):'');
    let index = array.findIndex(item=>item.t);
    array.splice(index,1);
    console.log('set-array-empey',set,array);

}

//Map 与Object对比
//set 与Object对比

{
    let item = {t:1};
    let map = new Map();
    let set = new Set();
    let obj = {};
    map.set('t',1);
    set.add(item);
    obj['t']=1;
    console.log('map-set-obj',map,set,obj);
//查
    console.info({
        map_exist:map.has('t'),
        set_exist:set.has(item),
        obj_exist:'t' in obj
    })

    //改
    map.set('t',2);
    item.t=2;
    obj['t']=2;
    console.log('map-set-obj',map,set,obj);

    //删除
    map.delete('t');
    set.delete(item);
    delete obj['t'];
    console.log('map-set-obj',map,set,obj);
}
