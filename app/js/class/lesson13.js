/**
 * Created by yiyun on 2018/2/4.
 */
//类

    // 类的概念
        //基本语法  类的继承  静态方法
        // 静态属性 getter setter


{
    //基本定义和生成实例
    class Parent{
        constructor(name='mukewang'){
            this.name=name;
        }
    }
    let v_parent = new Parent('v');
    let v_parent1 = new Parent();
    console.log('构造函数和实例',v_parent);
    console.log('构造函数和实例',v_parent1);
}


//继承
{
    class Parent{
        constructor(name='mukewang'){
            this.name=name;
        }
    }
    class Child extends Parent{
    }
    console.log('继承',new Child());
}
//继承传递参数
{
    class Parent{
        constructor(name='mukewang'){
            this.name=name;
        }
    }
    class Child extends Parent{
        constructor(name='child'){
            super(name);
            this.type='child';
        }
    }
    console.log('继承',new Child('哇哈哈哈'));
}

//getter setter
{
    class Parent{
        constructor(name='mukewang'){
            this.name=name;
        }
        get longName(){
            return 'mk'+this.name;
        }
        set longName(value){
             this.name=value;
        }
    }
    let v=new Parent();
    console.log('getter',v.longName);
    v.longName='hello';
    console.log('setter',v.longName);
}


//静态方法
{
    class Parent{
        constructor(name='mukewang'){
            this.name=name;
        }
        static tell(){
            console.log('tell');
        }
    }
    Parent.tell();
}
//静态属性
{
    class Parent{
        constructor(name='mukewang'){
            this.name=name;
        }

    }
    Parent.type='test';
    console.log('静态属性',Parent.type);
}
