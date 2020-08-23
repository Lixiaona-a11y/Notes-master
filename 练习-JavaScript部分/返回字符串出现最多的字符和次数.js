function count(str){
    let maxCount=0,count,maxOne,tested=[];
    for(let i=0;i<str.length;i++){
        if(!tested.includes(str[i])){
            let reg=new RegExp(str[i],"g");
            count=str.match(reg).length;
            if(maxCount<count){
                maxCount=count;
                maxOne=str[i];
            }
            tested.push(str[i]);
        }
    }
    return `${maxOne} is the most:${maxCount}`;
}

console.log(count("helloo"));