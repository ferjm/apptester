var express = require('express');
var fs = require('fs');
var crypto = require('crypto');

var app = express();

// Serve special files
app.get('/manifest.webapp', function(req, res) {
  var manifest = fs.readFileSync('manifest.webapp').toString();
  var hash = crypto.createHash('md5').update(manifest).digest("hex");
  res.set('Etag', hash);
  res.writeHead(200, {'Content-Type': 'application/x-web-app-manifest+json'});
  res.end(manifest);
});

app.get('/manifest.appcache', function(req, res) {
  var manifest = fs.readFileSync('manifest.appcache').toString();
  var hash = crypto.createHash('md5').update(manifest).digest("hex");
  res.set('Etag', hash);
  res.writeHead(200, {'Content-Type': 'text/cache-manifest'});
  res.end(manifest);
});

app.get('/apps/bigHostedApp/manifest.webapp', function(req, res) {
  var manifest = fs.readFileSync(__dirname + '/webapp/apps/bigHostedApp/manifest.webapp').toString();
  var hash = crypto.createHash('md5').update(manifest).digest("hex");
  res.set('Etag', hash);
  res.writeHead(200, {'Content-Type': 'application/x-web-app-manifest+json'});
  res.end(manifest);
});

app.get('/apps/bigHostedApp/manifest.appcache', function(req, res) {
  var manifest = fs.readFileSync(__dirname + '/webapp/apps/bigHostedApp/manifest.appcache').toString();
  var hash = crypto.createHash('md5').update(manifest).digest("hex");
  res.set('Etag', hash);
  res.writeHead(200, {'Content-Type': 'text/cache-manifest'});
  res.end(manifest);
});

app.get('/apps/packagedApp/manifest.webapp', function(req, res) {
  var manifest = fs.readFileSync(__dirname + '/webapp/apps/packagedApp/manifest.webapp').toString();
  var hash = crypto.createHash('md5').update(manifest).digest("hex");
  res.set('Etag', hash);
  res.writeHead(200, {'Content-Type': 'application/x-web-app-manifest+json'});
  res.end(manifest);
});

app.get('/apps/bigPackagedApp/manifest.webapp', function(req, res) {
  var manifest = fs.readFileSync(__dirname + '/webapp/apps/bigPackagedApp/manifest.webapp').toString();
  var hash = crypto.createHash('md5').update(manifest).digest("hex");
  res.set('Etag', hash);
  res.writeHead(200, {'Content-Type': 'application/x-web-app-manifest+json'});
  res.end(manifest);
});

app.get('/apps/appWrongCache/manifest.webapp', function(req, res) {
  var manifest = fs.readFileSync(__dirname + '/webapp/apps/appWrongCache/manifest.webapp').toString();
  var hash = crypto.createHash('md5').update(manifest).digest("hex");
  res.set('Etag', hash);
  res.writeHead(200, {'Content-Type': 'application/x-web-app-manifest+json'});
  res.end(manifest);
});

app.get('/apps/appWrongCache/manifest.appcache', function(req, res) {
  var manifest = fs.readFileSync(__dirname + '/webapp/apps/appWrongCache/manifest.appcache').toString();
  var hash = crypto.createHash('md5').update(manifest).digest("hex");
  res.set('Etag', hash);
  res.writeHead(200, {'Content-Type': 'text/cache-manifest'});
  res.end(manifest);
});

// Serve the content
app.use(express.static(__dirname + '/webapp'));

app.listen(3000);
