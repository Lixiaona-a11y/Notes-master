var str = 'IT面试题博客中包含很多<a href="http://hi.baidu.com/mianshiti/blog/category/微软面试题">微软面试题</a>';

var reg = /href="(.*)"/g;
result = reg.exec(str);
console.log(result[1]);