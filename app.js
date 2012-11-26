var express = require('express');
var fs = require('fs');

var app = express();

// Serve special files
app.get('/manifest.webapp', function(req, res) {
  var manifest = fs.readFileSync('manifest.webapp').toString();

  res.writeHead(200, {'Content-Type': 'application/x-web-app-manifest+json'});
  res.end(manifest);
});

app.get('/manifest.appcache', function(req, res) {
  var manifest = fs.readFileSync('manifest.appcache').toString();

  res.writeHead(200, {'Content-Type': 'text/cache-manifest'});
  res.end(manifest);
});

app.get('/apps/bigHostedApp/manifest.webapp', function(req, res) {
  var manifest = fs.readFileSync(__dirname + '/webapp/apps/bigHostedApp/manifest.webapp').toString();

  res.writeHead(200, {'Content-Type': 'application/x-web-app-manifest+json'});
  res.end(manifest);
});

app.get('/apps/bigHostedApp/manifest.appcache', function(req, res) {
  var manifest = fs.readFileSync(__dirname + '/webapp/apps/bigHostedApp/manifest.appcache').toString();

  res.writeHead(200, {'Content-Type': 'text/cache-manifest'});
  res.end(manifest);
});

app.get('/apps/hostedAppEp/manifest.webapp', function(req, res) {
  var manifest = fs.readFileSync(__dirname + '/webapp/apps/hostedAppEp/manifest.webapp').toString();

  res.writeHead(200, {'Content-Type': 'application/x-web-app-manifest+json'});
  res.end(manifest);
});

app.get('/apps/packagedApp/manifest.webapp', function(req, res) {
  var manifest = fs.readFileSync(__dirname + '/webapp/apps/packagedApp/manifest.webapp').toString();

  res.writeHead(200, {'Content-Type': 'application/x-web-app-manifest+json'});
  res.end(manifest);
});

app.get('/apps/bigPackagedApp/manifest.webapp', function(req, res) {
  var manifest = fs.readFileSync(__dirname + '/webapp/apps/bigPackagedApp/manifest.webapp').toString();

  res.writeHead(200, {'Content-Type': 'application/x-web-app-manifest+json'});
  res.end(manifest);
});

app.get('/apps/packagedAppEp/manifest.webapp', function(req, res) {
  var manifest = fs.readFileSync(__dirname + '/webapp/apps/packagedAppEp/manifest.webapp').toString();

  res.writeHead(200, {'Content-Type': 'application/x-web-app-manifest+json'});
  res.end(manifest);
});

app.get('/apps/appWrongCache/manifest.webapp', function(req, res) {
  var manifest = fs.readFileSync(__dirname + '/webapp/apps/appWrongCache/manifest.webapp').toString();

  res.writeHead(200, {'Content-Type': 'application/x-web-app-manifest+json'});
  res.end(manifest);
});

app.get('/apps/appWrongCache/manifest.appcache', function(req, res) {
  var manifest = fs.readFileSync(__dirname + '/webapp/apps/appWrongCache/manifest.appcache').toString();

  res.writeHead(200, {'Content-Type': 'text/cache-manifest'});
  res.end(manifest);
});

// Serve the content
app.use(express.static(__dirname + '/webapp'));

app.listen(3000);
