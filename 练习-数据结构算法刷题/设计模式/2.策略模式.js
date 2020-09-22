// 策略类
var Strategies = {
    "backend": function(task) {
        console.log('进行后端任务:', task);
    },
    "frontend": function(task) {
        console.log('进行前端任务', task);
    },
    "testend": function(task) {
        console.log('进行测试任务:', task);
    }
}

// 环境类
var Context = function(type, task) {
    typeof Strategies[type] === "function" && Strategies[type](task);
}

Context('frontend', '前端');