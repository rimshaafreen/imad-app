var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/'https://thumb1.shutterstock.com/display_pic_with_logo/1058333/126256238/stock-vector-illustration-of-cartoon-dog-126256238.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'https://thumb1.shutterstock.com/display_pic_with_logo/1058333/126256238/stock-vector-illustration-of-cartoon-dog-126256238.jpg'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
