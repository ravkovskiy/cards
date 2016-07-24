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
var nodemailer = require('nodemailer');
var fs = require('fs');
var busboy = require('connect-busboy');
// create an API client instance for 'pdfcrowd'
var client = new pdf.Pdfcrowd("Hagerre1950", "bea64af02d3211af75743ad8ad287c2b");

app.use(express.static('files'));
app.use('/app', express.static(path.resolve(__dirname, 'app')));
app.use('/libs', express.static(path.resolve(__dirname, 'libs')));
app.use(busboy());
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json 
app.use(bodyParser.json())

app.get('/', function (req, res, next) {
    res.sendFile(path.resolve(__dirname, 'index.html'));
});

app.post('/pdf', function (req, res, next) {
    client.convertHtml('<html>' + req.body.file + '</html>', pdf.saveToFile(__dirname + '/../files/' + req.body.name));
    res.end();
});

app.post('/upload', function (req, res, next) {
    var fstream;

    req.busboy.on('file', function (fieldname, file, filename) {
        console.log("Uploading: " + filename);
        fstream = fs.createWriteStream(__dirname + '/../files/' + filename);
        file.pipe(fstream);
        fstream.on('close', function () {
            res.send({});
        });
    });
    req.pipe(req.busboy);
});

app.post('/sendEmail', function (req, res, next) {
    var transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'k.ravkovskiy@gmail.com', // Your email id
            pass: 'kos.57630' // Your password
        }
    });
    var mailOptions = {
        from: 'k.ravkovskiy@gmail.com', // sender address
        to: 'ravkovskiy21@gmail.com', // list of receivers
        subject: 'Email Example', // Subject line
        //text: text //, // plaintext body
        attachments: [
            {
                filename: 'myCard.pdf',
                path: __dirname + '/../files/' + req.body.name
            }
        ]
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
            res.json({ yo: 'error' });
        } else {
            console.log('Message sent: ' + info.response);
            res.json({ yo: info.response });
        };
    });
});

var server = app.listen(port, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('This express app is listening on port:' + port);
});



