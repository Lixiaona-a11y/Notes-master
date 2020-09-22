class Person {
    // 调用类的构造方法
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    showName() {
        console.log('调用父类的方法');
        console.log(this.name, this.age);
    }
}

let p1 = new Person('kobe', 39);
console.log(p1);

// 定义一个子类
class Student extends Person {
    constructor(name, age, salary) {
        super(name, age); //通过super调用父类构造方法
        this.salary = salary;
    }
    showName() { //在子类自身定义方法
        console.log('调用子类的方法');
        console.log(this.name, this.age, this.salary);
    }
}
let s1 = new Student('wade', 38, 100000000);
console.log(s1);
s1.showName();