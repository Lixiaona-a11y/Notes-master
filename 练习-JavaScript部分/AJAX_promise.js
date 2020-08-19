function ajax(options) {
  return new Promise((resolve, reject) => {
    let method = options.method || 'GET',
      params = options.params,
      data = options.data,
      url = options.url + (params ? `?${Object.keys(params).map((item) => item + '=' + params[item]).join('&')}` : ''),
      headers=options.headers,
      async = options.async;


    let xhr;
    if (window.XMLHttpRequest) {
      xhr = new XMLHttpRequest();
    } else {
      xhr = new ActiveXObject();
    }

    xhr.open(method, url, async);

    xhr.onreadystatechane = function () {
      if (xhr.state === 4 && xhr.status === 200) {
        resolve(JSON.parse(xhr.responseText));
      }else{
        reject(xhr);
      }
    }
    
    headers&&Object.keys(headers).forEach(key=>xhr.setRequestHeader(key,headers[key]));
  
    method==="GET"?xhr.send():xhr.send(data);
  })
}
