(function() {
    'use strict';

   // angular.module('minifb', ['boilerplate-templates', 'angular-route','angular-resource'])
     angular.module('minifb',['ngRoute','ngResource','facebookFeed']) 

     
.run( function( $rootScope ) {
   
  // Load the facebook SDK asynchronously
  
      $rootScope.user = {};

//This is called on successful login
function getUserProfile(){
  console.log('getUserProfile');
  FB.api('/me', {
                fields: 'name, picture'
            },function(response){
              $rootScope.profile = response;
            });
            
}
      // This is called with the results from from FB.getLoginStatus().

  function statusChangeCallback(response) {
    console.log('statusChangeCallback');
    console.log(response);
    // The response object is returned with a status field that lets the
    // app know the current login status of the person.
    // Full docs on the response object can be found in the documentation
    // for FB.getLoginStatus().
    if (response.status === 'connected') {
      // Logged into your app and Facebook.
     // testAPI();
     getUserProfile();

     $rootScope.user = response;
     console.log($rootScope);
    } else if (response.status === 'not_authorized') {
      // The person is logged into Facebook, but not your app.
      document.getElementById('status').innerHTML = 'Please log ' +
        'into this app.';
    } else {
      // The person is not logged into Facebook, so we're not sure if
      // they are logged into this app or not.
      document.getElementById('status').innerHTML = 'Please log ' +
        'into Facebook.';
    }
  }

  // This function is called when someone finishes with the Login
  // Button.  See the onlogin handler attached to it in the sample
  // code below.
  function checkLoginState() {
    FB.getLoginStatus(function(response) {
      statusChangeCallback(response);
    });
  }


  window.fbAsyncInit = function() {
    FB.init({
      appId      : '1747010768907981',
      xfbml      : true,
      version    : 'v2.7'
    });
 FB.getLoginStatus(function(response) {
   $rootScope.statusChangeCallback=  statusChangeCallback(response);
  });
 
  };

 
//1746716142270777
  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));

   
 
   
});




})();