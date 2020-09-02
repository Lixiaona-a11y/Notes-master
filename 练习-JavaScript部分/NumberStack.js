// push：只能push数字，否则报错
// pop
// maxN:第N大的数，时间复杂度O(1)
function NumberStack() {
    this.stack = []; //存储栈
    this.maxStack = []; //辅助栈,从小到大的排序
}
NumberStack.prototype.push = function(num) {
    if (typeof num !== 'number') {
        console.log('只能push数字');
        return;
    }
    let flag = false;
    this.stack.push(num);
    if (!this.maxStack.length) {
        this.maxStack.push(num);
    } else {
        for (let i = 0; i < this.maxStack.length; i++) {
            if (num < this.maxStack[i]) {
                this.maxStack.splice(i, 0, num);
                flag = true;
                break;
            }
        }
        if (!flag) {
            this.maxStack.push(num);
        }
    }
}

NumberStack.prototype.pop = function() {
    let num = this.stack.pop();
    this.maxStack.splice(this.maxStack.indexOf(num), 1);
    return num;
}

NumberStack.prototype.maxN = function(n) {
    if (n < 1 || n > this.maxStack.length) return false;
    return this.maxStack[this.maxStack.length - n];
}

var numStack = new NumberStack();
numStack.push(1);
numStack.push(7);
numStack.push(4);
console.log(numStack);
console.log(numStack.maxN(2));
console.log(numStack);