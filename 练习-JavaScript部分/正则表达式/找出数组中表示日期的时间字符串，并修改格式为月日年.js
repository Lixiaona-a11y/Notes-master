var times = ['2006/02/03',
    'test/07/sd',
    '2016/05/10',
    '1998-03-07',
    '12345/23/45678',
    '1234/23/56789',
    '12345/23/45'
]

var result = times.map(time => {
    return time.replace(/^(\d{4})[/-](\d{2})[/-](\d{2})$/, (item, $1, $2, $3) => {
        return $2 + '-' + $3 + '-' + $1;
    })
})

console.log(result);