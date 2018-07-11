var app = angular.module("app", ['ngRoute']);
app.config( function ($routeProvider, $locationProvider, $httpProvider) {
  $locationProvider.hashPrefix('');
  $routeProvider
  .when('/', {
    templateUrl:   '/assets/partials/main.html',
    controller: 'smokeController'
   })
  .otherwise({
    redirectTo: '/'
  });
});
