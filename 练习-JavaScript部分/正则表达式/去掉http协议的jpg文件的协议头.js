var imgs = [
    'http://img.host.com/images/fds.jpg',
    'https://img.host.com/images/fjlj.jpg',
    'http://img.host.com/images/djalsdf.png',
    'https://img.host.com/images/adsjfl.png',
    'http://img.host.com/image/jasdlf.jpg'
];

var result = imgs.map(img => {
    return img.replace(/http(s?):(\/\/.+\.jpg)/, ($0, $1, $2) => {
        return $2;
    })
})

console.log(result);