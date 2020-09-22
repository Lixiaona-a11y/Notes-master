// 借助原型可以基于已有的对象来创建对象，var B=Object.create(A)以A对象为原型，生成了B的__proto__对象，B继承了A的所有属性和方法。
function Person(name, age) {
    this.name = name;
    this.age = age;
}
Person.prototype.setAge = function() {
    console.log('111');
}

function Student(name, age, price) {
    Person.call(this, name, age);
    this.price = price;
    this.setScore = function() {}
}
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

var s1 = new Student('Tom', 20, 15000);
console.log(s1 instanceof Student, s1 instanceof Person);
console.log(s1.constructor);
console.log(s1);