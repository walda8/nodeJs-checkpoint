const fs = require('fs')
var directory = process.argv[2]
var end = process.argv[3]
fs.readdir(directory, function (err, list) {
    if (err) {
        console.log(err)
    }
    console.log(list.filter(el => el.endsWith('.' + end)).join('\n'))
})