(function() {
    'use strict';

    function IndexCtrl($scope) {
        
       // $scope.title = 'Welcome to Facebook Mini app built with angularjs.';

    }
//https://3e2fd3ec.ngrok.io
     

    function AboutCtrl($scope) {
        $scope.title = 'Login Page.';
    }
    angular.module('minifb')


    
    .controller('IndexCtrl',['$scope', IndexCtrl])
    .controller('aboutController',['$scope', AboutCtrl]);

    
})();


