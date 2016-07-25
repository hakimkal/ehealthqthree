(function() {
    'use strict';

angular.module('minifb')
.controller('meCtrl',['$scope','facebookService',function ($scope,facebookService) {
  $scope.title = "Welcome to My Profile";
  $scope.isLoggedIn = false;
  $scope.getMyLastName =
   facebookService.getMyLastName() 
  
     .then(function(response) {
       
       $scope.myProfile = response;
      
     }
   );

 console.log($scope);
}]);
})();