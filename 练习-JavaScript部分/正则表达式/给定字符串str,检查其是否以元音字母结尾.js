function endsWithVowel(str) {
    return /[e,a,i,o,u]$/i.test(str);
}

console.log(endsWithVowel('gorilla'));
console.log(endsWithVowel('gorille'));
console.log(endsWithVowel('gorillx'));
console.log(endsWithVowel('gorillv'));