const APP_REPO = document.location.protocol + '//' + document.location.host;
const BIG_HOSTED_APP = APP_REPO + '/apps/bigHostedApp/manifest.webapp';
const PACKAGED_APP = APP_REPO + '/apps/packagedApp/package.manifest';

function bigHostedApp() {
  var req = navigator.mozApps.install(BIG_HOSTED_APP);
  req.onsuccess = function onsuccess() {
  };

  req.onerror = function onerror(e) {
    console.log('Error ' + e.target.error.name);
  };
}

function packagedApp() {
  var req = navigator.mozApps.installPackage(PACKAGED_APP);
  req.onsuccess = function onsuccess() {
  };

  req.onerror = function onerror(e) {
    console.log('Error ' + e.target.error.name);
  };
}

window.addEventListener('load', function init(evt) {
  document.getElementById('bigHostedApp').addEventListener('click', bigHostedApp);
  document.getElementById('packagedApp').addEventListener('click', packagedApp);
});
