function template(tmpl, data) {
    let reg = /\{\{(\w+)\}\}/g;
    return tmpl.replace(reg, ($0, $1) => {
        return data[$1];
    })
}

var tmpl = 'this is a = {{a}},this is b = {{b}}';
var data = { a: 1, b: 'test' };
console.log(template(tmpl, data));