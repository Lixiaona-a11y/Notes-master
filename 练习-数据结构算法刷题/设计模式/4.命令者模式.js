// 接收者类
class Receiver {
    execute() {
        console.log('接收者执行请求');
    }
}

// 命令对象类
class Command {
    constructor(receiver) {
        this.receiver = receiver;
    }

    execute() { //调用接收者对应接口执行
        console.log('命令者对象->接收者->对应接口执行');
        this.receiver.execute();
    }
}

// 发布者类
class Invoker {
    constructor(command) {
        this.command = command;
    }
    invoke() { //发布请求，调用命令对象
        console.log('发布者发布请求');
        this.command.execute();
    }
}

const warehouse = new Receiver(); //仓库
const order = new Command(warehouse); //订单
const client = new Invoker(order); //客户
client.invoke();