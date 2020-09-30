function findMostWord(article) {
    if (!article) return;

    article = article.trim().toLowerCase();
    let reg = /[a-z]+/g,
        arr = article.match(reg),
        max = 0,
        maxWord,
        count,
        visited = [];

    article = " " + arr.join("  ") + " ";
    arr.forEach(item => {
        if (!visited.includes(item)) {
            let word = new RegExp(" " + item + " ", "g");
            count = article.match(word).length;
            if (count > max) {
                max = count;
                maxWord = item;
            }
            visited.push(item);
        }
    })
    return `${maxWord} is the most word:${max}`;
}

let str = 'i i i I Age i I has reached the end of the begining of a word.May be guilty in his seems to passing a lot of different life become the appearance of the same day;';
console.log(findMostWord(str));