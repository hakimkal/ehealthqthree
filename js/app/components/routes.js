(function() {
    'use strict';

//angular.module('minifb',['ngRoute','ngResource']) 
angular.module('minifb') 


// configure our routes
    .config(function($routeProvider, $locationProvider) {
        $routeProvider

            // route for the home page
            .when('/', {
                templateUrl : 'templates/home.html',
                controller  : 'IndexCtrl'
            })

            // route for the about page
            .when('/login', {
                templateUrl : 'templates/about.html',
                controller  : 'aboutController'
            })

            // route for the contact page
            .when('/contact', {
                templateUrl : 'templates/contact.html',
                controller  : 'contactController'
            })

            // route for the user profile page
            .when('/me', {
                templateUrl : 'templates/me.html',
                controller  : 'meCtrl'
            });

      $locationProvider.html5Mode(
      
      {
  enabled: true,
  requireBase: false
}
      );       
    });
   
})();

