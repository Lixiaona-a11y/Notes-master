  /**
   * 使用match方法实现模糊查询
   * @param  {Array}  list     进行查询的数组
   * @param  {String} keyWord  查询的关键词
   * @return {Array}           查询的结果
   */
  function fuzzyQuery(list, keyWord) {
      let arr = [];
      for (let i = 0; i < list.length; i++) {
          if (list[i].match(keyWord) !== null) {
              arr.push(list[i]);
          }
      }
      return arr;
  }

  var list = ['key', 'word', 'keyWord', 'hello', 'hell'];
  console.log(fuzzyQuery(list, 'hel'));