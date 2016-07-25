(function() {
    'use strict';

angular.module('facebookFeed',[])

.factory('facebookService',[ '$q',function($q) {
    return {
       
   getMyLastName: function() {
       console.log(window);
     
             //console.log("I have been called to serve");
             return  $rootScope.profile;
        }
    };
}])
    ;
})();