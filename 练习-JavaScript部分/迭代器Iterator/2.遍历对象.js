var student = {
    name: "wujunchuan",
    age: 22,
    loacte: {
        country: 'china',
        city: 'xiamen',
        shcool: 'XMUT'
    }
}

for (let key of Object.keys(student)) {
    console.log(key + ": " + student[key]);
}