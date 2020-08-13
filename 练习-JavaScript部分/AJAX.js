// ajax请求步骤：
// 1.实例化XMLHttpRequest对象
// 2.发送请求
// 3.结束
function ajax(options){
  let method=options.method||"GET",//请求方式，不传则默认GET请求
      params=options.params,//GET请求携带的参数
      data=options.data,//POST请求传递的参数
      url=options.url+(params?'?'+Object.keys(params).map(key=>key+'='+params[key]).join('&'):""),
      async=options.async===false?false:true;
      success=options.success,
      headers=options.headers;

  let xhr;
  // 创建xhr对象
  if(window.XMLHttpRequest){
    xhr=new XMLHttpRequest();
  }else{
    xhr=new ActiveXObject();
  }

//   readyState的五种状态详解：
// 0 － （未初始化）还没有调用send()方法
// 1 － （载入）已调用send()方法，正在发送请求
// 2 － （载入完成）send()方法执行完成，已经接收到全部响应内容
// 3 － （交互）正在解析响应内容
// 4 － （完成）响应内容解析完成，可以在客户端调用了
  xhr.onreadystatechange=function(){
    if(xhr.readyState===4&&xhr.status===200){
      sccess&&success(xhr.responseText);
    }
  }

  xhr.open(method,url,async);

  if(headers){
    Object.keys(headers).forEach(key=>xhr.setRequestHeader(key,headers[key]));
  }

  method==="GET"?xhr.send():xhr.send(data);
}