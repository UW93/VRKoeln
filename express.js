var express = require('express');
var app = express();

app.get('/koelnVR', function (req, res) {
   
   res.sendFile('C:\\Users\\uwr\\Desktop\\Node\\Test\\koeln.html');
})


var server = app.listen(1993, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})