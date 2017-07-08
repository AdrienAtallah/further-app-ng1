(function(window) {
  window.__env = window.__env || {};

  var baseURL = 'http://localhost:9090/';
  // var baseURL = 'http://ea0856a7.ngrok.io/';

  // API url
  window.__env.apiUrl = baseURL + 'further-service/v1/';

  // Base url
  window.__env.baseUrl = '/';

  // Whether or not to enable debug mode
  // Setting this to false will disable console output
  window.__env.enableDebug = true;
}(this));
