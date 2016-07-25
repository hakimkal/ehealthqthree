(function() {
    'use strict';

angular.module('minifb')
.controller('meCtrl',['$scope',function ($scope) {
  $scope.title = "Welcome to My Profile";
  $scope.isLoggedIn = false;
  $scope.getMyLastName = $scope.profile;
   

 console.log($scope);
}]);
})();