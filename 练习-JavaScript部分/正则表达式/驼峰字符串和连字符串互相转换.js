var str = 'borderLeftColor';
var str2 = 'border-left-color';

console.log(str.replace(/[A-Z]/g, $0 => `-${$0.toLowerCase()}`));
console.log(str2.replace(/-([a-z])/g, ($0, $1) => $1.toUpperCase()));