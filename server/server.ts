var express = require('express');
var path = require('path');
var config = require('./app/config');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var favicon = require('serve-favicon');
var HttpError = require('./app/error').HttpError;
var AuthError = require('./app/error').AuthError;
var port: number = process.env.PORT || config.get('port');
var app = express();
var async = require('async');
var pdf = require('pdfcrowd');

// create an API client instance
var client = new pdf.Pdfcrowd("yuliya", "cb73bc7414df02a0ca88aea32f159971");

app.use('/app', express.static(path.resolve(__dirname, 'app')));
app.use('/libs', express.static(path.resolve(__dirname, 'libs')));



var renderIndex = (req: express.Request, res: express.Response) => {
    res.sendFile(path.resolve(__dirname, 'index.html'));
}






var body={};
app.get('/',function(req, res, next) {
    res.sendFile(path.resolve(__dirname, 'index.html'));
});
app.get('/pdf', function (req, res, next) {
    console.log(body);
   client.convertHtml('<html>'+body.stringHTML+'</html>', pdf.sendHttpResponse(res)); 
});
app.post('/pdf', function (req, res, next) {
    body=req.body;
   client.convertHtml('<html>hi im im</html>', pdf.sendHttpResponse(res)); 
});

var server = app.listen(port, function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log('This express app is listening on port:' + port);
});




var fs = require('fs');
var busboy = require('connect-busboy');

app.use(busboy()); 

app.post('/upload', function(req, res) {
    var fstream;
    
    req.busboy.on('file', function (fieldname, file, filename) {
        console.log("Uploading: " + filename); 
        fstream = fs.createWriteStream(__dirname + '/files/' + filename);
        file.pipe(fstream);
        fstream.on('close', function () {
            res.redirect('back');
        });
    });
    req.pipe(req.busboy);
});
