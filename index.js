var connect = require('connect');
var serveStatic = require('serve-static');

var app = connect();

app.use(serveStatic(__dirname)).listen(process.env.PORT || 8080, function(){
    console.log('Server running on 8080...');
});