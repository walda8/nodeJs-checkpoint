const fs= require('fs');
var fileName = process.argv[2];
 file = fs.readFile(fileName, function(err, data) {
    if (err) console.log('err');
    console.log(data.toString().split('\n').length - 1)
    });
    
