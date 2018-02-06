/**
 * Created by yiyun on 2018/2/5.
 */
//Promise 是异步编程的一种解决方案
    //Promise的作用
    //Promise的基本作用


{
    let ajax = function (callback) {
        console.log('执行');
        setTimeout(function () {
            callback&&callback.call()
        },1000);
    };
    ajax(function () {
        console.log('timeout1');
    });
}
{
    let ajax = function () {
        console.log('执行2');
        //resolve 执行下一步   reject中断下一步
        return new Promise(function (resolve,reject) {
            setTimeout(function () {
                resolve();
            },1000);
        });
    };
    ajax().then(function () {
        console.log('promise','timeout2');
    });
}
{
    let ajax = function () {
        console.log('执行3');
        //resolve 执行下一步   reject中断下一步
        return new Promise(function (resolve,reject) {
            setTimeout(function () {
                resolve();
            },1000);
        });
    };
    ajax().then(function () {
        return new Promise(function (resolve,reject) {
            setTimeout(function () {
                resolve();
            },1000);
        });
    }).then(function () {
        console.log('timeout3');
    })
}


{
    let ajax = function (num) {
        console.log('执行4');
        return new Promise(function (resolve,reject) {
            if(num>5){
                resolve();
            }else{
                throw new Error('出错了');
            }
        });
    };
    ajax(6).then(function () {
        console.log('log',6);
    }).catch(function (err) {
        console.log('catch',err);
    });

    ajax(3).then(function () {
        console.log('log',3);
    }).catch(function (err) {
        console.log('catch',err);
    });
}

{
    //所有图片加载完在加载页面
    function loadImg(src) {
        return new Promise((resolve,reject)=>{
            let img = document.createElement('img');
            img.src=src;
            img.onload=function () {
                resolve(img);
            };
            img.onerror=function (err) {
                reject(err);
            };
        })
    }
    function showImgs(imgs) {
        imgs.forEach(function (img) {
            console.log('img',img);
            document.body.appendChild(img);
        })
    }
    Promise.all([
        loadImg('http://dynamic-image.yesky.com/740x-/uploadImages/2015/131/33/D472XQ25C7H2.jpg'),
        loadImg('http://dynamic-image.yesky.com/740x-/uploadImages/2015/131/33/D472XQ25C7H2.jpg1'),
        loadImg('http://dynamic-image.yesky.com/740x-/uploadImages/2015/131/33/D472XQ25C7H2.jpg1'),
        loadImg('http://dynamic-image.yesky.com/740x-/uploadImages/2015/131/33/D472XQ25C7H2.jpg1')
    ]).then(showImgs);
}

{
    function loadImg(src) {
        return new Promise((resolve,reject)=>{
            let img = document.createElement('img');
            img.src=src;
            img.onload=function () {
                resolve(img);
            };
            img.onerror=function (err) {
                reject(err);
            };
        })
    }
    function showImgs(img) {
        let p=document.createElement('p');
        p.appendChild(img);
        document.body.appendChild(p);
    }
    Promise.race([
        loadImg('http://dynamic-image.yesky.com/740x-/uploadImages/2015/131/33/D472XQ25C7H2.jpg')
    ]).then(showImgs);
}