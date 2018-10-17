var app = angular.module("app", ['ngRoute']);
app.config( function ($routeProvider, $locationProvider, $httpProvider) {
  $locationProvider.hashPrefix('');
  $routeProvider
  .when('/', {
    templateUrl:   '/assets/partials/main.html',
    controller: 'smokeController'
   })
   .when('/listen', {
    templateUrl:   '/assets/partials/tracks.html',
    controller: 'smokeController'
   })
    .when('/', {
    templateUrl:   '/assets/partials/main.html',
    controller: 'smokeController'
   })
  .otherwise({
    redirectTo: '/'
  });
});
