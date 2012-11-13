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

  res.writeHead(200, {'Content-Type': 'text/cache-manifest'});
  res.end(manifest);
});

app.get('/apps/packagedApp/package.manifest', function(req, res) {
  var manifest = fs.readFileSync(__dirname + '/webapp/apps/packagedApp/package.manifest').toString();

  res.writeHead(200, {'Content-Type': 'text/cache-manifest'});
  res.end(manifest);
});

app.get('/apps/packagedApp/application.zip', function(req, res) {
  var appPackage = fs.readFileSync(__dirname + '/webapp/apps/packagedApp/application.zip');

  res.writeHead(200);
  res.end(appPackage);
});

// Serve the content
app.use(express.static(__dirname + '/webapp'));

app.listen(3000);
