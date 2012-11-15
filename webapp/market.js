const APP_REPO = document.location.protocol + '//' + document.location.host;
const BIG_HOSTED_APP = APP_REPO + '/apps/bigHostedApp/manifest.webapp';
const PACKAGED_APP = APP_REPO + '/apps/packagedApp/package.manifest';
const WRONG_CACHE_APP = APP_REPO + '/apps/appWrongCache/manifest.webapp';

function bigHostedApp() {
  var req = navigator.mozApps.install(BIG_HOSTED_APP);
  req.onsuccess = function onsuccess() {
    console.log('Successfully installed bigHostedApp');
  };

  req.onerror = function onerror(e) {
    console.log('Error ' + e.target.error.name);
  };
}

function packagedApp() {
  var req = navigator.mozApps.installPackage(PACKAGED_APP);
  req.onsuccess = function onsuccess() {
    console.log('Successfully installed packagedApp');
  };

  req.onerror = function onerror(e) {
    console.log('Error ' + e.target.error.name);
  };
}

function appWithWrongCache() {
  var req = navigator.mozApps.install(WRONG_CACHE_APP);
  req.onsuccess = function onsuccess() {
    console.log('Something went wrong. You installed a wrong app');
  };

  req.onerror = function onerror(e) {
    console.log('Got an error! ' + e.target.error.name);
  };
}

window.addEventListener('load', function init(evt) {
  document.getElementById('bigHostedApp').addEventListener('click', bigHostedApp);
  document.getElementById('packagedApp').addEventListener('click', packagedApp);
  document.getElementById('appWrongCache').addEventListener('click', appWithWrongCache);
});
